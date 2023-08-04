const Todo = require("../models/Todo");

async function deleteTodo(req, res) {
  const { title, description } = req.body;
  const { id } = req.params;
  try {
    const response = await Todo.findById({ _id: id });
    if (response == null) {
      res.status(400).json({
        success: false,
        message: "No data found",
      });
    } else {
      await Todo.findByIdAndDelete({ _id: id });
      res.status(201).json({
        success: true,
        message: "Todo deleted successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = deleteTodo;
