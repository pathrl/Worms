let wormObject;

self.onmessage = function(msg) {
  wormObject = msg.data;
  // temp
  temporizador = setTimeout('update()',30);
}

function update() {
  // move worm
  wormObject.rotZ += Math.random()* 1;
  // wormObject.velocity += Math.round((Math.random() - 0.5) * 4);
  wormObject.posX += Math.cos(wormObject.rotZ) * wormObject.velocity;
  wormObject.posY += Math.sin(wormObject.rotZ) * wormObject.velocity;
  wormObject.color.red += Math.round((Math.random() - 0.5) * 4);
  wormObject.color.blue += Math.round((Math.random() - 0.5) * 4);
  wormObject.green += Math.round((Math.random() - 0.5) * 4);
  // wormObject.size += Math.round((Math.random() - 0.5) * 4);

  /* if(wormObject.velocity <= 0) wormObject.velocity = 1;
  if(wormObject.velocity > wormObject.size) wormObject.velocity = wormObject.size;

  if(wormObject.size <= 0) wormObject.size = 1;
  if(wormObject.size > 10) wormObject.size = 10; */

  // check Colision
  if (wormObject.posX < 0) {
    wormObject.rotZ += Math.PI;
    wormObject.posX = 1;
  } else if (wormObject.posX > 512) {
    wormObject.rotZ += Math.PI;
    wormObject.posX = 511;
  }
  if (wormObject.posY < 0) {
    wormObject.rotZ += Math.PI;
    wormObject.posY = 1;
  } else if (wormObject.posY > 512) {
    wormObject.rotZ += Math.PI;
    wormObject.posY = 511;
  }
  // Send update worm
  postMessage(wormObject);
  // temp
  clearTimeout(temporizador);
  temporizador = setTimeout('update()',30);
}
