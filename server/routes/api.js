const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));
this.statusValues = ['works', 'stopped', 'error', 'starting', 'overloaded'];
let servers = [];
this.servers = [{
    "id": "1",
    "name": "first",
    "ip": "128.012.123.12",
    "type": "Tomcat",
    "status": "works"
  },
  {
    "id": "2",
    "name": "second",
    "ip": "128.012.123.13",
    "type": "Cassandra",
    "status": "stopped"
  },
  {
    "id": '3',
    "name": 'name',
    "ip": '12.123.12.51',
    "type": 'Tomcat',
    "status": 'error'
  },
  {
    "id": '4',
    "name": 'name1',
    "ip": '12.123.12.51',
    "type": 'Postgress',
    "status": 'starting'
  },
  {
    "id": '5',
    "name": 'name123',
    "ip": '12.123.12.51',
    "type": 'Spark',
    "status": 'overloaded'
  }
]
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});
router.get('/servers', (req, res) => {
  res.send(this.servers);
});
router.post('/servers/new', (req, res) => {
  let status = this.statusValues[Math.floor(Math.random() * this.statusValues.length)];
  let id = parseInt(this.servers[this.servers.length - 1].id) + 1;
  let newServer = {
    "id": id + '',
    "name": req.body.name,
    "ip": req.body.ip,
    "type": req.body.type,
    "status": status
  }
  this.servers.push(newServer);
  res.send(this.servers);
});
router.get('/servers/:id', (req, res) => {
  let server = this.servers.find(server => server.id === req.params['id']);
  res.send(server);
});
router.delete('/servers/:id', (req, res) => {
  let toDelete = this.servers.findIndex(server => server.id === req.params['id']);
  this.servers.splice(toDelete, 1);
  res.sendStatus(200);
});
router.put('/servers/:id', (req, res) => {
  if (req.body.function == "update") {
    let i = this.servers.findIndex(server => server.id === req.params['id']);
    this.servers[i].name = req.body.server.name;
    this.servers[i].ip = req.body.server.ip;
    res.send(this.servers[i]);
  }
});
router.put('/servers/changeStatus/:id', (req, res) => {
  if (req.body.function == "update") {
    let i = this.servers.findIndex(server => server.id === req.params['id']);
    this.servers[i].status = req.body.server.status;
    res.send(this.servers[i]);
  }
});
module.exports = router;
