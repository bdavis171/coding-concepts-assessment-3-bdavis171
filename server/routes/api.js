// api routes

// reference express
const express = require('express');
const router = express.Router();
router.use(express.json());

// import schemas
const AccountCollection = require('../models/AccountSchema');

// POST: upload test data
router.post('/test', (req, res) => {
    // res.send('test data uploaded');
    const testData = [
        {
            number: 1,
            type: 'Checking',
            name: 'Brandon',
            balance: 100
        },
        {
            number: 2,
            type: 'Saving',
            name: 'Dewayne',
            balance: 70
        },
        {
            number: 3,
            type: 'Saving',
            name: 'Seth',
            balance: 9000000
        },
        {
            number: 4,
            type: 'Checking',
            name: 'Ciara',
            balance: 500
        },
        {
            number: 5,
            type: 'Checking',
            name: 'Kendra',
            balance: 980
        }
    ];
    AccountCollection.create(testData, (errors,results) => {
        errors ? res.send(errors):res.send(results);
    });
});

// POST: create new account
router.post('/', (req, res) => {
    // res.send('new account created');
    AccountCollection.create(req.body,(errors,results) => {
        errors ? res.send(errors):res.send(results);
    });
});

// GET: read all account
router.get('/', (req, res) => {
    // res.send('all acounts read');
    AccountCollection.find((errors,results) => {
        errors ? res.send(errors):res.send(results);
    });
});

// PUT: withdraw from account by number
router.put('/withdraw/:accountNumber', (req, res) => {
    // res.send('withdrew from account');
    AccountCollection.findOneAndUpdate({number: req.params.accountNumber},{balance: req.body.balance},(errors,results) => {
        errors ? res.send(errors):res.send(`withdrew from the following account: ${results}`);
    });
});

// PUT: deposit into account by number
router.put('/deposit/:accountNumber', (req, res) => {
    // res.send('deposit into account');
    AccountCollection.findOneAndUpdate({number: req.params.accountNumber},{balance: req.body.balance},(errors,results) => {
        errors ? res.send(errors):res.send(`deposited into the following account: ${results}`);
    });
});

// PUT: update account by number
router.put('/:accountNumber', (req,res) => {
    // res.send('account updated');
    AccountCollection.findOneAndUpdate({number: req.params.accountNumber},req.body,(errors,results) => {
        errors ? res.send(errors):res.send(`updated the following account: ${results}`);
    })
});

// DELETE: delete an account by number
router.delete('/:accountNumber', (req,res) => {
    // res.send('account deleted');
    AccountCollection.findOneAndDelete({number: req.params.accountNumber},req.body,(errors,results) => {
        errors ? res.send(errors):res.send(`deleted the following account: ${results}`);
    });
});

// export routes
module.exports = router;