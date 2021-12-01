const express = require('express');

const app = express();

const routes = require('./routes/routes');


app.use(routes);

app.use(express.json());

const products = [
    {
        name: "leite",
        price: 2,
        id: 0,
    },
    {
        name: "arroz",
        price: 2,
        id: 1,
    },
    {
        name: "feijao",
        price: 2,
        id: 2,
    },
];

app.listen(8000);