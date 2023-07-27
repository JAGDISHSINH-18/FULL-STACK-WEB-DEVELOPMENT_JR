const express = require('express');
const app = express();
const port = 3000;

// Endpoint for GET request

app.get('/', (req, res) => {
  res.send('<b><h1>Get Request Required!</b>');
});

// Endpoint for POST request
app.post('/', (req, res) => {
  res.status(201).send('POST request received!');
});

// Endpoint for PUT request
app.put('/', (req, res) => {
  res.status(200).send('PUT request received!');
});

// Endpoint for DELETE request
app.delete('/', (req, res) => {
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
