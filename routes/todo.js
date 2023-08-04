const express = require("express");
const router = express.Router();

const createTodo = require("../controllers/createTodo");
const { getTodo } = require("../controllers/getTodo");
const { getTodoById } = require("../controllers/getTodo");
const updateTodo = require("../controllers/updateTodo");
const deleteTodo = require("../controllers/deleteTodo");

router.post("/createtodo", createTodo);
router.get("/gettodo", getTodo);
router.get("/gettodo/:id", getTodoById);
router.put("/updatetodo/:id", updateTodo);
router.delete("/deletetodo/:id", deleteTodo);

module.exports = router;
