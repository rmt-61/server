const HomeController = require('../controllers/home_controller');

const router = require('express').Router();


router.get('/', HomeController.hello)

module.exports = router;
