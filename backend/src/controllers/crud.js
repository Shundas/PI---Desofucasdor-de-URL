const express = require('express');
const app = express();
const { user } = require('../app/models');

app.get("/", (req, res) => {
    res.send("Tela de Crud");
});

user.create({ name: 'Claudio', email: 'claudio@rocketseat.com.br', password: '123456' });

module.exports = app;