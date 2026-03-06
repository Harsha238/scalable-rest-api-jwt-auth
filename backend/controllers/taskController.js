const Task = require("../models/Task");

// CREATE TASK
exports.createTask = async (req, res) => {

  try {

    const task = new Task({
      title: req.body.title,
      description: req.body.description,
      createdBy: req.user.id
    });

    await task.save();

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};


// GET ALL TASKS
exports.getTasks = async (req, res) => {

  try {

    const tasks = await Task.find({ createdBy: req.user.id });

    res.json(tasks);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};


// UPDATE TASK
exports.updateTask = async (req, res) => {

  try {

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(task);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};


// DELETE TASK
exports.deleteTask = async (req, res) => {

  try {

    await Task.findByIdAndDelete(req.params.id);

    res.json({ message: "Task deleted" });

  } catch (error) {

    res.status(500).json({ error: error.message });

  }

};