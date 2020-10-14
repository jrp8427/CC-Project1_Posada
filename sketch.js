function setup() {
 createCanvas (900, 900);
}

function draw() {
	let x = random (width);
	let y = 0;
	let speed = 2;
	ellipse (x, y, 5, 5);
	this.y = y + speed;
}