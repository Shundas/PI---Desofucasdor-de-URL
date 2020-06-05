const router = require('express').Router();
const express = require('express');
const userController = require('./controller/userController')


router.get('/', (req, res) => {
    res.send('<h1>Login</h1>')
});

router.get('/:id', (req, res) => {
    res.send(`<h1>Detalhes do usuário ${req.params.id}</h1>`);
});

router.post('/', userController.create)

router.get('/', userController.index)

router.put('/:id', (req, res) => {
    res.send(`<h1>Editar usuário ${req.params.id}</h1>`);
});

router.delete('/:id', (req, res) => {
    res.send(`<h1>Deletar usuário ${req.params.id}</h1>`);
});

module.exports = router;
