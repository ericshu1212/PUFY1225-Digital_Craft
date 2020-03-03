
function setup() {
    createCanvas(400, 400, SVG); // Create SVG Canvas
    strokeWeight(1);
    stroke('#ED225D');
}

function draw() {

for (var i = 0; i < width; i++) {

let r = random(-200, 200);

  line(0, i, 200+r, i);
    noLoop();
    }
  


	print(frameCount);
  	 if (frameCount > 100) {
        noLoop();
        save();
     }
}