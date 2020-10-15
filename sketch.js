let drops = [];

function setup() {
  createCanvas(900, 900);
  for (let i=0; i<150; i++){
    drops[i] = new Rain();
  }
}

function draw() {
  let opac = 80;
  let x = 0; 
  let y = height;
  background (10);
  for (let i=0; i<150; i++){
    drops[i].display(); 
    drops[i].fall(); 
    if (drops[i].y > height){
      drops[i] = new Rain();
    }
  }
  for (y = height; y >= 20; y -= 5) { //green fading field
    fill (51, 81, 60, opac);
    noStroke();
    rect (x, y, width, 10);
    opac -= 1;
  }
}

class Rain {
  constructor () {
    this.x = random (width);
    this.y = random (-500, 0);
    this.r = random (1, 40);
    this.speed = this.r*0.05;
  }
  display() {
    if (this.y > 700+(this.r*4)) {
      noFill();
      strokeWeight(1);
      stroke (155, 180, 255, this.r*2);
      ellipse (this.x, 700+(this.r*4), this.r*0.8, this.r*0.25);
      //this.r+=2;
  } else {
      noStroke();
      fill (155, 180, 255, this.r*3.5);
      ellipse (this.x, this.y, this.r*0.08, this.r);
  }
}
  fall() {
    this.y += this.speed;
  }
}