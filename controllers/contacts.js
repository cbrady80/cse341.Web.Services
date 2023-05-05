// In this file, this is where we make the call to MongoDB and return the data

const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

// Function to retrieve all contacts
const getAllContacts = async (req, res, next) => {
    const result = await mongodb
        .getDb()
        .db()
        .collection('contacts')
        .find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

// Function to retrive one contact by ID
const getContactById = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db()
        .collection('contacts')
        .find({_id: userId});
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

// Function to create a NEW contact
const newContact = async (req, res, next) => {
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const result = await mongodb
        .getDb()
        .db()
        .collection('contacts')
        .insertOne(contact);
    
    const userId = new ObjectId(req.params.id);
    if (response.acknowledged) {
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.send({_id: userId});
            res.status(200).json(lists);
        });
    } else {
        res.status(500).json(response.error || 'An error occurred.  Contact not created.');
    };
    
}

// Function to UPDATE an exsisting contact
updateContact

// Function to DELETE an existing contact
deleteContact


module.exports = {
    getAllContacts,
    getContactById
};