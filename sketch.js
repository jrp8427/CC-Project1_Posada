let drops = []; 
let stars = []; 
let clouds = []; 
let leaves = [];
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
  for (let i = 0; i<24; i++){
    clouds[i] = new Cloud();
  }
  for (let i = 0; i<7; i++){
    leaves[i] = new Leaf();
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
      sunset ();
    	sun ();
    	dayField (); 
   		for (let i=0; i<24; i++){
    		clouds[i].display();
    		clouds[i].float();
    		clouds[i].reset(); //repeating 
    	}
    	push();
      translate (50, height + 150);
    	tree (0);
      pop();
      push();
      translate (-80, height + 120);
      tree (0);
    	pop();
      for (let i=0; i<7; i++){
        leaves[i].display();
        leaves[i].fall();
        leaves[i].reset();
      }
    }
  }

function mousePressed () {
  screen ++;
  if (screen > 2) {
    screen = 1;
  }
}
