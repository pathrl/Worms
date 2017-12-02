let wormAux;

self.onmessage = function(msg){
  console.log(msg);
  wormAux = msg.data;
  // temp
  temporizador = setTimeout('update()',30);
}
function update() {
  wormAux.moveWorm();
  wormAux.checkColision();
  postMessage(wormAux);
  // temp
  clearTimeout(temporizador);
  temporizador = setTimeout('update()',30);
}
