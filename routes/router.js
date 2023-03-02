const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController');
const IndexController = require('../controllers/IndexController');

router.get('/', IndexController.index);
router.get('/fashion', IndexController.fashion);
router.get('/electronic', IndexController.electronic);
router.get('/jewellery', IndexController.jewellery);

router.get('/todo', todoController.index);
router.post('/create', todoController.create);
router.get('/edit/:id', todoController.edit);
router.post('/edit/:id', todoController.update);
router.get('/delete/:id', todoController.delete);


module.exports = router;
