const express = require('express');

const router = express.Router();

const authenticate = require("../middlewares/authenticate");


router.get("/", authenticate, async () => {
  try {
    const todos = Todo.find({ userId: req.params.userId });

    return res.status(200).send(todos);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});