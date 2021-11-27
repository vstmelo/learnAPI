const express = require('express');

const app = express();


const products = [
    {
        nome: "leite",
        id: 1,
    },
    {
        nome: "arroz",
        id: 2,
    },
    {
        nome: "feijao",
        id: 3,
    },
];

//An rout to get all products

app.get('/products', (req, res) => {
    res.json(products);
});

//Get a specific object from array products
app.get('/products/1', (req, res) => {
    // get the product by position
    const product = products[1]; 
    res.json(product);
});

app.listen(8000);