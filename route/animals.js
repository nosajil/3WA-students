import express from 'express';
const animalRouter = express.Router();

const animals = [
    { id: 1, name: 'Elephant', genre: 'Mammifère' },
    { id: 2, name: 'Lion', genre: 'Félin' },
    { id: 3, name: 'Aigle', genre: 'Rapace' },
    { id: 4, name: 'Fourmie', genre: 'Insecte' }
];

animalRouter.get('/animals', (req, res) => {
    res.render('animals', {animals}); 
});

animalRouter.get('/animals/:id', (req, res) => {
    const animal = animals.find(animal => animal.id === parseInt(req.params.id))
    res.json(animal)
    console.log(req.params.id);
})

animalRouter.get('/addanimal', (req, res) => {
    res.render('addAnimal')
})

animalRouter.post('/animals', (req, res) => {
    const newanimal = {
        id: animals.length + 1,
        name: req.body.name,
        genre: req.body.genre
    };
    animals.push(newanimal);
    res.render('animals', {animals})
});

animalRouter.put('/api/animals/:id', (req, res) => {
    let { id } = req.params
    const animal = animals.find(e => e.id === parseInt(id))
    animal.name = req.body.name
    animal.genre = req.body.genre
    res.json(movie)
})

animalRouter.delete('/api/animals/:id', (req, res) => {
    let { id } = req.params
    const animal = animals.find(e => e.id === parseInt(id))
    const index = animals.indexOf(animal)
    animals.splice(index, 1)
    res.send('My animal has been deleted')
})

export default animalRouter;