function setup() {
  createCanvas(400, 400);
}

function draw() {
  

  background(220);
     fill("yellow");
  rect(0,50,400,1);
  rect(200,0,1,50);


  noStroke();
 
  ellipse(100,200,30,30);
  
  noFill();
  
  fill("red");
  
    rect(20,10,3,30);
  rect(30,10,3,30);
  rect(370,10,3,30);
  rect(360,10,3,30);
  rect(350,10,3,30);
  rect(340,10,3,30);
  rect(330,10,3,30);
  rect(320,10,3,30);
  
  
  int(x=50);
  while(x>49,x<400){
    rect(10,x,10,100);
    x=x+1;
  }
  

}
