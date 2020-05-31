const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

// app.use(express.static(__dirname + '/frontend'));
app.use(express.json());
app.use(cors());

const routes = require('./src/routes/index');
app.use(routes);


app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
