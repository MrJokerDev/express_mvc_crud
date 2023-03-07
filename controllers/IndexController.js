const Todo = require('../models/Admin');

exports.index = async (req, res) => {
  res.render('front/index');
};

exports.fashion = async (req, res) => {
  res.render('front/fashion');
};

exports.electronic = async (req, res) => {
  res.render('front/electronic');
};

exports.jewellery = async (req, res) => {
  res.render('front/jewellery');
};
