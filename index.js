const express = require('express');
const morgan = require('morgan');

const app = express();
const bodyParser = require('body-parser'),
    methodOverride = require('method-override');

let topMovies = [
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
        title: 'Paper Towns',
        director: 'Jack Schreier'
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
app.get('/', (req, res)=> {
    res.send('Welcome to my movie club!');
});

app.get('/unknown', (req, rest) => {
    res.send('We are currently under construction.');
});

app.get('/documentation', (req, res) => {
    res.sendFile('public/documentation.html', { root: __dirname });
});

app.get('/movies', (req, res) => {
    res.json(topMovies);
});



//listen for requests
app.listen(8080, () => {
    console.log('Your app is listening on port 8080.');
});