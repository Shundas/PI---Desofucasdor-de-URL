const router = require('express').Router();
const express = require('express');
const userController = require('./controller/userController')
const { check } = require('express-validator');




//Buscar um único user pelo ID
router.get('/app/:id', userController.unique);

//Buscar user pelo query params (nome e email)
router.get('/app/show', userController.show);

//Buscar todos os users
router.get('/app', userController.index);

//Deleter um user
router.delete('/app/:id', userController.delete);

//Criar um user
router.post('/app', [
    check('name', 'Nome é cmapo obrigatório').trim().escape().notEmpty(),
    check('email', 'E-mail é campo obrigatório').trim().escape().notEmpty().bail().isEmail().withMessage('E-mail inválido'),
    check('senha', 'Senha é campo obrigatório').trim().escape().notEmpty()],
    check('confSenha','Confirmar senha é campo obrigatório.')
    .trim().escape().notEmpty().bail().custom((value,{ req }) => value === req.body.senha).withMessage('Senhas não conferem.'),
    userController.create);

//Atualizar um user
router.put('/app/:id', [
    check('name').trim().escape(),
    check('email').trim().escape().bail().isEmail().withMessage('E-mail inválido')
], userController.update);


module.exports = router;
