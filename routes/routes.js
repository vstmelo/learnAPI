const express = require('express');

const route = express.Route();

import { products } from "./routes/routes";

app.get('/products', (req, res) => {
    res.json(products);
});
let nextId = 3;

//Get a specific object from array products
app.get('/products/:id', (req, res) => {
    // get id from url
    req.params.id;

    /* now we could search for an object by your id.
        We used the method find to search a product with their id is equal to url '.../1'
    */
    const product = products.find(
        (product) => product.id === Number(req.params.id));
    res.json(product);
});

app.post('/products', (req, res) => {
    const newProduct = {
        name: req.body.name,
        price: Number(req.body.price),
        id: nextId,
    };
    products.push(newProduct);

    nextId += 1;

    res.json(newProduct)
});

// edit name or price, the user could choice edit one or two attributes

app.patch('/products/:id', (req, res) => {
    const product = products.find(
        (product) => product.id === Number(req.params.id)
    );
    if (req.body.name !== undefined) {
        product.name = req.body.name;
    }
    if (req.body.price !== undefined) {
        product.price = req.body.price;
    };
    res.json(product);
});

/*The difference between put and patch is it in Put we need pass all properties
plus, if we pass an inexistence propriety they'll be created*/

app.put('/products/:id', (req, res) => {
    const product = products.find(
        (product) => product.id === Number(req.params.id)
    );
    if(product){
        product.name = req.body.name;
        product.price = req.body.price;
        res.json(product);

    }else{
        const newProduct = req.body;
        products.push(newProduct);
        res.json(newProduct);

    }
});

module.exports = routes;