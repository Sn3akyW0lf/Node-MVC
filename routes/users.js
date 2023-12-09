const path = require('path');

const express = require('express');

const usersController = require('../controllers/users');

const router = express.Router();

router.post('/add-user', usersController.postAddUser);

router.get('/all-users', usersController.getAllUsers);

router.post('/delete-user', usersController.deleteUser);

module.exports = router;