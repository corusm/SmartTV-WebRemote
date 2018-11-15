const Telegraf = require('telegraf')

var fs = require("fs");

const bot = new Telegraf(getToken("telegram"))
bot.startPolling()
const SamsungRemote = require('samsung-remote');
const remote = new SamsungRemote({
    ip: '192.168.178.79' // required: IP address of your Samsung Smart TV
});

bot.command('/source', (ctx) => {
  var me = ctx.from["id"];
  if (me === 283858643) {
    remote.send('KEY_SOURCE', (err) => {
        if (err) {
            throw new Error(err);
        } else {
            // command has been successfully transmitted to tv
            console.log("change source")
        }
    })
  }
})

bot.command('/vup', (ctx) => {
  var me = ctx.from["id"];
  if (me === 283858643) {
    remote.send('KEY_VOLUP', (err) => {
        if (err) {
            throw new Error(err);
        } else {
            // command has been successfully transmitted to tv
            console.log("volume up")
        }
    })
  }
})

bot.command('/vdown', (ctx) => {
  var me = ctx.from["id"];
  if (me === 283858643) {
    remote.send('KEY_VOLDOWN', (err) => {
        if (err) {
            throw new Error(err);
        } else {
            // command has been successfully transmitted to tv
            console.log("volume down")
        }
    })
  }
})

// check if TV is alive (ping)
remote.isAlive((err) => {
    if (err) {
        throw new Error('TV is offline');
    } else {
        console.log('Connected to TV!');
    }
});

function getToken(token) { // searches for token on tokens.json
      var contents = fs.readFileSync("./tokens.json");
      var jsonContent = JSON.parse(contents); // Parse to String
      return jsonContent[token]
  }

// TV ALL FUNCTIONS
