var express = require('express');
var router = express.Router();
const productController = require('../contollers/productController')

/* GET home page. */
router.get('/',productController.index)


module.exports = router;