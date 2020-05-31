const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Funcionando");
});

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
