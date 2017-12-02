var Worm = class {
  constructor(posX, posY, rotZ, color){
    this.posX = posX;
    this.posY = posY;
    this.rotZ = rotZ;
    this.color = color;
    this.size = 10;
    this.velocity = 1;
  }

  drawWorm() {
    context.fillStyle = "rgb("+this.color.red+","+this.color.green+","+this.color.blue+")";
    context.fillRect(this.posX, this.posX, this.size, this.size);
  }

  moveWorm() {
    this.rotZ += (Math.random() - 0.5) * 0.1;
    this.posX += Math.cos(this.rotZ) * this.velocity;
    this.posY += Math.sin(this.rotZ) * this.velocity;
  }

  checkColision() {
    if (this.posX < 0) {
      this.rotZ += Math.PI;
      this.posX = 1;
    } else if (this.posX > 512) {
      this.rotZ += Math.PI;
      this.posX = 511;
    }
    if (this.posY < 0) {
      this.rotZ += Math.PI;
      this.posY = 1;
    } else if (this.posY > 512) {
      this.rotZ += Math.PI;
      this.posY = 511;
    }
  }
}