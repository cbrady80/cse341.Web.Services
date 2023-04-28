// When one of these specific routes is used, then we call the function in the controller/contacts.js

// Import Express package Router
const express = require('express');
const router = express.Router();
// Import controller - WEEK 2 - Contacts
const contactsController = require('../controllers/contacts');

//Route for retreiving all contacts
router.get('/', contactsController.getAllContacts);

//Route for receiving one single contact by id
router.get('/:id', contactsController.getContactById);

// Export
module.exports = router;