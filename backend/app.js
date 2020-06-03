const express = require('express')
const routes = require('./routes/routes');

const app = express();

const port = 3001;

app.use(routes);

app.listen(port);
