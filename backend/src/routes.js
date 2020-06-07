const router = require('express').Router();
const express = require('express');
const userController = require('./controller/userController')
const { check } = require('express-validator');


//Verificar
router.get('/', (req, res) => {
    res.send('<h1>Login</h1>')
});


router.get('/app/show', userController.show);
router.get('/app', userController.index);
router.delete('/app/:id', userController.delete);

router.post('/app', [
    check('name', 'Nome é cmapo obrigatório').trim().escape().notEmpty(),
    check('email', 'E-mail é campo obrigatório').trim().escape().notEmpty().bail().isEmail().withMessage('E-mail inválido'),
    check('senha', 'Senha é campo obrigatório').trim().escape().notEmpty()],
    userController.create);


router.put('/app/:id', [
    check('name').trim().escape(),
    check('email').trim().escape().bail().isEmail().withMessage('E-mail inválido')
], userController.update);


module.exports = router;
