let drops = [];
let stars = [];
let change, p, starFill, xLoc, yLoc;
let screen = 1;
let r, g, b;

function setup() {
  createCanvas(900, 900);
  for (let i=0; i<500; i++){
    stars[i] = new Star(random(width), random(0, 700));
  }
  for (let i=0; i<200; i++){
    drops[i] = new Rain();
  }
}

function draw() {
  if (screen == 1) {
    nightField ();
    for (let i=0; i < 500; i++) {
      stars[i].display();
      stars[i].twinkle();
    }
    moon ();
    for (let i=0; i<200; i++){ //150 raindrops produced at a time
      drops[i].display(); 
      drops[i].fall(); 
      if (drops[i].y > height + 200){
        drops[i] = new Rain(); //repeating drops produced
      }
    }
  } else if (screen == 2) {
    dayField (); 
    sun ();
  }
}

function mousePressed () {
  screen ++;
  if (screen > 2) {
    screen = 1;
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

function nightField () {
  let opac = 120;
  let x = 0; 
  let y = height;
  background (15); //night sky
  for (y = height; y >= 700; y -= 5) { //field display
    fill (51, 81, 60, opac); //dark muted green
    noStroke();
    rect (x, y, width, 15);
    opac -= 3; //fade
  }
}

function dayField () {
  let opac = 255;
  let x = 0; 
  let y = height;
  background (25, 158, 218); //blue sky
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

function sun () {
  noStroke();
  fill (255, 240, 55);
  beginShape ();
  vertex (750, 75);
  vertex (775, 125);
  vertex (825, 150);
  vertex (775, 175);
  vertex (750, 225);
  vertex (725, 175);
  vertex (675, 150);
  vertex (725, 125);
  endShape (CLOSE);
  fill (255, 253, 55); 
  //ellipse (750, 150, 100);
}