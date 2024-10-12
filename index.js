const express = require('express');
const models = require('./models');

const app = express();

models.sequelize.sync().then(function () {
    console.log('Database synchronized');

} ).catch(function (err) {
    console.error('Error connecting to the database:', err);
});

app.get('/', function (req, res) {
    res.send('Welcome to Avalon Airlines!')
})

app.listen(3000, function () {
    console.log('Server is running on port 3000');
})

