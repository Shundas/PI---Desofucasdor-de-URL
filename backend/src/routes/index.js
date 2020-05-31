const express = require('express');
const router = require('express').Router();

router.use('/crud', require('../controllers/crud'));
router.use('/', require('../controllers/login'));
router.use('/desofuscador', require('../controllers/desofuscador'));

module.exports = router;