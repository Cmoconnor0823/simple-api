const express = require('express');
const app = express();
const cors = require('cors');
const people = require('./people.json');
const planets = require('./planets.json');
const species = require('./species.json');
const starships = require('./starships.json');
const vehicles = require('./vehicles.json');
const films = require('./films.json');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get('/people', (req, res) => {
    res.json(people);
});
app.get('/planets', (req, res) => {
    res.json(planets);
});
app.get('/species', (req, res) => {
    res.json(species);
});
app.get('/starships', (req, res) => {
    console.log(starships)
    res.send("hello world")
});
app.get('/vehicles', (req, res) => {
    res.json(vehicles);
});
app.get('/films', (req, res) => {
    res.json(films);
});

app.listen(8000, ()=>console.log("The server LISTENS..."));