const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;
const peopleRoutes = require('./routes/people');
const authRoutes = require('./routes/auth');
//middleware
app.use(express.static(path.join(__dirname, './methods-public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/people', peopleRoutes);
app.use('/login', authRoutes);



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
