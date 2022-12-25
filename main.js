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

  const COS = cos(a) * RADIO;
  const SIN = sin(a) * RADIO;
  const TAN = tan(a) * RADIO;

  console.log('tan', TAN)
  // Radio Line
  line(0, 0, COS, SIN);

  // Sin Line
  line(COS, 0, COS, SIN)

  // Tangent Line
  line(RADIO, 0, RADIO, TAN)

  // Exsecante Line
  line(COS, SIN, RADIO, TAN)

  stroke('purple');
  strokeWeight(10);
  point(COS, 0)

  stroke('orange');
  point(COS, SIN)

  stroke('pink')
  point(RADIO, 0)
  point(RADIO, TAN)

}