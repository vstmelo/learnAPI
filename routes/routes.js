const express = require("express");
const route = express.Router();

const controller = require("../controller/productsController");

route.get("/products", controller.listAll);

route.get("/products/:id", controller.specificProduct);

route.post("/products", controller.newProduct);

route.patch("/products/:id", controller.editProduct);

route.put("/products/:id", controller.replaceProducts);

route.delete("/products/:id", controller.deleteProduct);

module.exports = route;