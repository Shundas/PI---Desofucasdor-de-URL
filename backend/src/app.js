const express = require('express')
const routes = require('./routes');
const cors = require('cors')
const knex = require('./database/index')

const app = express();
const port = 3001;

app.use(cors())
app.use(express.json())
app.use('/', routes);

//Utilizado para encaminhar erros - video da Rocketseat - SQL no Node.js com Knex
app.use((error, request, response, next) => {
    response.status(error.status || 500)
    response.json({ error: error.message })
})

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));
