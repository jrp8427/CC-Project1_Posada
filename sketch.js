function setup() {
	createCanvas (600, 600);
	background (0, 0, 0);
}

function draw() {
	let x = random (width);
	let y = 0;
	let speed = 2;
	noStroke();
	fill (255, 255, 255);
	ellipse (x, y, 5);
	this.y = y + speed;
}