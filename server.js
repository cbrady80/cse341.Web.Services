// Import the express dependency
const express = require('express');

// Instantiate an express app object
const app = express();

// Save a port number
const port = 5000;

// Calls the routes to view the data
app.use('/', require('./routes/index'));

// Event Listener
app.listen(process.env.port || port);

// Log message
console.log('Web Server is listening at port ' + (process.env.port || port));