// Express package Router
const routes = require('express').Router();

// Import controller - WEEK 1
//const week1Controller = require('../controllers/week1');

// GET request - from initial tutorial for a webpage
// app.get('/', (req, res) => {
//     res.sendFile('index.html', {root: __dirname});
//   });
// GET requests for WEEK 1
// routes.get('/', week1Controller.krisRoute);
// routes.get('/paige', week1Controller.paigeRoute);
// routes.get('/brooke', week1Controller.brookeRoute);
// routes.get('/jack', week1Controller.jackRoute);

// USE request for WEEK 2
routes.use('/contacts', require('./contacts'))

// Export
module.exports = routes;