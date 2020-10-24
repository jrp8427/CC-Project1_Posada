class Star {
  constructor (x, y) {
    this.xLoc = x;
    this.yLoc = y;
    this.change = random (1, 4);
    this.starFill = random (255);
  }

  display () {
    strokeWeight(1.5);
    stroke (this.starFill);
    point(this.xLoc, this.yLoc);
  }
  twinkle () {
    if (this.starFill >= 255) {
      this.p = true;
    }
    if (this.starFill <= 0) {
      this.p = false;
    }
    if (this.p) {
      this.starFill -= this.change;
    } else {
      this.starFill += this.change;
    }
  }
}