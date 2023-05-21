const express = require('express');
const userController = require('../controller/user.controller');
const router = express.Router();
router.use(express.json());

// Handle POST requests to "/users" and save user information to a JSON file
router.post('/users', userController.postUser);

// Handle GET requests to "/users" and retrieve user information from the JSON file
router.get('/users', userController.getUser);

module.exports = { router };
