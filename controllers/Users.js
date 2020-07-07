const Users = require("../models/Users");
const bcrypt = require("bcrypt");

//Create users
exports.createUsers = (req, res) => {
  const hash = hashPassword(req.body.password);
  const user = new Users({
    userName: req.body.userName,
    age: req.body.age,
    email: req.body.email,
    password: hash,
    phone: req.body.phone,
    address: req.body.address,
  });
  user
    .save()
    .then(() => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400).json(err);
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
  const hash = hashPassword(req.body.password);
  // console.log(hash);
  // console.log(req.params.id);
  Users.findByIdAndUpdate(req.params.id, {
    userName: req.body.userName,
    age: req.body.age,
    email: req.body.email,
    password: bcrypt.compare(req.body.password, hash)
      ? hash
      : req.body.password,
    phone: req.body.phone,
    address: req.body.address,
  })
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
      res.status(400).json(error);
    });
};

//Login
exports.login = (req, res) => {
  Users.findOne({ email: req.body.email })
    .then((user) => {
      bcrypt.compare(req.body.password, user.password).then((result) => {
          return result ? res.status(200).json(user) : res.status(400).json({ message: "Le mot de passe ne corresponds pas" });
        })
    }).catch(() => {
      return res.status(400).json({ message: "L'utilisateur n'existe pas" });
    });
};

function hashPassword(password) {
  const salt = 10;
  const hash = bcrypt.hashSync(password, salt);

  return hash;
}
