const router = require('express').Router();
const express = require('express');
const userController = require('./controller/userController')


router.get('/login', (req, res) => {
    res.send('<h1>Login</h1>')
});

router.get('/user_details/:id', (req, res) => {
    res.send(`<h1>Detalhes do usuário ${req.params.id}</h1>`);
});

router.post('/new_user', userController.create)

router.put('/edit_user/:id', (req, res) => {
    res.send(`<h1>Editar usuário ${req.params.id}</h1>`);
});

router.delete('/delete_user/:id', (req, res) => {
    res.send(`<h1>Deletar usuário ${req.params.id}</h1>`);
});

module.exports = router;
