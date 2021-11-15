const movementsCtrl = {};

const { now } = require('mongoose');
const BankingAccount = require('../models/account.model');
const Movement = require('../models/movement.model');

movementsCtrl.getMovements = async (req, res) => {
  let filters = {};
  if (req.query) {
    filters = req.query
  }
  const movements = await Movement.find(filters);
  res.json(movements);
}

getResultBalance = (balance, movementType, amount) => {
  const multiplier = movementType === "Deposito" ? 1 : -1;
  return balance + amount * multiplier;
}

movementsCtrl.createMovements = async (req, res) => {
  const { username, movementType, amount, date } = req.body;

  const accountsFind = await BankingAccount.find({ username });
  const account = accountsFind[0];
  const accountPreviousBalance = account.balance;

  console.log("prev balance:" + accountPreviousBalance);

  const accountResultBalance = getResultBalance(accountPreviousBalance, movementType, amount);

  const newMovement = new Movement({
    username,
    movementType,
    amount,
    accountResultBalance,
    date
  });
  try {
    await newMovement.save();
    await BankingAccount.findOneAndUpdate({ username }, { balance: accountResultBalance });
    res.json({ message: 'Movement created!' });
  } catch (error) {
    console.log(error);
    res.status(503).json({ message: 'Movement not created!' });
  }

}

movementsCtrl.getMovement = async (req, res) => {
  const movement = await Movement.findById(req.params.id)
  res.json(movement);
}



movementsCtrl.deleteMovement = async (req, res) => {
  await Movement.findOneAndDelete({ _id: req.params.id });
  res.json({ message: 'Movement Deleted' })
}

module.exports = movementsCtrl;