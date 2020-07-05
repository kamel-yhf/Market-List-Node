const Markets = require("../models/Markets");

//Create markets
exports.createMarket = (req, res) => {
  const marketBody = req.body;
  const market = new Markets({
    ...marketBody,
  });
  market
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

//Get markets
exports.getMarkets = (req, res) => {
  Markets.find()
    .then((market) => {
      res.status(200).json(market);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Get one market
exports.getMarketById = (req, res) => {
  Markets.findById(req.params.id)
    .then((market) => {
      res.status(200).json(market);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Update market
exports.updateMarket = (req, res) => {
  Markets.findByIdAndUpdate(req.params.id, { ...req.body })
    .then(() => {
      res.status(201).json({
        message: "modifié",
      });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Delete market
exports.deleteMarket = (req, res) => {
  Markets.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({
        message: "supprimé !",
      });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};
