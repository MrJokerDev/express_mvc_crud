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
    type: Number,
    required: true
    },
  image: {
    type: String,
    required: false
  }
});

const Product = mongoose.model('Product', todoSchema);

module.exports = Product;
