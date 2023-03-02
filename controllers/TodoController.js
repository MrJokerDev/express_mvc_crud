const Todo = require('../models/Todo');

exports.index = async (req, res) => {
  const todo = await Todo.find();
  res.render('front/index', { todo });
};

exports.create = async (req, res) => {
  const { title, description } = req.body;
  const todo = new Todo({
    title,
    description
  });
  await todo.save();
  res.redirect('/');
};

exports.edit = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  res.render('crud/edit', { todo });
};

exports.update = async (req, res) => {
  const { title, description } = req.body;
  await Todo.findByIdAndUpdate(req.params.id, { title, description });
  res.redirect('/');
};

exports.delete = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
