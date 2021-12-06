const express = require("express");
const route = require("./routes/routes");

const app = express();

app.use(route);

app.use(express.json());

app.listen(8000, () => {
    console.log("server is listening on port: " + 8000);
});