import express from 'express';

const app = express();
const port = 5100;

app.get('/', (req, res) => {
    return res.send('Laba diena, Lietuva!');
});

app.get('*', (req, res) => {
    return res.send('Ups... Norimas puslapis nerastas');
});

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
})



