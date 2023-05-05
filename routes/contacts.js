// When one of these specific routes is used, then we call the function in the controller/contacts.js

// Import Express package Router
const express = require('express');
const router = express.Router();
// Import controller - WEEK 2 - Contacts
const contactsController = require('../controllers/contacts');

//Route for retreiving all contacts
router.get('/', contactsController.getAllContacts);
//Route for retreiving one single contact by id
router.get('/:id', contactsController.getContactById);

//Route for creating a new contact - POST
router.post('/', contactsController.newContact);
//Route for updating an exsisting contact - PUT
router.put('/', contactsController.updateContact);
//Route for deleting a contact - DELETE
router.delete('/', contactsController.deleteContact);


// Exports
module.exports = router;