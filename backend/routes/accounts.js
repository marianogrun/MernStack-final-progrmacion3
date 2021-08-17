const router = require('express').Router();
let BankingAccount = require('../models/account.model');

router.route('/').get((req,res) => {
    BankingAccount.find()
    .then(accounts => res.json(accounts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const accountType = req.body.accountType;
    const clientType = req.body.clientType;
    const nroCuenta = req.body.nroCuenta;
    const saldo = req.body.saldo;
    const cbu = req.body.cbu;

    const newAccount = new BankingAccount({
        username,
        accountType,
        clientType,
        nroCuenta,
        saldo,
        cbu,
    });

    newAccount.save()
        .then(() => res.json('Account added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) => {
    BankingAccount.findById(req.params.id)
        .then(account => res.json(account))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req,res) => {
    BankingAccount.findByIdAndDelete(req.params.id)
        .then(account => res.json('Account deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req,res) => {
    BankingAccount.findById(req.params.id)
        .then(account => {
            account.username = req.body.username;
            account.accountType = req.body.accountType;
            account.clientType = req.body.clientType;
            account.nroCuenta = req.body.nroCuenta;
            account.saldo = req.body.saldo;
            account.cbu = req.body.cbu;

            account.save()
             .then(() => res.json('Account updated!'))
             .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;