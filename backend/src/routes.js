const router = require('express').Router();
const express = require('express');
const userController = require('./controller/userController');
const decodeController = require('./controller/decodeController');
const { check } = require('express-validator');
const auth = require('./auth');

//Rota para login
router.post('/app/login', [
  check('email', 'Informe o e-mail').trim()
    .escape()
    .notEmpty()
    .bail()
    .isEmail()
    .withMessage('E-mail inválido'),
  check('senha', 'Informe a senha').trim().escape().notEmpty()
], userController.login)


//Rota para manipular Arquivo
router.post(
  '/app/upload',
  [check('attachment', 'File é um campo obrigatório').trim().escape().notEmpty()],
  decodeController.manipulaArquivo
);

//Rota para manipular string
router.post(
  '/app/string',
  [check('log', 'Log é um campo obrigatório').notEmpty()],
  auth, decodeController.manipulaString
);

//Buscar um único user pelo ID
router.get('/app/:id', auth, userController.unique);

//Buscar todos os users
router.get('/app', auth, userController.index);

//Deleter um user
router.delete('/app/:id', auth, userController.delete);

//Criar um user
router.post(
  '/app',
  [
    check('name', 'Nome é campo obrigatório').trim().escape().notEmpty(),
    check('email', 'E-mail é campo obrigatório')
      .trim()
      .escape()
      .notEmpty()
      .bail()
      .isEmail()
      .withMessage('E-mail inválido'),
    check('senha', 'Senha é campo obrigatório').trim().escape().notEmpty(),
  ],
  check('confSenha', 'Confirmar senha é campo obrigatório.')
    .trim()
    .escape()
    .notEmpty()
    .bail()
    .custom((value, { req }) => value === req.body.senha)
    .withMessage('Senhas não conferem.'),
  userController.create
);

//Atualizar um user
router.put(
  '/app/:id',
  [
    check('name', 'Nome é campo obrigatório').trim().escape().notEmpty(),
    check('email', 'E-mail é campo obrigatório')
      .trim()
      .escape()
      .notEmpty()
      .bail()
      .isEmail()
      .withMessage('E-mail inválido'),
  ],
  auth, userController.update
);

module.exports = router;
