const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController');

router.get('/', todoController.index);

router.get('/create', (req, res) => {
  res.render('create');
});

router.post('/create', todoController.create);

router.get('/edit/:id', todoController.edit);

router.post('/edit/:id', todoController.update);

router.get('/delete/:id', todoController.delete);

module.exports = router;
