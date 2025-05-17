//  server.js 

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

console.log("Server started");
app.get('/', (req, res) => {
  console.log("Received request to /");
  res.send('Hello, World!');
});
