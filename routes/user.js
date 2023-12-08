const path = require('path');

const express = require('express');

const userController = require('../controllers/user');

const router = express.Router();

router.post('/add-user', userController.postAddUser);

router.get('/all-users', userController.getAllUsers);

router.post('/delete-user', userController.deleteUser);

module.exports = router;