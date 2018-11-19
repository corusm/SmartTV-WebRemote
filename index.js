var express = require('express');
const app = express();
app.use(express.static('public'));

var fs = require("fs");

// Global Variables (is false if TV is offline)
var status = false;

// Init Winston logger (logger.js)
var winston = require('./logger.js');
var logger = winston.logger;

app.listen(getPara("port"), function () {
  logger.log("info", "Webserver is running!");
});

// Init TV Remote
const SamsungRemote = require('samsung-remote');
var remote;
function connectTV() {
  remote = new SamsungRemote({
      ip: getPara("tvip") // required: IP address of your Samsung Smart TV
  });
  remote.isAlive((err) => {
    if (err) {
      logger.log("info", "TV offline");
      status = false;
    } else {
      logger.log("info", "Connected to TV");
      status = true;
    }
});
}
connectTV();

// -------------------
// HTTP POST REQUESTS

app.post('/turnon', (req, res) => {
  connectTV();
  logger.log("info", "Connecting...");
  res.sendStatus(200);
})

app.post('/source', (req, res) => {
  tv("KEY_SOURCE");
  res.sendStatus(200);
})

app.post('/volup', (req, res) => {
  tv("KEY_VOLUP");
  res.sendStatus(200);
})

app.post('/voldown', (req, res) => {
  tv("KEY_VOLDOWN");
  res.sendStatus(200);
})

app.post('/info', (req, res) => {
  tv("KEY_INFO");
  res.sendStatus(200);
})

app.post('/chup', (req, res) => {
  tv("KEY_CHUP");
  res.sendStatus(200);
})

app.post('/chdown', (req, res) => {
  tv("KEY_CHDOWN");
  res.sendStatus(200);
})

app.post('/hdmi', (req, res) => {
  tv("KEY_HDMI");
  res.sendStatus(200);
})

app.post('/tv', (req, res) => {
  tv("KEY_TV");
  res.sendStatus(200);
})

app.post('/up', (req, res) => {
  tv("KEY_UP");
  res.sendStatus(200);
})

app.post('/down', (req, res) => {
  tv("KEY_DOWN");
  res.sendStatus(200);
})

app.post('/left', (req, res) => {
  tv("KEY_LEFT");
  res.sendStatus(200);
})

app.post('/right', (req, res) => {
  tv("KEY_RIGHT");
  res.sendStatus(200);
})

app.post('/menu', (req, res) => {
  tv("KEY_MENU");
  res.sendStatus(200);
})

app.post('/sleep', (req, res) => {
  tv("KEY_SLEEP");
  res.sendStatus(200);
})

app.post('/open', (req, res) => {
  tv("KEY_ENTER");
  res.sendStatus(200);
})

app.post('/tvreturn', (req, res) => {
  tv("KEY_RETURN");
  res.sendStatus(200);
})

app.post('/exit', (req, res) => {
  tv("KEY_EXIT");
  res.sendStatus(200);
})

app.post('/mute', (req, res) => {
  tv("KEY_MUTE");
  res.sendStatus(200);
})

app.post('/contents', (req, res) => {
  tv("KEY_CONTENTS");
  res.sendStatus(200);
})

app.post('/turnoff', (req, res) => {
  tv("KEY_POWEROFF");
  res.sendStatus(200);
  status = false;
})

// FUNCTIONS --------------------------

// Execute TV commands
function tv(cmd) {
  if (status) {
    remote.send(cmd, (err) => {
      if (err) {
          // Catching error if TV is offline and cmd has been executed
          logger.log("info", "TV is not online! (ERR)");
          logger.log("info", err);
      } else {
          // command has been successfully transmitted to tv
          logger.log("info", cmd + ' has been pressed!');
      }
    })
  } else {
    logger.log("info", "error: can not run command (" + cmd + ")");
  }
}

// getConfig of Server
function getPara(token) {
      var contents = fs.readFileSync("./config.json");
      var jsonContent = JSON.parse(contents); // Parse to String
      return jsonContent[token]
  }
