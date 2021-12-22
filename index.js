const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Models = require('./models.js');

const Movies = Models.Movie;
const Users = Models.User;
//const Genres = Models.Genre;
//const Directors = Models.Director;

mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true});

const app = express();
const bodyParser = require('body-parser'),
    methodOverride = require('method-override');

  //  uuid = require('uuid');

let movies = [
    {
        title: 'Ready Player One',
        director: 'Steven Spielberg'
    },
    {
        title: 'Deadpool',
        director: 'Tim Miller'
    }, 
    {
        title: 'Fight Club',
        director: 'David Fincher'
    },
    {
        title: 'Inception',
        director: 'Christopher Nolan'
    },
    {
        title: 'Moneyball',
        director: 'Bennett Miller'
    },
    {
        title: 'The Nightmare Before Christmas',
        director: 'Henry Selick'
    },
    {
        title: 'Pirates of the Caribbean: The Curse of the Black Pearl',
        director: 'Gore Verbinski'
    },
    {    
        title: 'Pirates of the Caribbean: Dead Mans Chest',
        director: 'Gore Verbinski'
    },
    {
        title: 'Paper Towns',
        director: 'Jake Schreier'
    },
    {
        title: 'Sherlock Holmes (2009)',
        director: 'Guy Ritchie'
    },
    {
        title: 'That Thing You Do',
        director: 'Tom Hanks'
    },

]

app.use(morgan('common'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
let auth = require('./auth')(app);
const passport = require('passport');
require('./passport');
app.use(bodyParser.json());
app.use(methodOverride());
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


// GET requests

app.get('/', (req, res) => {
    res.send('Welcome');
})

app.get('/movies', (req, res) => {
    Movies.find()
    .then((movies) => {
        res.status(201).json(movies);
    })
    .catch((err) => {
        console.error(500).send('Error: ' + err)
    });
});

app.get('/movies/:movieInfo', (req, res)=> {
    Movies.findOne({Title: req.params.movieInfo})
    .then((movie) => {
        res.json(movie);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

app.get('/movies/genres/:genreInfo', (req, res)=> {
   Movies.findOne({"Genre.Name": req.params.genreInfo})
   .then((movie) => {
       res.json(movie.Genre.Description);
   })
   .catch((err) => {
       console.error(err);
       res.status(500).send("Error: " + err);
   });
});

//changed directorsInfo to directorInfo//
app.get('/movies/directors/:directorInfo', (req, res) => {
    Movies.find({ "Director.Name": req.params.directorInfo})
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

app.get('/users', (req, res) => {
    Users.find()
    .then((users) => {
        res.status(201).json(users);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

//changed to :accountInfo from :username//
app.get('/users/:accountInfo', (req, res) => {
    Users.findOne({ Username: req.params.accountInfo})
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        console.error(err);
        res.status(500).send('Error: ' + err);
    });
});

app.get('/movies', passport.authenticate('jwt', {session: false}), (req, res) => {
    Movies.find()
        .then((movies) => {
            res.status(201).json(movies);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Error: ' + error);
        });
});


// POST/PUT Requests

app.post('/users', (req, res) => {

    Users.findOne({ Username: req.body.Username})
    .then((user) => {
        if (user) {
            return res.status(400).send(req.body.Username + 'already exists');
        } else {
            Users
            .create({
                Username: req.body.Username,
                Password: req.body.Password,
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

//changed back to accountInfo instead of username//
app.put('/users/:accountInfo', (req, res) => {
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

//above replaces accountInfo
//app.put('/users/:accountInfo', (req, res) => 
//{
   // let user = users.find(user) => return user.name === req.params.name});
    
    //res.send('allows user access to their account information to edit/update user name'));

app.post('/users/:accountInfo/favoritesList/:movieID', (req, res) => {
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

app.delete('/users/:accountInfo/favoritesList/:movieID', (req, res) => {
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

app.delete('/users/:accountInfo', (req, res) => {
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

//listen for requests
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});