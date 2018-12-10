const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/users', (req, res) => {
  const users = [
    { name: 'Kiet', age: 34 },
    { name: 'Susu', age: 10 },
  ];
  res.send(users);
});

app.listen(3000);

module.exports.app = app;
