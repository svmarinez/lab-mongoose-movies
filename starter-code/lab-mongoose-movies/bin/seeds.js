const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie')

let celebrities = [
    {name: "Beyoncé", occupation: "Motivational Speaker and Pop Star", catchPhrase: "I woke up like dis"},
    {name: "Rihanna", occupation: "Motivational Speaker and Pop Star", catchPhrase: "Bitch, better have my money"},
    {name: "Scarlett Johansson", occupation: "Actress", catchPhrase: "Of course I deserve to pretend to be Japanese!"}
];

let movies = [
    {title:"Rushmore", genre: "Dark comedy", plot:"Kid gets his ish twisted and falls in love with the apple of his mentor's eye."}, 
    {title:"The Royal Tenenbaums", genre: "Dark comedy", plot:"A family of child prodigies is haunted by the reappearance of their father in their adult lives."}, 
    {title:"Ghost World", genre: "Dark comedy", plot:"Best friends grow apart while trying to find an apartment together."}
];

mongoose.connect('mongodb://localhost/lab-mongoose-movies', {useMongoClient: true})
    .then(o => {
        Promise.all([
            Celebrity.create(celebrities),
            Movie.create(movies)
        ])
        .then(() => mongoose.disconnect())
        .catch(e => console.log(e))
    })



