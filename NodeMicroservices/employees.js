const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = process.argv.slice(2)[0];
const app = express();
app.use(bodyParser.json());

const roles = [
  { id: 1, name: 'CEO' },
  { id: 2, name: 'CTO' },
  { id: 3, name: 'COO' },
  { id: 4, name: 'CCO'},
  { id: 5, name: 'CPO'},
  { id: 6, name: 'CE' }
];

const chiefs = [
  {
      id: 1,
      name: 'Ste',
      roles: [1],
      busy: false
  },
  {
      id: 2,
      name: 'Hal',
      roles: [2],
      busy: false
  },
  {
      id: 3,
      name: 'Sam',
      roles: [3],
      busy: false
  },
  {
      id: 4,
      name: 'Zar',
      roles: [4],
      busy: false
  },
  {
      id: 5,
      name: 'Isa',
      roles: [5],
      busy: false
  },
  {
      id: 6,
      name: 'Mei',
      roles: [6],
      busy: false
  }  
];

app.get('/chiefs', (req, res) => {
  console.log('Returning chiefs list');
  res.send(chiefs);
});

app.get('/roles', (req, res) => {
  console.log('Returning roles list');
  res.send(roles);
});

app.post('/chief/**', (req, res) => {
  const chiefId = parseInt(req.params[0]);
  const foundChief = chiefs.find(subject => subject.id === chiefId);

  if (foundChief) {
      for (let attribute in foundChief) {
          if (req.body[attribute]) {
            foundChief[attribute] = req.body[attribute];
              console.log(`Set ${attribute} to ${req.body[attribute]} in chief: ${chiefId}`);
          }
      }
      res.status(202).header({Location: `http://localhost:${port}/chief/${foundChief.id}`}).send(foundChief);
  } else {
      console.log(`Chief not found.`);
      res.status(404).send();
  }
});

console.log(`Chiefs service listening on port ${port}`);
app.listen(port);