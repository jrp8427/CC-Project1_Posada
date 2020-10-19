let drops = [];
let stars = [];
let change, p, starFill, xLoc, yLoc;

function setup() {
  createCanvas(900, 900);
  for (let i=0; i<500; i++){
    stars[i] = new Star(random(width), random(0, 700));
  }
  for (let i=0; i<175; i++){
    drops[i] = new Rain();
  }
}

function draw() {
  field ();
  for (let i=0; i < 500; i++) {
    stars[i].display();
    stars[i].twinkle();
  }
  moon ();
  for (let i=0; i<175; i++){ //150 raindrops produced at a time
    drops[i].display(); 
    drops[i].fall(); 
    if (drops[i].y > height + 200){
      drops[i] = new Rain(); //repeating drops produced
    }
  }
}


class Rain {
  constructor () {
    this.x = random (width);
    this.y = random (-500, 0);
    this.r = random (1, 40);
    this.splash = this.r;
    this.speed = this.r*0.1;
  }
  display() {
    if (this.y > 700 + (this.r*4)) { //SPLASHES
      if (this.splash < 3*this.r) {
        this.splash+=1.5;
        noFill();
        strokeWeight(2);
        stroke (155, 180, 255, this.r*3.5);
        ellipse (this.x, 700 + (this.r*4), this.splash*0.7, this.splash*0.25);
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

class Star {
  constructor (x, y) {
    this.xLoc = x;
    this.yLoc = y;
    this.change = random (1, 3);
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

function field () {
  let opac = 120;
  let x = 0; 
  let y = height;
  background (15);
  for (y = height; y >= 700; y -= 5) { //field display
    fill (51, 81, 60, opac); //dark muted green
    noStroke();
    rect (x, y, width, 15);
    opac -= 3; //fade
  }
}

function moon () {
  noStroke();
  fill (255);
  ellipse (750, 150, 100);
  fill (15);
  ellipse (765, 140, 100);
}