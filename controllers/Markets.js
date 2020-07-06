const Markets = require("../models/Markets");
const NodeGeocoder = require("node-geocoder");

//Create markets
exports.createMarket = (req, res) => {
  const marketBody = req.body;
  (async () => {
    try {
      let address = marketBody.address;

      const options = {
        provider: "opendatafrance",
      };

      const geocoder = NodeGeocoder(options);

      const resAdd = await geocoder.geocode(address);

      console.log(resAdd);

      const market = new Markets({
        marketName: marketBody.marketName,
        address: marketBody.address,
        latitude: resAdd[0].latitude,
        longitude: resAdd[0].longitude,
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
    } catch (error) {
      console.log(error.message);
    }
  })();
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
