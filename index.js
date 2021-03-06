const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Models = require('./models.js');
const { check, validationResult} = require('express-validator');

const Movies = Models.Movie;
const Users = Models.User;

//keep for local testing
//mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true});
//keep for live testing
mongoose.connect( process.env.CONNECTION_URI, {useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const bodyParser = require('body-parser'),
    methodOverride = require('method-override');
app.use(bodyParser.json());
app.use(methodOverride());
app.use(morgan('common'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

const cors = require('cors');
let allowedOrigins = ['http://localhost:8080', 'http://testsite.com', 'http://localhost:1234', '*'];

app.use(cors());

//app.use(cors({
    //origin: (origin, callback) => {
        //if(!origin) return callback(null, true)
        //if(allowedOrigins.indexOf(origin) === -1){
            //let message = 'The CORS policy for this application doesnt allow access from origin' + origin;
            //return callback(new Error(message), false);
        //}
        //return callback(null, true);
    //}
//}));


let auth = require('./auth')(app);
const passport = require('passport');
require('./passport');


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


// GET requests

app.get('/', (req, res) => {
    res.send('Welcome');
})

  //Returns full list of movies
app.get('/movies', passport.authenticate('jwt', {session: false}), 
    (req, res) => {
    Movies.find()
        .then((movies) => {
            res.status(201).json(movies);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error: ' + error);
        });
});

  //Search movie by title
app.get('/movies/:title', passport.authenticate('jwt', {session: false}),  (req, res)=> {
    Movies.findOne({Title: req.params.title})
    .then((movie) => {
        res.json(movie);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});
  //Search for specific genre description 
app.get('/movies/genres/:genreInfo', passport.authenticate('jwt', {session: false}), (req, res)=> {
   Movies.findOne({"Genre.Name": req.params.genreInfo})
   .then((movie) => {
       res.json(movie.Genre.Description);
   })
   .catch((err) => {
       console.error(err);
       res.status(500).send("Error: " + err);
   });
});

  //Search for by Director's name
app.get('/movies/directors/:directorName', passport.authenticate('jwt', {session: false}),(req, res) => {
    Movies.find({ "Director.Name": req.params.directorName})
    .then((movie) => {
        res.json(movie);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send("Error: " + err);
    });
});

app.get('/unknown', (req, res) => {
    res.send('We are currently under construction.');
});

app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', { root: __dirname });
});

  //Returns list of users
app.get('/users', passport.authenticate('jwt', {session: false}), (req, res) => {
    Users.find()
    .then((users) => {
        res.status(201).json(users);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

  //Look up user by username
  //changed to :accountInfo from :username to clarify between the two during the process//
app.get('/users/:accountInfo', passport.authenticate('jwt', {session: false}), (req, res) => {
    Users.findOne({ Username: req.params.accountInfo})
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});


// POST/PUT Requests

  //Allows users to be added with certain guidelines
app.post('/users', 
    [
    check('Username', 'Username is required').isLength({min: 5}),
    check('Username', 'Username contains non alphanumeric characters - not allowed.').isAlphanumeric(),
    check('Password', 'Password is required').not().isEmpty(),
    check('Email', 'Email does not apprea to be valid').isEmail()
], (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    let hashPasswords = Users.hashPassword(req.body.Password);
    Users.findOne({ Username: req.body.Username})
    .then((user) => {
        if (user) {
            return res.status(400).send(req.body.Username + ' already exists');
        } else {
            Users
            .create({
                Username: req.body.Username,
                Password: hashPasswords,
                Email: req.body.Email,
                Birthday: req.body.Birthday
            })
            .then((user) =>{res.status(201).json(user) })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error: ' + error);
        })
        }
    })
    .catch((error) => {
        console.error(error);
        res.status(500).send('Error: ' + error);
    });
});

  //Allows users to edit their accounts
app.put('/users/:accountInfo', passport.authenticate('jwt', {session: false}), (req, res) => {
    Users.findOneAndUpdate({ Username: req.params.accountInfo}, { $set: {
        Username: req.body.Username,
        Password: req.body.Password,
        Email: req.body.Email,
        Birthday: req.body.Birthday
    }
    },
    { new: true}, //this line makes sure that the updated document is returned
    (err, updatedUser) => {
        if(err) {
            console.error(err);
            res.status(500).send('Error: ' + err);
        } else {
            res.json(updatedUser);
        }
    });   
});

  //Allows users to add a movie to their favorites list
app.post('/users/:accountInfo/favoritesList/:movieID', passport.authenticate('jwt', {session: false}), (req, res) => {
    Users.findOneAndUpdate({ Username: req.params.accountInfo}, {
        $push: {FavoriteMovies: req.params.movieID}
    },
    { new:true}, 
    (err, updatedUser) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error: ' + err);
        } else {
            res.json(updatedUser);
        }
    });
});


//Delete Requests

  //Allows user to delete a movie from their favorites list
app.delete('/users/:accountInfo/favoritesList/:movieID', passport.authenticate('jwt', {session: false}), (req, res) => {
    Users.findOneAndUpdate({ Username: req.params.accountInfo}, {
        $pull: {
            FavoriteMovies: req.params.movieID}
    },
    {new:true}, 
    (err, movieRemoved) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error: ' + err);
        } else {
            res.json(movieRemoved);
        }
    });
});

  //deletes a users account
app.delete('/users/:accountInfo', passport.authenticate('jwt', {session: false}), (req, res) => {
    Users.findOneAndRemove({ Username: req.params.accountInfo})
    .then((user) => {
        if (!user) {
            res.status(400).send(req.params.accountInfo + ' was not found');
        } else {
            res.status(200).send(req.params.accountInfo + ' was deleted.');
        }
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

//listen for local requests
//app.listen(8080, () => {
  //  console.log('Your app is listening on port 8080.');
//});

const port = process.env.PORT || 8080;
app.listen(port, '0.0.0.0',() => {
    console.log('listening on port ' + port);
});