const products = require("../datas/products");

let nextId = 3;

function listAll(req, res) {
    res.json(products);
};

function specificProduct(req, res) {
    req.params.id;
    const product = products.find(
        (product) => product.id === Number(req.params.id));
    res.json(product);
};

function newProduct(req, res) {
    const newProduct = {
        name: req.body.name,
        price: Number(req.body.price),
        id: nextId,
    };
    products.push(newProduct);

    nextId += 1;

    res.json(newProduct)
};

function editProduct(req, res) {
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
};
function replaceProducts(req, res) {
    const product = products.find(
        (product) => product.id === Number(req.params.id)
    );
    if (product) {
        product.name = req.body.name;
        product.price = req.body.price;
        res.json(product);

    } else {
        const newProduct = req.body;
        products.push(newProduct);
        res.json(newProduct);

    }
};
function deleteProduct(req, res) {
    const product = products.find(
        (product) => product.id === Number(req.params.id)
    );

    // search the element and say what position here is
    const index = products.indexOf(product);

    // remove element
    products.splice(index, 1);

    res.json(product);
};

module.exports = {
    listAll,
    specificProduct,
    newProduct,
    editProduct,
    replaceProducts,
    deleteProduct,
};