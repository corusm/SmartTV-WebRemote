console.log('Client-side code running');

const turnon = document.getElementById('turnon');
turnon.addEventListener('click', function(e) {
  fetch('/turnon', {method: 'POST'})
});

const source = document.getElementById('source');
source.addEventListener('click', function(e) {
  fetch('/source', {method: 'POST'})
});

const volup = document.getElementById('volup');
volup.addEventListener('click', function(e) {
  fetch('/volup', {method: 'POST'})
});

const voldown = document.getElementById('voldown');
voldown.addEventListener('click', function(e) {
  fetch('/voldown', {method: 'POST'})
});

const info = document.getElementById('info');
info.addEventListener('click', function(e) {
  fetch('/info', {method: 'POST'})
});

const chup = document.getElementById('chup');
chup.addEventListener('click', function(e) {
  fetch('/chup', {method: 'POST'})
});

const chdown = document.getElementById('chdown');
chdown.addEventListener('click', function(e) {
  fetch('/chdown', {method: 'POST'})
});

const hdmi = document.getElementById('hdmi');
hdmi.addEventListener('click', function(e) {
  fetch('/hdmi', {method: 'POST'})
});

const tv = document.getElementById('tv');
tv.addEventListener('click', function(e) {
  fetch('/tv', {method: 'POST'})
});

const up = document.getElementById('up');
up.addEventListener('click', function(e) {
  fetch('/up', {method: 'POST'})
});

const down = document.getElementById('down');
down.addEventListener('click', function(e) {
  fetch('/down', {method: 'POST'})
});

const left = document.getElementById('left');
left.addEventListener('click', function(e) {
  fetch('/left', {method: 'POST'})
});

const right = document.getElementById('right');
right.addEventListener('click', function(e) {
  fetch('/right', {method: 'POST'})
});

const menu = document.getElementById('menu');
menu.addEventListener('click', function(e) {
  fetch('/menu', {method: 'POST'})
});

const sleep = document.getElementById('sleep');
sleep.addEventListener('click', function(e) {
  fetch('/sleep', {method: 'POST'})
});

const open = document.getElementById('open');
open.addEventListener('click', function(e) {
  fetch('/open', {method: 'POST'})
});

const tvreturn = document.getElementById('tvreturn');
tvreturn.addEventListener('click', function(e) {
  fetch('/tvreturn', {method: 'POST'})
});

const exit = document.getElementById('exit');
exit.addEventListener('click', function(e) {
  fetch('/exit', {method: 'POST'})
});

const mute = document.getElementById('mute');
mute.addEventListener('click', function(e) {
  fetch('/mute', {method: 'POST'})
});

const contents = document.getElementById('contents');
contents.addEventListener('click', function(e) {
  fetch('/contents', {method: 'POST'})
});

const turnoff = document.getElementById('turnoff');
turnoff.addEventListener('click', function(e) {
  fetch('/turnoff', {method: 'POST'})
});

/*
const test = document.getElementById('test');
test.addEventListener('click', function(e) {
  fetch('/test', {method: 'POST'})
});
*/
