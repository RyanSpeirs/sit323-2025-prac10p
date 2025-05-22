//  server.js 

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// Root endpoint
app.get('/', (req, res) => {
  console.log("Received request to /");
  res.send('Hello, World!');
});

// CPU load endpoint
app.get('/load', (req, res) => {
  console.log("Received request to /load");

  const duration = parseInt(req.query.duration) || 10; // in seconds
  const end = Date.now() + duration * 1000;

  while (Date.now() < end) {
    // Perform CPU-intensive task
    Math.sqrt(Math.random() * Number.MAX_SAFE_INTEGER);
  }

  res.send(`CPU load generated for ${duration} seconds`);
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
