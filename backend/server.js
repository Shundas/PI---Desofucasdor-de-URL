const port = 3001;
const app = require('./src/app');

app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});
