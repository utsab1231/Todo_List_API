const Todo = require("../models/Todo");

async function createTodo(req, res) {
  const { title, description } = req.body;
  try {
    const response = await Todo.create({
      title: title,
      description: description,
    });
    res.status(201).json({
      success: true,
      data: response,
      message: "Todo Created Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: req.body,
      message: error.message,
    });
  }
}

module.exports = createTodo;
