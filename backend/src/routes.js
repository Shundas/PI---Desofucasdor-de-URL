const router = require('express').Router();
const express = require('express');
const userController = require('./controller/userController')


router.get('/', (req, res) => {
    res.send('<h1>Login</h1>')
});

router.post('/app/show', userController.show);

router.post('/app/', userController.create);

router.get('/app/', userController.index);

router.put('/app/:id', userController.update);

router.delete('/app/:id', userController.delete);

module.exports = router;
