const getTasks = (req, res) => {
  res.status(200).json({ success: true, functionCalled: 'getTasks' });
};
const createTasks = (req, res) => {
  res.status(200).json({ success: true, functionCalled: 'createTasks' });
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
