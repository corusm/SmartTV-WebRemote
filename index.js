var express = require('express');
const app = express();
app.use(express.static('public'));

var fs = require("fs");

app.listen(getPara("port"), function () {
  console.log('Webserver running!');
});

var status = false;
const SamsungRemote = require('samsung-remote');
var remote;
function connectTV() {
  remote = new SamsungRemote({
      ip: getPara("tvip") // required: IP address of your Samsung Smart TV
  });
  remote.isAlive((err) => {
    if (err) {
        console.log('tv off');
    } else {
        console.log('TV is ALIVE!');
        status = true;
    }
});
}
connectTV();

app.post('/turnon', (req, res) => {
  connectTV();
  console.log('try to connect');
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
})

// FUNCTIONS --------------------------

// tv commands
function tv(cmd) {
  if (status) {
    remote.send(cmd, (err) => {
      if (err) {
          throw new Error(err);
      } else {
          // command has been successfully transmitted to tv
          console.log("[OK]: " + cmd)
      }
    })
  } else {
    console.log('error: can not run command');
  }
}

// getTokens
function getPara(token) {
      var contents = fs.readFileSync("./tokens.json");
      var jsonContent = JSON.parse(contents); // Parse to String
      return jsonContent[token]
  }
