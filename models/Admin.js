const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  product: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
