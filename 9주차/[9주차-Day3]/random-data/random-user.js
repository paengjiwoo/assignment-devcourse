const express = require('express');
const app = express();

const { faker } = require('@faker-js/faker');

app.get('/fake/users', function (req, res) {
  const num = parseInt(req.query.num);
  let users;

  if (!num) {
    users = {
      email : faker.internet.email(),
      password : faker.internet.password(),
      fullName : faker.person.fullName(),
      contact : faker.phone.number()
    }
  } else {
    users = [];
    for (let i = 0; i < num; i++) {
      users.push({
        email : faker.internet.email(),
        password : faker.internet.password(),
        fullName : faker.person.fullName(),
        contact : faker.phone.number()
      });
    };
  }
  res.status(200).send(users);
});

app.listen(5555);