let drops = [];

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background (30);
  for (let i=0; i<60; i++){
    drops.push(new rain());
  drops[i].display();
  drops[i].fall();
    if(drops[i].y > height){
      drops.splice(i,1);
    }
  }
}

function rain () {
  this.x = random (width);
  this.y = 10;
  this.radius = random (5, 50);
  this.speed = this.radius*0.1;
  this.display = function () {
    noStroke();
    fill (165, 190, 270, this.radius*3);
    ellipse (this.x, this.y, this.radius*0.7, this.radius);
  }
  this.fall = function () {
    this.y += this.speed;
  }
}