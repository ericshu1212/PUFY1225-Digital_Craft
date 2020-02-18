function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
for (let i = 0; i < 800; i++) {
  let r = random(-200, 200);
  line(r, i, 200 + r, i);
  noLoop();
  noFill();
}
  }