const Users = require("../models/Users");

//Create users
exports.createUsers = (req, res) => {
  const userBody = req.body;
  const user = new Users({
    ...userBody,
  });
  user.save().then(() => {
    res
      .status(201)
      .json({
        message: "enregistré",
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  });
};

//Get users
exports.getUsers = (req, res) => {
  Users.find()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Get one user
exports.getUserById = (req, res) => {
  Users.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Update users
exports.updateUser = (req, res) => {
    Users.findByIdAndUpdate(req.params.id, {...req.body})
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((error) => {
        res.status(400).json(error);
      });
  };

//Delete user
exports.deleteUser = (req, res) => {
  Users.findByIdAndDelete(req.params.id).then(() => {
      res.status(201).json({
        message: "supprimer !",
      });
    })
    .catch((error) => {
      res.status(400).json(err);
    });
};
