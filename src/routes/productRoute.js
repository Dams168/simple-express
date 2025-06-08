const router = require('express').Router();
const productController = require('../controllers/productController')

router.get('/products', productController.getAllProducts);
router.get('/product/:id', productController.getProductById);
router.post('/product', productController.createProduct);

module.exports = router;