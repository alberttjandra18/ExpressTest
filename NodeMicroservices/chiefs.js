const express = require('express');
const path = require('path');

const port = process.argv.slice(2)[0];
const app = express();
app.use(express.urlencoded({extended: true}));

const positions = [
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
      positions: [1],
      busy: false
  },
  {
      id: 2,
      name: 'Hal',
      positions: [2],
      busy: false
  },
  {
      id: 3,
      name: 'Sam',
      positions: [3],
      busy: false
  },
  {
      id: 4,
      name: 'Zar',
      positions: [4],
      busy: false
  },
  {
      id: 5,
      name: 'Isa',
      positions: [5],
      busy: false
  },
  {
      id: 6,
      name: 'Mei',
      positions: [6],
      busy: false
  }  
];

app.get('/chiefs', (req, res) => {
  console.log('Returning chiefs list');
  res.send(chiefs);
});

app.get('/positions', (req, res) => {
  console.log('Returning positions list');
  res.send(positions);
});

app.post('/chiefs', addChief);

function addChief(req,res){
  
}

console.log(`Chiefs service listening on port ${port}`);
app.listen(port);