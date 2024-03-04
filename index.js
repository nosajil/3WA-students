import express from 'express';
import animalAPI from './route/animals.js';

const app = express();
const port = 3000;

app.use('/', animalAPI)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
