const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/', (req, res) => {
    res.send('Product Created Successfully');
});

module.exports = router;