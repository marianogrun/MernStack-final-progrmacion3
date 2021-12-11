const router = require('express').Router();

const {getMovements, createMovements, getMovement, deleteMovement} = require('../controllers/movement.controller')

router.route('/')
    .get(getMovements)

router.route('/add')
    .post(createMovements)
    
router.route('/:id')
    .get(getMovement)
    .delete(deleteMovement)

    module.exports = router;