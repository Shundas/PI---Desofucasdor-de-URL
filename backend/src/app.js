const express = require('express')
const routes = require('./routes');
const cors = require('cors')
const knex = require('./database/index')
const fs = require('fs');

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

//Diretório de saída de arquivos
fs.access("output_files", fs.constants.F_OK, (err) => {
    if(err) {
        fs.mkdir("output_files", (err) => {
            if(err) throw err;
            console.log("output_files criado com sucesso.")
        })
    } else {
        fs.stat("output_files", (err, stats) => {
            if(err) throw err;
            if(!stats.isDirectory()) {
                throw new Error("output_files existe, mas não é um diretório")
            }
        })
    }
})

app.listen(port, () => console.log(`Servidor rodando na porta: ${port}`));
