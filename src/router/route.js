const express = require('express');
const router  = express.Router();
const upload = require("../controller/upload.js");

const couponController = require('../controller/controller.js');


router.post('/products', couponController.create);
router.get('/products', couponController.findAll);
router.get('/products/download', couponController.download);
router.post('/products/upload', upload.single("file"),couponController.upload);
router.get('/products/:_id', couponController.uniqueProduct);
router.put('/products/:productId', couponController.update);
router.delete('/products/:productId', couponController.delete);
module.exports = router;