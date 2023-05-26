// This is where we make the call to MongoDB and return the data

const { response } = require('express');
const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

// Function to retrieve all contacts
const getAllContacts = async (req, res, next) => {
    const result = await mongodb
        .getDb()
        .db('test')
        .collection('contacts')
        .find();
        result.toArray().then(
            lists => {res.setHeader('Content-Type', 'application/json'); 
                      res.status(200).json(lists)},
            err => {res.status(400).json({ message: err })}
        );
};

// Function to retrive one contact by ID
const getContactById = async (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)) {  //changed this to add in the error handling for week 6
        res.status(400).json('Must use a valid contact id to find a contact.');
    }
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db('test')
        .collection('contacts')
        .find({_id: userId});
        result.toArray().then(
            lists => {res.setHeader('Content-Type', 'application/json'); 
                      res.status(200).json(lists[0])},
            err => {res.status(400).json({ message: err })}
        );
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
        .db('test')
        .collection('contacts')
        .insertOne(contact);
    
    if (result.acknowledged) {
        res.status(201).json(result);
    } else {
        res.status(500).json(result.error || 'An error occurred.  Contact not created.');
    };
};

// Function to UPDATE an exsisting contact
const updateContact = async (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)) {  //changed this to add in the error handling for week 6
        res.status(400).json('Must use a valid contact id to update a contact.');
    }
    const userId = new ObjectId(req.params.id);

    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const result = await mongodb
        .getDb()
        .db('test')
        .collection('contacts')
        .updateOne(
            {_id: userId},
            {$set: contact}
        );

    console.log(result);
    if (result.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(result.error || 'An error occurred.  Contact not updated.');
    };
};

// Function to DELETE an existing contact
const deleteContact = async (req, res, next) => {
    if (!ObjectId.isValid(req.params.id)) {  //changed this to add in the error handling for week 6
        res.status(400).json('Must use a valid contact id to delete a contact.');
    }
    const userId = new ObjectId(req.params.id);

    const result = await mongodb
        .getDb()
        .db('test')
        .collection('contacts')
        .deleteOne({_id: userId});

    console.log(result);
    if (result.deletedCount > 0) {
        res.status(200).send();
    } else {
        res.status(500).json(result.error || 'An error occurred.  Contact not deleted.');
    };
};


module.exports = {
    getAllContacts,
    getContactById,
    newContact,
    updateContact,
    deleteContact
};