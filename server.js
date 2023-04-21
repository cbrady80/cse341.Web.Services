// Import the express dependency
const express = require('express');

// Instantiate an express app object
const app = express();

// Save a port number
const port = 5000;

// GET request
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname});
  });

// Event Listener
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 