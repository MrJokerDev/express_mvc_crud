const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
    },
  price: {
    type: Integer,
    required: true
    },
  image: {
    type: String,
    required: true
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
