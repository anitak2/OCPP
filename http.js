const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

app.set('port', (process.env.PORT || 7000));

// Process application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}));

// Process application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Server is running..");
});

app.post('/api/v1/OCPP/bootNotification/:chargerID', (req, res) => {

  console.log(`BootNotification Request success ${req.params.chargerID} & data is ${JSON.stringify(req.body)}`)
  res.send({
    "status": "Accepted",
    "currentTime": "2022-03-25T02:41:13Z",
    "interval": 600
  }
  ).status(200)

});

app.post('/api/v1/OCPP/statusNotification/:chargerID', (req, res) => {

  console.log(`statusNotification Request success ${req.params.chargerID} & data is ${JSON.stringify(req.body)}`);
  res.send({
    messgae: "OK"
  }
  ).status(200)

});

app.post('/api/v1/OCPP/authorize/:chargerID', (req, res) => {

  console.log(`Authorization Request success ${req.params.chargerID} & data is ${JSON.stringify(req.body)}`)
  res.send({
    "idTagInfo": {
      "status": "Accepted",
      "expiryDate": "2022-04-01T11:41:13Z"
    }

  }
  ).status(200)

});

var server = app.listen(app.get('port'), function () {
  console.log('Server is running on port ' + app.get('port'));
});
