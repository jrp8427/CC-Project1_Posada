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
  let opac = 220;
  let x = 0;
  let y = height;
  background (25, 158, 218); //blue sky
  for (y = height; y >= 700; y -= 5) { //field display
    fill (51, 81, 60, opac); //dark muted green
    noStroke();
    rect (x, y, width, 15);
    opac -= 4;
  }
}

function moon () {
  noStroke();
  fill (255);
  ellipse (750, 150, 100); //white circle
  fill (15);
  ellipse (765, 140, 100); //black circle
}

function sun () {
  noStroke();
  fill (255, 253, 55); 
  ellipse (750, 150, 100);
}
