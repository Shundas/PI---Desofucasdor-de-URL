const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('<h1>Login</h1>')
});

router.get('/:id', (req, res) => {
    res.send(`<h1>Detalhes do usuário ${req.params.id}</h1>`);
});

router.post('/', (red, res) => {
    res.send('<h1>Criar usuário</h1>');
});

router.put('/:id', (red, res) => {
    res.send('<h1>Editar usuário</h1>');
});

router.delete('/:id', (red, res) => {
    res.send('<h1>Deletar usuário</h1>');
});

module.exports = router;
