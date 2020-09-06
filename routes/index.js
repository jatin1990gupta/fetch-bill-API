const express = require('express');

const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/', indexController.getIndex);

router.post('/newUser', indexController.postNewUser);

router.post('/newBill', indexController.postNewBill);

module.exports = router;