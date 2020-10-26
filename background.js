function nightField () {
  let opac = 120;
  let x = 0; 
  let y = height;
  background (15); //night sky
  for (y = height; y >= 700; y -= 5) { //field display
    fill (32, 90, 50, opac); //dark muted green
    noStroke();
    rect (x, y, width, 15);
    opac -= 3; //fade
  }
}

function dayField () {
	let opac = 50; 
  	noFill();
  	for (let y = 710; y <= height; y += 1) { //field display
  		fill (20, 64, 33, opac); //dark muted green
    	noStroke();
    	rect (0, y, width, 5);
    	opac += 1;
    }
}

function sunset () {
	let x = 0;
  	for (let i = 0; i <= height; i++) { //i = every x value
  		let y = 0; 
  		let c1 = color (231, 111, 81); //red
  		let c2 = color (233, 196, 106); //yellow 
  		var inter = map (i, y, y + height, 0, 1); //inter = # b/w 0 and 1 based on y value
  		var c = lerpColor (c1, c2, inter); //make c a color gradient b/w c1 and c2
  		stroke (c);
  		line (x, i, x+width, i);
  	}
  }

function moon () {
	noStroke();
	fill (255);
	ellipse (750, 150, 150); //white circle
	fill (15);
	ellipse (765, 140, 150); //black circle
}

function sun () {
	noStroke();
	fill (242, 187, 5); 
	ellipse (width/2, 750, 325, 300);
}

function tree(depth){ 
	strokeWeight (90);
    stroke (0);
    if (depth < 10) { 
    	line(0,0,0,-300); // base line 
    	translate(0,-300); // connect branches
      	scale(0.8); //smaller 
      	push();
      	rotate(.4); // to the right
        tree(depth + 1); // new branch
        pop();

        push();
        rotate(-.5); // to the left
        tree(depth + 1);   // second new branch 
        pop();       
    }
}
