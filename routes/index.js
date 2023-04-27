// Import Express package Router
const express = require('express');
const router = express.Router();

// Import controller - WEEK 1
//const week1Controller = require('../controllers/week1');

// GET request - from initial tutorial for a webpage
// app.get('/', (req, res) => {
//     res.sendFile('index.html', {root: __dirname});
//   });
// GET requests for WEEK 1
// router.get('/', week1Controller.krisRoute);
// router.get('/paige', week1Controller.paigeRoute);
// router.get('/brooke', week1Controller.brookeRoute);
// router.get('/jack', week1Controller.jackRoute);

// USE request for WEEK 2
router.use('/contacts', require('./contacts'));

// Export
module.exports = router;