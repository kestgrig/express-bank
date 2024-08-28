import express from 'express';

const app = express();
const port = 3005;

app.get('/', (req, res) => {   //request , response visa info apie uzklausa ir info klientui
    return res.send('Laba diena, Lietuva!');
});

app.get('/about', (req, res) => { //kito page kurimas
    return res.send('Nori suzinoti apie si projekta?');
});

app.get('*', (req, res) => {   //404 page kurimas
    return res.send('Ups... Norimas puslapis nerastas');
});

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`); //tinklapis
})