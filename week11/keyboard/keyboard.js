let rectWidth;
let ellipseWidth;
let randR;
let randG;
let randB;

function setup() {
  createCanvas(720, 400);
  background(0);
  rectWidth = width / 10;
  ellipseWidth = width / 10;
  randR = random(255);
  randG = random(255);
  randB = random(255);
}

function draw() {
  // keep draw() here to continue looping while waiting for keys
}

function keyPressed() {
  let keyIndex = -1;
  if (key >= "a" && key <= "z") {
    keyIndex = key.charCodeAt(0) - "a".charCodeAt(0);
  }
  if (keyIndex === -1) {
    // If it's not a letter key, clear the screen
    background(0);
  } else {
    // It's a letter key, fill a rectangle
    randFill_red = Math.floor(Math.random() * 200 + 0.5);
    randFill_green = Math.floor(Math.random() * 150 + 0.5);
    randFill_blue = Math.floor(Math.random() * 100 + 0.5);
    //FLOOR: Calculates the closest integer value that is less than or equal to the value of a number. (rounds down)
    text("hello", random(0, width), random(0, height));
    stroke(randR, randG, randB);
    fill(randFill_red, randFill_green, randFill_blue);
    //text(str, x, y, [maxWidth], [maxHeight])
    let x = map(keyIndex, 0, 25, 0, width - rectWidth);
    //map(value, start1, stop1, start2, stop2)
    rect(x, 0, rectWidth, random(height));
    ellipse(x, random(0, height), ellipseWidth);
    //ellipse(x, y, w, [h])
  }
}
