function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
for (let i = 0; i < 400; i++) {
  let r = random(-200, 200);
  line(200, i, 200 + r, i);
  noLoop();
}
  }
  
