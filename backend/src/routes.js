const router = require('express').Router();
const express = require('express');
const userController = require('./controller/userController')


router.get('/', (req, res) => {
    res.send('<h1>Login</h1>')
});

router.get('/app/:id', (req, res) => {
    res.send(`<h1>Detalhes do usuário ${req.params.id}</h1>`);
});

router.post('/app/', userController.create)

router.get('/app/', userController.index)

router.put('/app/:id', (req, res) => {
    res.send(`<h1>Editar usuário ${req.params.id}</h1>`);
});

router.delete('/app/:id', (req, res) => {
    res.send(`<h1>Deletar usuário ${req.params.id}</h1>`);
});

module.exports = router;
