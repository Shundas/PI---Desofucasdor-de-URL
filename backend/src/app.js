const express = require("express");
const app = express();
const cors = require("cors");


// ==> Rotas da API:
const index = require('./routes/index');

// const productRoute = require('./routes/product.routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.use(index);
// app.use('/api/', productRoute);

module.exports = app;