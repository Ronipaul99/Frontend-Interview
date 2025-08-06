
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Health check route
app.get('/healthcheck', (req, res) => {
  res.status(200).json({ status: 'ok' });
});
// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});