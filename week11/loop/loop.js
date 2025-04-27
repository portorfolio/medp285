let yPos = 0;


function setup() {
  createCanvas(720, 400); 
  stroke(0); 
  strokeWeight(2);
  frameRate(30);
  noLoop();
}

function draw() {
  background(255); 
  yPos += 2; //lines move 2 pixels down
  if (yPos > 20) {
    yPos = 0; //once line moves down 20 pixels, reset it 
  }
  for(let y=yPos;y<height;y+=20){ //draws lines horizontally down the canvas
    line(0, y, width, y);
  }
}

function mousePressed() {
  loop();
}
