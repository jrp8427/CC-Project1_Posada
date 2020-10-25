class Cloud {
	constructor () {
		this.x = random (-300, 700);
		this.y = random (50, 400);
		this.s = this.y * 0.25;
		this.move = this.s * 0.015;
		this.change = random (.1, .3);
	}

	display() {
		noStroke ();
    	fill (230);
    	ellipse (this.x, this.y, this.s, this.s * 0.8);
   		ellipse (this.x + (this.s * (2 * this.change)), this.y + (this.s * this.change), this.s, this.s * 0.8);
    	ellipse (this.x - (this.s * this.change), this.y + (this.s * this.change), this.s, this.s * 0.8);
    	ellipse (this.x + (this.s * (0.5 * this.change)), this.y - (this.s * (0.8 * this.change)), this.s, this.s * 0.8);
    	ellipse (this.x - (this.s * this.change), this.y - (this.s * this.change), this.s, this.s * 0.8);
    	ellipse (this.x + (this.s * this.change), this.y, this.s, this.s * 0.8);
    	ellipse (this.x - (this.s * (2 * this.change)), this.y, this.s, this.s * 0.8);
	}

	float() {
		this.x += this.move;
	}

	reset() {
		if (this.x > width + 75) {
			this.x = random (-100, 0);
			this.y = random (50, 350);
			this.s = this.y * 0.25;
			this.move = this.s * 0.02;
			this.change = random (.1, .3);
		}
	}
}