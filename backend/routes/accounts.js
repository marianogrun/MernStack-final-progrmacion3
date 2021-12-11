const router = require('express').Router();

const {getAccounts, createAccounts, getAccount, deleteAccount, updateAccount} = require('../controllers/accounts.controller')

router.route('/')
    .get(getAccounts)

router.route('/add')
    .post(createAccounts)    
    
router.route('/:id')
    .get(getAccount)
    .delete(deleteAccount)

router.route('/update/:id')
    .put(updateAccount)

module.exports = router;