var express = require('express');
const app = express();
app.use(express.static('public'));
var fs = require("fs");

app.listen(3000, function () {
  console.log('Webserver running!');
});

const SamsungRemote = require('samsung-remote');
const remote = new SamsungRemote({
    ip: getToken("ip")
});

app.post('/source', (req, res) => {
  tv("KEY_SOURCE")
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

app.post('/turnoff', (req, res) => {
  tv("KEY_POWEROFF")
})

/*

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

*/

// check if TV is alive (ping)
remote.isAlive((err) => {
    if (err) {
        console.log('tv is offline')

    } else {
        console.log('Connected to tv!');
    }
});

// tv commands
function tv(cmd) {
  remote.send(cmd, (err) => {
      if (err) {
          throw new Error(err);
      } else {
          // command has been successfully transmitted to tv
          console.log("[OK]: " + cmd)
      }
  })
}

// getTokens
function getToken(token) { // searches for token on tokens.json
      var contents = fs.readFileSync("./tokens.json");
      var jsonContent = JSON.parse(contents); // Parse to String
      return jsonContent[token]
  }
