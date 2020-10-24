class Rain {
  constructor () {
    this.x = random (width);
    this.y = random (-3000, 0);
    this.r = random (1, 40);
    this.splash = this.r;
    this.speed = this.r*0.1;
  }
  display() {
    if (this.y > 700 + (this.r*4)) { //SPLASHES
      if (this.splash < 3*this.r) {
        noFill();
        strokeWeight(2);
        stroke (155, 180, 255, this.r*3.5);
        ellipse (this.x, 700 + (this.r*4), this.splash*0.7, this.splash*0.25);
        this.splash+=.5;
      }
    } else { //RAINDROPS 
      noStroke();
      fill (155, 180, 255, this.r*3.5);
      ellipse (this.x, this.y, this.r*0.08, this.r);
  }
}
  fall() { //gravity
    this.y += this.speed;
  }
}