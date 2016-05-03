var express = require('express');
var app = express();
var config = require('./config');
var bodyParser = require('body-parser');
var morgan = require('morgan');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(morgan('dev'));

app.get('/', function(req, res){
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/getresults', function(req, res){
  var inputArea = req.body.input;
  var projection = parseInt(req.body.projection);
  var outputPrice = config.MODEL.SLOPE * inputArea + config.MODEL.INTERCEPT;
  var output = [];
  var projectionElement = {
    value : outputPrice,
    month : 1
  }
  output.push(projectionElement);
  for(var i = 0; i < projection - 1; i++){
    outputPrice *= ((Math.random() * 0.2) + 0.9);
    projectionElement = {
      value : outputPrice,
      month : i + 2
    }
    output.push(projectionElement);
  }
  res.send(output);
})

app.listen(config.PORT);

console.log('Server Running on http://localhost:'+config.PORT);
