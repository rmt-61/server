const express = require('express');
const AuthController = require('../controllers/auth_controller');

const authRouter = express.Router();

authRouter.post('/register', AuthController.register)

module.exports = authRouter;
