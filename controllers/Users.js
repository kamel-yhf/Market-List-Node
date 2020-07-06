const Users = require("../models/Users");
const bcrypt = require("bcrypt");

//Create users
exports.createUsers = (req, res) => {
  const userBody = req.body;
  (async () => {
    try {
      let password = userBody.password;

      let salt = await bcrypt.genSalt(10);
      let hash = await bcrypt.hash(password, salt);

      const user = new Users({
        userName: userBody.userName,
        age: userBody.age,
        email: userBody.email,
        password: hash,
        phone: userBody.phone,
        address: userBody.address,
      });

      user
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
  Users.findByIdAndUpdate(req.params.id, { ...req.body })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((error) => {
      res.status(400).json(error);
    });
};

//Delete user
exports.deleteUser = (req, res) => {
  Users.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(201).json({
        message: "supprimer !",
      });
    })
    .catch((error) => {
      res.status(400).json(err);
    });
};
