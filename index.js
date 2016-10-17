var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var config = require("./server/config");
var connectionString = config.connectionString;



var massiveInstance = massive.connectSync({connectionString: connectionString});
var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret
}));

app.set('db', massiveInstance);
app.use(express.static(__dirname + '/public'));
var db = app.get('db');

var chargers = require('./server/controllers/chargerCtrl.js');


app.get('/chargers', chargers.getChargeLocations);
app.get('/changeBattery/:id', chargers.changeBattery);
app.get('/product', chargers.getAllProduct);
app.get('/customize/:id', chargers.customizeCar);
app.get('/changeWheel/:id', chargers.changeWheel);
app.get('/checkLogin', chargers.verifyLogin);
app.get('/getOrder/:id', chargers.getOrder);
app.get('/getCar', chargers.getCar);
app.get('/changeRoof/:id', chargers.changeRoof);
app.get('/changeLiner/:id', chargers.changeHeadliner);
app.get('/changeDecor/:id', chargers.changeDecor);
app.get('/changeSeats/:id', chargers.changeSeats);


app.post('/checkout', chargers.createOrder);
app.post('/createCustomer', chargers.createCustomer);


app.listen(config.port, function() {
  console.log('listening on port: ' + config.port);
});
