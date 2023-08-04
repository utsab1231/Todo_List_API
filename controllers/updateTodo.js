const Todo = require("../models/Todo");

async function updateTodo(req, res) {
  const { title, description } = req.body;
  const { id } = req.params;
  try {
    const data = await Todo.findById({ _id: id });
    if (data == null) {
      res.status(400).json({
        success: false,
        message: "No data found",
      });
    } else {
      await Todo.findByIdAndUpdate(
        { _id: id },
        { title: title, description: description, updatedAt: Date.now() }
      );
      const response = await Todo.findById(id);
      res.status(201).json({
        success: true,
        data: response,
        message: "Todo Updated Successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = updateTodo;
