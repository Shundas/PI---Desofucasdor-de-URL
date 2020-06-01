//Vamos deixar todas as rotas aqui

const express = require('express');
const router = require('express').Router();
const UserController = require('../controllers/crud')

router.post('/crud', UserController.store);


router.use('/', require('../controllers/login'));
router.use('/desofuscador', require('../controllers/desofuscador'));

module.exports = router;