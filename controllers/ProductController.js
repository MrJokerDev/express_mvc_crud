const Product = require('../models/Product');

class ProductController {
    static async index(req, res) {
            try {
                const products = await Product.find();
                res.render('crud/index', { products });
            } catch(error) {
                res.status(500).render('errors/500', { error } );
            }
    }
    static create(req, res) {
        res.render('crud/create');
    }
    
    static store(req, res) {
        try {
           const post = new Product(req.body);
           post.save();
           res.status(201).render('crud/create', { post });
        } catch(error) {
           res.status(400).render('errors/400', { error } );
        }
    }
  
  static async show(req, res) {
        const { id } = req.params;
        try {
                const post = await Product.findById(id);
                res.render('crud/show', { post });
            } catch(error) {
                res.status(404).render('errors/404', { error } );
            }
  }
  
  static edit(req, res) {
           const { id } = req.params;
           res.render('crud/edit', { id }); 
        }
    
    static async update(req, res) {
        const { id } = req.params;
        try {
                const post = await Product.findByIdAndUpdate(id, req.body);
                res.render('crud/edit', { post });
            } catch(error) {
                res.status(400).render('errors/400', { error } );
            }
    }
  
  static async destroy(req, res) {
           const { id } = req.params;
           try {
              const post = await Post.findOneAndDelete({ _id: id });
              res.send(post);
           } catch(error) {
              res.status(500).send(error);
           }
        }
}

module.exports = ProductController;