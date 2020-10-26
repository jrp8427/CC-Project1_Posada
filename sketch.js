let drops = []; 
let stars = []; 
let clouds = []; 
let leaves = []; let leaves2 = []; let leaves3 = []; let leaves4 = []; let leaves5 = [];
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
  for (let i = 0; i<6; i++){
    leaves[i] = new Leaf(-200, 100);
    leaves2[i] = new Leaf(-500, -200);
    leaves3[i] = new Leaf (-800, -500);
    leaves4[i] = new Leaf (-1100, -800);
    leaves5[i] = new Leaf (-1400, -1100);
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
      translate (0, height + 120);
      tree (0);
      pop();
      for (let i=0; i<6; i++){
        leaves[i].display();
        leaves[i].fall();
        leaves[i].reset();
        leaves2[i].display();
        leaves2[i].fall();
        leaves2[i].reset();
        leaves3[i].display();
        leaves3[i].fall();
        leaves3[i].reset();
        leaves4[i].display();
        leaves4[i].fall();
        leaves4[i].reset();
        leaves5[i].display();
        leaves5[i].fall();
        leaves5[i].reset();
      }
      push();
      translate (-130, height + 150);
      tree (0);
    	pop();
    }
  }

function mousePressed () {
  screen ++;
  if (screen > 2) {
    screen = 1;
  }
}
