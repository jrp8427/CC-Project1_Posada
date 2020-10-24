let drops = []; 
let stars = [];
let clouds = []; 
let change, p, starFill, xLoc, yLoc; //star variables
let screen = 1;

function setup() {
  createCanvas(900, 900);
  for (let i=0; i<500; i++){
    stars[i] = new Star(random(width), random(0, 700));
  }
  for (let i=0; i<250; i++){
    drops[i] = new Rain();
  }
  for (let i = 0; i<20; i++){
    clouds[i] = new Cloud();
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
    for (let i=0; i<250; i++){ //150 raindrops produced at a time
      drops[i].display(); 
      drops[i].fall(); 
      if (drops[i].y > height + 200){
        drops[i] = new Rain(); //repeating drops 
      }
    }
  } else if (screen == 2) {
    dayField (); 
    sun ();
    for (let i=0; i<20; i++){
      clouds[i].display();
      clouds[i].float();
      clouds[i].reset(); //repeating clouds
    }
  }
}

function mousePressed () {
  screen ++;
  if (screen > 2) {
    screen = 1;
  }
}
