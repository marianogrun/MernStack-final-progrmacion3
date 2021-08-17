const router = require('express').Router();
let AccountType = require('../models/accountType.model');

router.route('/').get((req,res) => {
    AccountType.find()
    .then(accountType => res.json(accountType))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const accountType = req.body.accountType;

    const newAccountType = new Account({accountType});

    newAccountType.save()
        .then(() => res.json('Account added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;