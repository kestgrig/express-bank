import express from 'express';
import { mainRouter } from './router/mainRouter.js';

const app = express();
const port = 5100;

app.use(express.json({
    type: 'application/json',
}));
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/', mainRouter);

app.use((req, res, next) => {
    return res.status(404).send("Ups... Norimas puslapis nerastas");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    return res.status(500).send('Ups... Serverio klaida 500');
});

app.listen(port, () => {
    console.log(`Serveris pasileido:: http://localhost:${port}`);
});



