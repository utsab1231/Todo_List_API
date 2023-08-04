const Todo = require("../models/Todo");

async function getTodo(req, res) {
  try {
    const todos = await Todo.find();
    res.status(200).json({
      sucess: true,
      data: todos,
      message: "Successfully retrived todo list",
    });
  } catch (error) {
    res.status(error.statusCode).json({
      sucess: false,
      margin: error.message,
    });
  }
}

async function getTodoById(req, res) {
  try {
    const id = req.params.id;
    const todo = await Todo.findById((_id = id));

    if (todo == null) {
      res.status(400).json({
        success: false,
        data: todo,
        message: "No data found",
      });
    } else {
      res.status(200).json({
        sucess: true,
        data: todo,
        message: "Successfully retrived todo list",
      });
    }
  } catch (error) {
    res.status(400).json({
      sucess: false,
      margin: error.message,
    });
  }
}
module.exports = { getTodo, getTodoById };
