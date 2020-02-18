function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
for (let i = 0; i < 100; i++) {
  let r = random(-200, 400);
  ellipse(r, r +100, 200 + r, i);
  noLoop();
  noFill();
}
  
    
for (let i = 0; i < 100; i++) {
  let r = random(-200, 400);
  line(r, r +100, 200 + r, i);
  stroke(r,100,i);
  noLoop();
  noFill();
}
  }