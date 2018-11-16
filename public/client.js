console.log('Client-side code running');

const turnoff = document.getElementById('turnoff');
turnoff.addEventListener('click', function(e) {
  fetch('/turnoff', {method: 'POST'})
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

/*
const chup = document.getElementById('chup');
info.addEventListener('click', function(e) {
  fetch('/chup', {method: 'POST'})
});

const chdown = document.getElementById('chdown');
info.addEventListener('click', function(e) {
  fetch('/chdown', {method: 'POST'})
});

const hdmi = document.getElementById('hdmi');
info.addEventListener('click', function(e) {
  fetch('/hdmi', {method: 'POST'})
});

const tv = document.getElementById('tv');
info.addEventListener('click', function(e) {
  fetch('/tv', {method: 'POST'})
});

const up = document.getElementById('up');
info.addEventListener('click', function(e) {
  fetch('/up', {method: 'POST'})
});

const down = document.getElementById('down');
info.addEventListener('click', function(e) {
  fetch('/down', {method: 'POST'})
});

const left = document.getElementById('left');
info.addEventListener('click', function(e) {
  fetch('/left', {method: 'POST'})
});

const right = document.getElementById('right');
info.addEventListener('click', function(e) {
  fetch('/right', {method: 'POST'})
});

const menu = document.getElementById('menu');
info.addEventListener('click', function(e) {
  fetch('/menu', {method: 'POST'})
});

const sleep = document.getElementById('sleep');
info.addEventListener('click', function(e) {
  fetch('/sleep', {method: 'POST'})
});
*/

/*
const test = document.getElementById('test');
info.addEventListener('click', function(e) {
  fetch('/test', {method: 'POST'})
});
*/
