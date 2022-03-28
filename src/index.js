const express = require("express");

const app = express();

app.use(express.json());

const {register,login} = require("./controllers/auth.controller")

const todosController = require("./controllers/todo.controller");

app.post("/register", register);
app.post("/login", login);

app.use("/todos",todosController);

module.exports = app