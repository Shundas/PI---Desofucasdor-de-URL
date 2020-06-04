const router = require('express').Router();
const express = require('express');

router.get('/login', (req, res) => {
    res.send('<h1>Login</h1>')
});

router.get('/user_details/:id', (req, res) => {
    res.send(`<h1>Detalhes do usuário ${req.params.id}</h1>`);
});

router.post('/new_user', (red, res) => {
    res.send('<h1>Criar usuário</h1>');
});

router.put('/edit_user/:id', (red, res) => {
    res.send('<h1>Editar usuário</h1>');
});

router.delete('/delete_user/:id', (red, res) => {
    res.send('<h1>Deletar usuário</h1>');
});

module.exports = router;
