const express = require('express')
const routes = require('./routes');
const cors = require('cors')
const knex = require('./database/index')

const app = express();
const port = 3001;

app.use(cors())
app.use(express.json())
app.use(routes);

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));
