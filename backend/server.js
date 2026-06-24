const express = require("express");
const app = express();

app.use(express.json());

let todos = [];

// test
app.get("/", (req, res) => {
  res.send("Todo DevOps API is running");
});

// get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// create todo
app.post("/todos", (req, res) => {
  const todo = {
    id: Date.now(),
    task: req.body.task
  };
  todos.push(todo);
  res.json(todo);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
