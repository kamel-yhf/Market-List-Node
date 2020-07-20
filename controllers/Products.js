const Products = require("../models/Products");

//Create product
exports.createProducts = (req, res) => {
  const productBody = req.body;
  const product = new Products({
    ...productBody,
  });
  product
    .save()
    .then(() => {
      res.status(201).json({
        message: "enregistré",
      });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Get products
exports.getProducts = (req, res) => {
  Products.find()
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Get one product
exports.getProductById = (req, res) => {
  Products.findById(req.params.id)
    .then((product) => {
      res.status(200).json(product);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Update product
exports.updateProduct = (req, res) => {
  Products.findByIdAndUpdate(req.params.id, { ...req.body })
    .then(() => {
      res.status(201).json({
        message: "modifier !",
      });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Delete product
exports.deleteProduct = (req, res) => {
  Products.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(201).json({
        message: "supprimer !",
      });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};
