let a = 0;
const RADIO = 600 / 4;

function paintLines() {
  // Side lines
  line(0, 0, 600, 0);
  line(600, 0, 600, 600);
  line(0, 600, 600, 600);
  line(0, 0, 0, 600);

  circle(height / 2, width / 2, 300);

  // cross lines
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);

}

function setup() {
  createCanvas(600, 600);
  paintLines()

}

function draw() {
  background(255);
  stroke(1);
  strokeWeight(1);

  paintLines();
  translate(width / 2, height / 2);
  let a = atan2(mouseY - height / 2, mouseX - width / 2);
  line(0, 0, cos(a) * RADIO, sin(a) * RADIO);
  line(cos(a) * RADIO, 0, cos(a) * RADIO, sin(a) * RADIO)

  stroke('purple');
  strokeWeight(10);
  point(cos(a) * RADIO, 0)

  stroke('orange');
  point(cos(a) * RADIO, sin(a) * RADIO)

}