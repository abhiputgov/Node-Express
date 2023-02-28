const Task = require('../models/Task');

const getTasks = (req, res) => {
  res.status(200).json({ success: true, functionCalled: 'getTasks' });
};
const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const getTask = (req, res) => {
  res.status(200).json({ success: true, functionCalled: 'getTask' });
};
const patchTask = (req, res) => {
  res.status(200).json({ success: true, functionCalled: 'patchTask' });
};
const deleteTask = (req, res) => {
  res.status(200).json({ success: true, functionCalled: 'deleteTask' });
};
module.exports = {
  getTasks,
  createTasks,
  getTask,
  patchTask,
  deleteTask,
};
