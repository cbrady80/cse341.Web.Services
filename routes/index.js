// Express package Router
const routes = require('express').Router();

// Import controller
const week1Controller = require('../controllers/week1');

// GET request
// app.get('/', (req, res) => {
//     res.sendFile('index.html', {root: __dirname});
//   });

routes.get('/', week1Controller.krisRoute);
routes.get('/paige', week1Controller.paigeRoute);
routes.get('/brooke', week1Controller.brookeRoute);
routes.get('/jack', week1Controller.jackRoute);

// Export
module.exports = routes;