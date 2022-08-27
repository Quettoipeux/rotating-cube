let cnv;

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  centerCanvas();
}

function windowResized() {
  centerCanvas();
}

let value = 'grey';

function draw () {
  background(255);
  strokeWeight(3);
  stroke(255);
  fill(value);
 
  rotateX(frameCount * 0.002);
  rotateY(frameCount * 0.004);
  rotateZ(frameCount * 0.004);
  
  box(150);
} 

function mouseClicked() {
  let c = color(random(1, 254), random(1, 254), random(1, 254));
  if (value === 'grey') {
    value = c;
  } else
    value = c;
}