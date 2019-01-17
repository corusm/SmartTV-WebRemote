console.log('Client-side code running');

const turnon = document.getElementById('turnon');
turnon.addEventListener('click', function(e) {
  fetch('/turnon', {method: 'POST'})
});

const source = document.getElementById('source');
source.addEventListener('click', function(e) {
  fetch('/SOURCE', {method: 'POST'})
});

const volup = document.getElementById('volup');
volup.addEventListener('click', function(e) {
  fetch('/VOLUP', {method: 'POST'})
});

const voldown = document.getElementById('voldown');
voldown.addEventListener('click', function(e) {
  fetch('/VOLDOWN', {method: 'POST'})
});

const info = document.getElementById('info');
info.addEventListener('click', function(e) {
  fetch('/INFO', {method: 'POST'})
});

const chup = document.getElementById('chup');
chup.addEventListener('click', function(e) {
  fetch('/CHUP', {method: 'POST'})
});

const chdown = document.getElementById('chdown');
chdown.addEventListener('click', function(e) {
  fetch('/CHDOWN', {method: 'POST'})
});

const hdmi = document.getElementById('hdmi');
hdmi.addEventListener('click', function(e) {
  fetch('/HDMI', {method: 'POST'})
});

const tv = document.getElementById('tv');
tv.addEventListener('click', function(e) {
  fetch('/TV', {method: 'POST'})
});

const up = document.getElementById('up');
up.addEventListener('click', function(e) {
  fetch('/UP', {method: 'POST'})
});

const down = document.getElementById('down');
down.addEventListener('click', function(e) {
  fetch('/DOWN', {method: 'POST'})
});

const left = document.getElementById('left');
left.addEventListener('click', function(e) {
  fetch('/LEFT', {method: 'POST'})
});

const right = document.getElementById('right');
right.addEventListener('click', function(e) {
  fetch('/RIGHT', {method: 'POST'})
});

const menu = document.getElementById('menu');
menu.addEventListener('click', function(e) {
  fetch('/MENU', {method: 'POST'})
});

const sleep = document.getElementById('sleep');
sleep.addEventListener('click', function(e) {
  fetch('/SLEEP', {method: 'POST'})
});

const open = document.getElementById('open');
open.addEventListener('click', function(e) {
  fetch('/ENTER', {method: 'POST'})
});

const tvreturn = document.getElementById('tvreturn');
tvreturn.addEventListener('click', function(e) {
  fetch('/RETURN', {method: 'POST'})
});

const exit = document.getElementById('exit');
exit.addEventListener('click', function(e) {
  fetch('/EXIT', {method: 'POST'})
});

const mute = document.getElementById('mute');
mute.addEventListener('click', function(e) {
  fetch('/MUTE', {method: 'POST'})
});

const contents = document.getElementById('contents');
contents.addEventListener('click', function(e) {
  fetch('/CONTENTS', {method: 'POST'})
});

const turnoff = document.getElementById('turnoff');
turnoff.addEventListener('click', function(e) {
  fetch('/POWEROFF', {method: 'POST'})
});
