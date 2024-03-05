import express from 'express';
import animalRouter from './route/animals.js';
import path from 'node:path'
import bodyParser from 'body-parser'
const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({extended : true}))
app.use(express.json())
app.use(express.urlencoded({
    extended : true
}))

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

app.get('/', (req, res) => {
    res.render('home')
})

app.use('/', animalRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
