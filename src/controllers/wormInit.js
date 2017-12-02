const canvas = document.getElementById('worms');
const context = canvas.getContext('2d');
context.fillStyle = "rgba(0,0,0,0.01)"

const numWorms = 10;
let worms = new Array();
let workers = new Array();
let wormAux;

init();

function init() {
  for(let i = 0; i < numWorms; i++) {
    let wormAux = {
      posX: Math.round(Math.random() * 512),
      posY: Math.round(Math.random() * 512),
      rotZ: 2 * Math.PI * Math.random(),
      color: {
        red: Math.round(Math.random() * 255),
        blue: Math.round(Math.random() * 255),
        green: Math.round(Math.random() * 255),
      },
      size: 3,
      velocity: 1,
    };
    worms[i] = wormAux;

    workers[i] = new Worker('controllers/wormUpdate.js');
    //Send Worm to update
    workers[i].postMessage(worms[i]);
    //Receive Updated Worm
    workers[i].onmessage = function(msg) {
      let worm = msg.data;
      // draw worms
      context.fillStyle = "rgb("+worm.color.red+","+worm.color.green+","+worm.color.blue+")";
      context.beginPath();
      context.arc(worm.posX, worm.posY, worm.size, 0, Math.PI * 2, true);
      context.fill();
      context.closePath();
    }
  }
}