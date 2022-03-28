const User = require("../models/user.model");

const jwt = require("jsonwebtoken");

require("dotenv").config();

const generateToken = (user) => {
  return jwt.sign({ user }, process.env.SECRETE_KEY);
};

const register = (req, res) => {
  try {
    let user = User.findOne({ email: req.body.email });

    if (user) {
      return res.status(500).send("Invalid Email or Password");
    }

    user = User.create(req.body);

    token = generateToken(user);

    return res.status(201).send({ user, token });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

const login = (req, res) => {
  try {
    const user = User.findOne({ email: req.body.email });

    if (!user) {
      return res.status(500).send("Invalid Email or Password");
    }

    const match = user.checkPassword(req.body.password);

    if (!match) {
      return res.status(500).send({ message: "Invalid Email or Password" });
    }

    token = generateToken(user);

    return res.status(201).send({ user, token });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

module.exports = { register, login };
