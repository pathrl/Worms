const canvas = document.getElementById('worms');
const context = canvas.getContext('2d');

let numWorms = 10;
let worms = new Array();
let workers = new Array();
let wormAux;

init();

function init() {
  for(let i = 0; i < numWorms; i++) {
    var x = Math.round(Math.random() * 512);
    var y = Math.round(Math.random() * 512);
    var angle = 2 * Math.PI *Math.random();
    var color = {
      red: Math.round(Math.random() * 255),
      blue: Math.round(Math.random() * 255),
      green: Math.round(Math.random() * 255),
    }
    worms[i] = new Worm();
    worms[i].constructor(x, y, angle, color);
    console.log(worms[i]);

    workers[i] = new Worker('controllers/wormUpdate.js');
    wormAux = JSON.parse(JSON.stringify(worms[i]));
    console.log(workers[i]);
    //Send Worm to update
    workers[i].postMessage(worms[i]);

    //Receive Updated Worm
    workers[i].onmessage = function(msg) {
      workers[i] = msg.data;
      workers[i].drawWorm();
    }
  }
}