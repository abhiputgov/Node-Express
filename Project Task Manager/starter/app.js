const app = require('express')();
const tasksRoutes = require('./routes/tasks');
const PORT = 3000;

app.use('/api/v1/tasks', tasksRoutes);

/*
app.get('/api/v1/tasks') --> get all tasks
app.post('/api/v1/tasks') --> create a new task
app.get('/api/v1/tasks/:id') --> get a task
app.patch('/api/v1/tasks/:id') --> update a single task
app.delete('/api/v1/tasks/:id') --> delete a task
*/

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
