const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/ProductController');
const IndexController = require('../controllers/IndexController');

router.get('/', IndexController.index);
router.get('/fashion', IndexController.fashion);
router.get('/electronic', IndexController.electronic);
router.get('/jewellery', IndexController.jewellery);


router.get('/products', ProductController.index);
router.get('/products/create', ProductController.create);
router.get('/products/:id', ProductController.show);
router.get('/products/:id/edit', ProductController.edit);
router.post('/products', ProductController.store);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.destroy);


module.exports = router;
