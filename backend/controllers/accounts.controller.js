const accountsCtrl = {};

const BankingAccount = require('../models/account.model');

accountsCtrl.getAccounts = async (req, res) => {
        let filters = {};
        if(req.query){
            filters=req.query
        }
          const accounts = await BankingAccount.find(filters);
          res.json(accounts);
  }

accountsCtrl.createAccounts = async (req, res) => {
const { username, accountType, clientType, accountNumber, cbu, balance } = req.body;
const newAccount = new BankingAccount({
    username,
    accountType,
    clientType,
    accountNumber,
    cbu,
    balance
});

await newAccount.save().
    then((data) => {
        console.log("saved data ", data);
        res.json({ message: 'Account created!' });
    }).catch(function (error) {
        console.log(error);
        res.status(503).json({ message: 'Account not created!' });
    });
}

accountsCtrl.getAccount = async (req, res) => {
  const account = await BankingAccount.findById(req.params.id)
  res.json(account);
}


accountsCtrl.updateAccount = async (req, res) => {
  const { username, accountType, clientType, accountNumber, balance, cbu } = req.body;
  await BankingAccount.findOneAndUpdate({ _id: req.params.id }, {
    username,
    accountType,
    clientType,
    accountNumber,
    balance,
    cbu
  }).
  then((data) => {
      console.log("saved data ", data);
      res.json({ message: 'Account Updated!' });
  }).catch(function (error) {
      console.log(error);
      res.status(503).json({ message: 'Account not updated!' });
  });
  
}

accountsCtrl.deleteAccount = async (req, res) => {
  await BankingAccount.findOneAndDelete({ _id: req.params.id });
  res.json({ message: 'Account Deleted' })
}

  module.exports = accountsCtrl;