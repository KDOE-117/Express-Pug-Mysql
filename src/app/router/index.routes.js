const UserController = require('../controller/user.controller.js');

const router = require('express').Router();

router.get('/', function (req, res, next) {
    res.render("template/index")
    next()
});

router.get('/formulario', (req, res, next) => {
    res.render("template/formulario")
    next()
});

router.post('/formulario', UserController.createUser);

module.exports = router;