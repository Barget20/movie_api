movies.js
var movie1 = {
    Title: "Ready Player One",
    Description: "When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.",
    Genre: {
        Name: "Science Fiction",
        Description: "Sci-fi films are often quasi-scientific, visionary and imaginative - complete with heroes, aliens, distant planets, impossible quests, improbable settings, fantastic places, great dark and shadowy villains, futuristic technology, unknown and unknowable forces, and extraordinary monsters (things or creatures from space), either created by mad scientists or by nuclear havoc."
    },
    Director: {
        Name: "Steven Spielberg",
        Bio: "",
        Birth: "1946",
    },
    ImagePath: "https://images8.alphacoders.com/911/thumb-1920-911204.jpg",
    Featured: true
    }
db.movies.insertOne(movie1)

var movie2 = {
    Title: "Deadpool",
    Description: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
    Genre: {
        Name: "Comedy",
        Description: "Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect."
    },
    Director: {
        Name: "Tim Miller",
        Bio: "",
        Birth: "1964",
    },
    ImagePath: "https://images.moviesanywhere.com/e2f7c7625804e14592419db8f29c589d/c3c9a16a-acde-4b63-994e-5b58a955e4e7.jpg",
    Featured: true
    }
db.movies.insertOne(movie2)

var movie3 = {
    Title: "Fight Club",
    Description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
    Genre: {
        Name: "Drama",
        Description: "Dramas are serious, plot-driven presentations, portraying realistic characters, settings, life situations, and stories involving intense character development and interaction. Usually, they are not focused on special-effects, comedy, or action."
    },
    Director: {
        Name: "David Fincher",
        Bio: "",
        Birth: "1962",
    },
    ImagePath: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    Featured: true
    }
db.movies.insertOne(movie3)

var movie4 = {
    Title: "Inception",
    Description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    Genre: {
        Name: "Action",
        Description: "Action films usually include high energy, big-budget physical stunts and chases, possibly with rescues, battles, fights, escapes, destructive crises (floods, explosions, natural disasters, fires, etc.), non-stop motion, spectacular rhythm and pacing, and adventurous, often two-dimensional ''good-guy'' heroes (or recently, heroines) battling ''bad guys'' - all designed for pure audience escapism."
    },
    Director: {
        Name: "Christopher Nolan",
        Bio: "",
        Birth: "1970"
    },
    ImagePath: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    Featured: true
    }
db.movies.insertOne(movie4)

var movie5 = {
    Title: "Moneyball",
    Description: "Oakland A's general manager Billy Beane's successful attempt to assemble a baseball team on a lean budget by employing computer-generated analysis to acquire new players.",
    Genre: {
        Name: "Drama",
        Description: "Dramas are serious, plot driven presentations, portraying realistic characters, settings, life situations, and stories involving intense character development and interaction. Usually, they are not focused on special-effects, comedy, or action."
    },
    Director: {
        Name: "Bennett Miller",
        Bio: "",
        Birth: "1966"
    },
    ImagePath: "https://m.media-amazon.com/images/I/61Ify4mS7IL._AC_SL1000_.jpg",
    Featured: true
    }
db.movies.insertOne(movie5)

var movie6 = {
    Title: "The Nightmare Before Christmas",
    Description: "Jack Skellington, king of Halloween Town, discovers Christmas Town, but his attempts to bring Christmas to his home causes confusion.",
    Genre: {
        Name: "Animation",
        Description: "Animation is a method in which pictures are manipulated to appear as moving images. In traditional animation, images are drawn or painted by hand on transparent celluloid sheets to be photographed and exhibited on film.",
        },
    Director: {
        Name: "Henry Selick",
        Bio: "",
        Birth: "1952"
    },
    ImagePath: "https://m.media-amazon.com/images/I/51ydIhH52BL._AC_.jpg",
    Featured: true
    }
db.movies.insertOne(movie6)

var movie7 = {
    Title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    Description: "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
    Genre: {
        Name: "Action", 
        Description: "Action films usually include high energy, big-budget physical stunts and chases, possibly with rescues, battles, fights, escapes, destructive crises (floods, explosions, natural disasters, fires, etc.), non-stop motion, spectacular rhythm and pacing, and adventurous, often two-dimensional ''good-guy'' heroes (or recently, heroines) battling ''bad guys'' - all designed for pure audience escapism."
    },
    Director: {
        Name: "Gore Verbinski",
        Bio: "",
        Birth: "1964"
    },
    ImagePath: "https://lumiere-a.akamaihd.net/v1/images/p_piratesofthecaribbean_thecurseoftheblackpearl_19642_d1ba8e66.jpeg",
    Featured: true
    }
db.movies.insertOne(movie7)

var movie8 = {
    Title: "Pirates of the Caribbean: Dead Mans Chest",
    Description: "Jack Sparrow races to recover the heart of Davy Jones to avoid enslaving his soul to Jones' service, as other friends and foes seek the heart for their own agenda as well.",
    Genre: {
        Name: "Action",
        Description: "Action films usually include high energy, big-budget physical stunts and chases, possibly with rescues, battles, fights, escapes, destructive crises (floods, explosions, natural disasters, fires, etc.), non-stop motion, spectacular rhythm and pacing, and adventurous, often two-dimensional ''good-guy'' heroes (or recently, heroines) battling ''bad guys'' - all designed for pure audience escapism."
    },
    Director: {
        Name: "Gore Verbinski",
        Bio: "",
        Birth: "1964"
    },
    ImagePath: "https://i5.walmartimages.com/asr/72ea63ef-dc58-4a19-a597-47b086bea424_1.84adcb724a64b7e7f8959dd8fa025081.jpeg",
    Featured: true
}
db.movies.insertOne(movie8)

var movie9 = {
    Title: "Paper Towns",
    Description: "After an all-night adventure, Quentin's lifelong crush, Margo, disappears, leaving behind clues that Quentin and his friends follow on the journey of a lifetime.",
    Genre: {
        Name: "Drama",
        Description: "Dramas are serious, plot-driven presentations, portraying realistic characters, settings, life situations, and stories involving intense character development and interaction. Usually, they are not focused on special-effects, comedy, or action.",
    },
    Director: {
        Name: "Jake Schreier",
        Bio: "",
        Birth: "1981"
    },
    ImagePath: "https://m.media-amazon.com/images/I/71fqbdnvLIL._AC_SL1022_.jpg",
    Featured: true
}
db.movies.insertOne(movie9)

var movie10 = {
    Title: "Sherlock Holmes",
    Description: "Detective Sherlock Holmes and his stalwart partner Watson engage in a battle of wits and brawn with a nemesis whose plot is a threat to all of England.",
    Genre: {
        Name: "Thriller",
        Description: "Thriller film, also known as suspense film or suspense thriller, is a broad film genre that involves excitement and suspense in the audience."
    },
    Director: {
        Name: "Guy Ritchie",
        Bio: "",
        Birth: "1968"
    },
    ImagePath: "https://m.media-amazon.com/images/M/MV5BMTg0NjEwNjUxM15BMl5BanBnXkFtZTcwMzk0MjQ5Mg@@._V1_.jpg",
    Featured: true
}
db.movies.insertOne(movie10)

var movie11 = {
    Title: "That Thing You Do",
    Description: "A local Pennsylvania band scores a one-hit wonder in 1964 and rides the star-making machinery as long as they can, with lots of help from their manager.",
    Genre: {
        Name: "Comedy",
        Description: "Comedy is a genre of film in which the main emphasis is on humor. These films are designed to make the audience laugh through amusement and most often work by exaggerating characteristics for humorous effect.",
    },
    Director: {
        Name: "Tom Hanks",
        Bio: "",
        Birth: "1956"
    },
    ImagePath: "https://m.media-amazon.com/images/I/51V7K8HACAL._SY445_.jpg",
    Featured: true
}
db.movies.insertOne(movie11)


let user1 = {
    Username: "Brian A",
    Password: "11111",
    Email: "BrianA@gmail.com",
    Birthday:new Date("1990-01-01"),
    FavoriteMovies: ["61b3bf01d57fd41692c9f977"],
}
db.users.insertOne(user1)
let user2 = {
    Username: "Brian B",
    Password: "22222",
    Email: "BrianB@gmail.com",
    Birthday: new Date("1991-01-01"),
    FavoriteMovies: ["61b3d088d57fd41692c9f978"],
}
db.users.insertOne(user2)
let user3 = {
    Username: "Brian C",
    Password: "33333",
    Email: "BrianC@gmail.com",
    Birthday: new Date("1992-01-01"),
    FavoriteMovies: ["61b3d088d57fd41692c9f979"],
}
db.users.insertOne(user3)
let user4 = {
    Username: "Brian D",
    Password: "44444",
    Email: "BrianD@gmail.com",
    Birthday: new Date("1993-01-01"),
    FavoriteMovies: ["61b3d088d57fd41692c9f97f"],
}
db.users.insertOne(user4)
let user5 = {
    Username: "Brian E",
    Password: "55555",
    Email: "BrianE@gmail.com",
    Birthday: new Date("1994-01-01"),
    FavoriteMovies: ["61b3d088d57fd41692c9f981"],
}
db.users.insertOne(user5)

//Updates:

db.movies.update (
    {_id: ObjectId("61b3d088d57fd41692c9f981")},
    { $set: {Description: "A local Pennsylvania band scores a one-hit wonder in 1964 and rides the star-making machinery as long as they can, with lots of help from their manager. A lot of fun music is played."}}
)
db.movies.updateMany ({"Director.Name": "Gore Verbinski"},
    {$set: {"Director.Bio":"This is the bio for Gore Verbinski."}}
)
db.users.update(
    { Username: "Brian A"},
    { $push: {FavoriteMovies: ObjectId("61b7aa4fb74633d6d89281eb")}}
)
//Deletion:
db.users.deleteOne({Username: "Brian E"})

