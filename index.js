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

app.post('/turnon', (req, res) => {
  connectTV();
  console.log('try to connect');
})


app.post('/source', (req, res) => {
  tv("KEY_SOURCE")
  console.log('is running');
})

app.post('/volup', (req, res) => {
  tv("KEY_VOLUP")
})

app.post('/voldown', (req, res) => {
  tv("KEY_VOLDOWN")
})

app.post('/info', (req, res) => {
  tv("KEY_INFO")
})

app.post('/chup', (req, res) => {
  tv("KEY_CHUP")
})

app.post('/chdown', (req, res) => {
  tv("KEY_CHDOWN")
})

app.post('/hdmi', (req, res) => {
  tv("KEY_HDMI")
})

app.post('/tv', (req, res) => {
  tv("KEY_TV")
})

app.post('/up', (req, res) => {
  tv("KEY_UP")
})

app.post('/down', (req, res) => {
  tv("KEY_DOWN")
})

app.post('/left', (req, res) => {
  tv("KEY_LEFT")
})

app.post('/right', (req, res) => {
  tv("KEY_RIGHT")
})

app.post('/menu', (req, res) => {
  tv("KEY_MENU")
})

app.post('/sleep', (req, res) => {
  tv("KEY_SLEEP")
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
