import express from 'express';
const animalAPI = express.Router();

const animals = [
    {id: 1, name: 'Elephant', genre: 'Mammifère'},
    {id: 2, name: 'Lion', genre: 'Félin'},
    {id: 3, name: 'Aigle', genre: 'Rapace'},
    {id: 4, name: 'Fourmie', genre: 'Insecte'}
];

animalAPI.get('/animals', (req, res) => {
    res.json(animals);
});

animalAPI.post('/animals', (req, res) => {
    const newanimal = {
        id: animals.length + 1,
        name: req.query.name,
        genre: req.query.genre
    };
    animals.push(newanimal);
    res.json(newanimal);
});

animalAPI.get('/animals/:id', (req, res) => {
    const animalId = parseInt(req.params.id);
    const animal = animals.find(animal => animal.id === animalId);
    if (animal) {
        res.json(animal);
    } else {
        res.status(404).json({ message: 'animal not found' });
    }
});

export default animalAPI;