let r, g, b, a, c;

function setup() {
  createCanvas(500, 400);
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
  a = random(255); //opacity
}

function draw() {
  c = map(mouseX, 0, 400, 0, 255);
  background(c);
  // Draw a circle
  noStroke();
  fill(r, g, b, a);
  ellipse(300, 200, 200, 200);
  for(let i=0;i<20;i++){
    stroke(r,g,b)
    rect(width/i,height/i,100,100)
  }
}

// When the user clicks the mouse
function mousePressed() {
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 300, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
    a = random(255);
  }
}
