const AuthController = require('../controllers/auth_controller');

const router = require('express').Router();

router.post('/login', AuthController.login)

module.exports = router;
