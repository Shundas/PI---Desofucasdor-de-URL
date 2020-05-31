const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Tela de Crud");
});

module.exports = app;