let express = require('express');
const app = express();
const api = express();
app.use(express.static('public'));

let fs = require("fs");

// Init Winston logger (logger.js)
let winston = require('./logger.js');
let logger = winston.logger;

// Files
const config = require(`${__dirname}/config.json`)

// Webserver
app.listen(config.port, function () {
  logger.log("info", `Webserver is running! :${config.port}`);
});

// Api
api.listen(config.portopen, function () {
  logger.log("info", `Api is running! :${config.portopen}`);
});

// Init TV Remote
const SamsungRemote = require('samsung-remote');
let remote;
function connectTV() {
  remote = new SamsungRemote({
    ip: config.tvip // required: IP address of your Samsung Smart TV
  });
  remote.isAlive((err) => {
    if (err) {
      logger.log("info", "TV offline");
    } else {
      logger.log("info", "Connected to TV");
    }
  });
}
connectTV();

// -------------------
// HTTP POST REQUESTS

app.post('/:data', (req, res) => {
  let input = req.params.data;
  if (input === 'turnon') {
    connectTV();
    logger.log("info", "Connecting...");
  } else {
    tv(`KEY_${req.params.data}`);
    res.sendStatus(200);
  }
})

api.get('/:data', (req, res) => {
  let input = req.params.data;
  if (input === 'turnon') {
    connectTV();
    logger.log("info", "Connecting...");
  } else {
    tv(`KEY_${req.params.data}`);
    res.sendStatus(200);
  }
})

// FUNCTIONS --------------------------

// Execute TV commands
function tv(cmd) {
  remote.send(cmd, (err) => {
    // command has been successfully transmitted to tv
    logger.log("info", cmd + ' has been pressed!');
    if (err) {
      logger.log("info", err);
      connectTV();
      return err;
    } 
    if (!err) {
      return `${cmd} pressed`
    }
  })
}
