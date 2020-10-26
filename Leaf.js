class Leaf {
  constructor (yTop, yBot) {
    this.position = createVector(random(-300, 400), random(yTop, yBot));
    this.velocity = createVector ();
    this.gravity = createVector(0, .02);
    this.wind = createVector (.05, 0);
    this.r = random (30, 45);
    this.speed = this.r*0.05;
    this.max = 4;
  }

  display () {
    strokeWeight(20);
    fill (20, 64, 33);
    let turn = this.velocity.heading(); //turn direction moving
    push();
    ellipse (this.position.x, this.position.y, this.r*.5, this.r);
    pop();
  }

  fall () {
    this.velocity.add(this.gravity);
    if (this.position.y < 0) {
      //do nothing
    } else if (this.position.y < 200) {
      this.velocity.add(this.wind);
    } else if (this.position.y < 400) {
      this.velocity.sub(this.wind);
    } else if (this.position.y < 600) {
      this.velocity.add(this.wind);
    } else if (this.position.y < 900) {
      this.velocity.sub(this.wind);
    }
    this.position.add(this.velocity);
    this.velocity.limit(max);
  }

  reset() {
    if (this.position.y > height){
      this.position.set(random(-300, 400), random(-200, 100));
      this.velocity.set(0, 0);
    }
  }
}
