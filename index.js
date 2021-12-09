const express = require('express');
const morgan = require('morgan');

const app = express();
const bodyParser = require('body-parser'),
    methodOverride = require('method-override');
    //uuid = require('uuid');

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
    res.json(movies);
});

app.get('/movies/:movieInfo', (req, res)=> {
  //  res.json(movies.find((movies) => { 
    //return movies.movieInfo === req.params.movieInfo}));
    res.send('returns that movies information of: description, genre, director, and an image');
});

app.get('/movies/genres/:genreInfo', (req, res)=> {
   // res.json(); 
    res.send('returns list of movies by genres');
});

app.get('/directors', (req, res)=> {
   // res.json(directors);
    res.send('returns list of directors');
});

app.get('/directors/:directorsInfo', (req, res) => {
    //res.json(directors.find((directors) => {
   // return directors.directorsInfo === req.params.directorsInfo}));
    res.send('returns a webpage of the selected directors info');
});

app.get('/unknown', (req, res) => {
    res.send('We are currently under construction.');
});

app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', { root: __dirname });
});

// POST/PUT Requests

app.post('/users', (req, res) => {
    //let newUser = req.body;

    res.send('allows area for new user to register');
});

app.put('/users/:accountInfo', (req, res) => 
//{
   // let user = users.find(user) => return user.name === req.params.name});
    
    res.send('allows user access to their account information to edit/update user name'));

app.post('/users/accountInfo/favoritesList/:movieID', (req, res) => {
    res.send('allows user to add a movie to their list of favorites');
});

//Delete Requests

app.delete('/users/accountInfo/favoritesList/:movieID', (req, res) => {
    res.send('allows user to remove a movie from their list of favorites');
});

app.delete('/users/accountInfo/:user', (req, res) => {
    res.send('allows user to deregister/delete their account');
});

//listen for requests
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});