// ----------------
// TELEGRAM
const Telegraf = require('telegraf')
var fs = require("fs");

const bot = new Telegraf(getToken("telegram"))
bot.startPolling()

function getToken(token) { // searches for token on tokens.json
      var contents = fs.readFileSync("./tokens.json");
      var jsonContent = JSON.parse(contents); // Parse to String
      return jsonContent[token]
  }

bot.command('/volup', (ctx) => {
  if (isMe(ctx.from["id"])) {
    tv("KEY_VOLUP")
  }
})

bot.command('/voldown', (ctx) => {
  if (isMe(ctx.from["id"])) {
    tv("KEY_VOLDOWN")
  }
})

bot.command('/info', (ctx) => {
  if (isMe(ctx.from["id"])) {
    tv("KEY_INFO")
  }
})

bot.command('/chup', (ctx) => {
  if (isMe(ctx.from["id"])) {
    tv("KEY_CHUP")
  }
})

bot.command('/chdown', (ctx) => {
  if (isMe(ctx.from["id"])) {
    tv("KEY_CHDOWN")
  }
})

bot.command('/hdmi', (ctx) => {
  if (isMe(ctx.from["id"])) {
    tv("KEY_HDMI")
  }
})

function isMe(me) {
  if (me === 283858643) {
    return true;
  }
}

function getToken(token) { // searches for token on tokens.json
      var contents = fs.readFileSync("./tokens.json");
      var jsonContent = JSON.parse(contents); // Parse to String
      return jsonContent[token]
  }
