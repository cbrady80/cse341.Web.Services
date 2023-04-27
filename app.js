// Import the dependencies
const express = require('express');
//const bodyParser = require('body-parser');
const mongodb = require('./db/connection');

// Instantiate an express app object
const app = express();

// Save a port number
const port = process.env.PORT || 5000;


app
    // .use(bodyParser.json())
    // .use((req, res, next) => {
    //     res.setHeader('Access-Control-Allow-Origin', '*');
    //     next();
    // })
    .use('/', require('./routes/index')); // Calls the routes to view the data

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        // Event Listener
        app.listen(port);
        // Log message
        console.log(`Connected to DB and listening at port ${port}`);
    }
});