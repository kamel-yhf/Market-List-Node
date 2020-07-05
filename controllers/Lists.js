const List = require("../models/Lists");

//Create lists
exports.createList = (req, res) => {
  const listBody = req.body;
  const list = new List({
    ...listBody,
  });
  list.save().then(() => {
    res
      .status(201)
      .json({
        message: "list enregistré",
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  });
};

//Get lists
exports.getLists = (req, res) => {
  List.find()
    .then((list) => {
      res.status(200).json(list);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Get one list
exports.getListById = (req, res) => {
  List.findById(req.params.id)
    .then((list) => {
      res.status(200).json(list);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Update lists
exports.updateList = (req, res) => {
  List.findByIdAndUpdate(req.params.id, { ...req.body })
    .then(() => {
      res.status(201).json({
        message: "modifié !",
      });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Delete lists
exports.deleteList = (req, res) => {
  List.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(201).json({
        message: "supprimer !",
      });
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};
