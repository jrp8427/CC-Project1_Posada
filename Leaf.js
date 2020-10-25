class Leaf {
  constructor () {
    this.x = random(0, 650);
    this.y = random (-800, 0);
    this.r = random (35, 45);
    this.speed = this.r*0.05;
  }

  display() {
      strokeWeight(20);
      fill (0);
      ellipse (this.x, this.y, this.r*0.5, this.r);
    }

  fall() { //gravity
    this.y += this.speed;
  }

  reset() {
    if (this.y == height){
      this.x = random(0, 650);
      this.y = random (-800, 0);
      this.r = random (35, 45);
      this.speed = this.r*0.05;
    }
  }
}