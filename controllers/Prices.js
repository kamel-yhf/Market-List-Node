const Price = require("../models/Prices");

//Create Prices
exports.createPrices = (req, res) => {
  const priceBody = req.body;
  const price = new Price({
    ...priceBody,
  });
  price
    .save()
    .then(() => {
      res.status(201).json({
        message: "ssauvegardé !",
      });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Get prices
exports.getPrices = (req, res) => {
  Price.find()
    .then((price) => {
      res.status(200).json(price);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Get one price
exports.getPriceById = (req, res) => {
  Price.findById(req.params.id)
    .then((price) => {
      res.status(200).json(price);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Update price
exports.updatePrice = (req, res) => {
    Price.findByIdAndUpdate(req.params.id, { ...req.body })
      .then(() => {
        res.status(200).json({
            message: "modifié !"
        });
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  };

//Delete price
exports.deletePrice = (req, res) => {
    Price.findByIdAndDelete(req.params.id)
      .then(() => {
        res.status(200).json({
            message: "supprimé !"
        });
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  };