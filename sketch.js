let drops = [];

function setup() {
  createCanvas(600, 600);
  background (30);
  frameRate (8);
}

function draw() {
  for (var i=0; i<30; i++){
    drops.push(new rain());
	drops[i].display();
	drops[i].update();
  }
}

function rain () {
  this.x = random (width);
  this.y = 10;
  this.size = random (0, 40);
  this.speed = 10;
  this.display = function () {
    noStroke();
    fill (165, 190, 270, size*3);
    ellipse (x, y, size*0.7, size);
  }
  this.fall = function () {
    this.y += this.speed;
  }
}