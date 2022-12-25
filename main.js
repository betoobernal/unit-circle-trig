let a = 0;
const RADIO = 600 / 4;

const sinEl = document.getElementById('sin');
const cosEl = document.getElementById('cos');
const tanEl = document.getElementById('tan');
const cotEl = document.getElementById('cot');
const angEl = document.getElementById('angle');

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
  scale(1, -1)
  let a = -1 * atan2(mouseY - height / 2, mouseX - width / 2);

  const COS = cos(a) * RADIO;
  const SIN = sin(a) * RADIO;
  const TAN = tan(a) * RADIO;
  const COT = (cos(a) / sin(a)) * RADIO;

  // write values
  angEl.textContent = degrees(a).toFixed(0) + '%'
  sinEl.textContent = (SIN / RADIO).toFixed(2);
  cosEl.textContent = (COS / RADIO).toFixed(2);
  tanEl.textContent = (SIN / RADIO).toFixed(4) === '1.0000' ? 'ind' : (TAN / RADIO).toFixed(2);
  cotEl.textContent = (COS / RADIO).toFixed(4) === '1.0000' ? 'ind' : (COT / RADIO).toFixed(2);

  // Radio Line
  line(0, 0, COS, SIN);

  // Sin Line
  line(COS, 0, COS, SIN)

  // Tangent Line
  line(RADIO, 0, RADIO, TAN)

  // Cotangent Line
  line(0, RADIO, COT, RADIO)

  // Exsecante Line
  line(COS, SIN, RADIO, TAN)

  // Excosecante Line
  line(COS, SIN, COT, RADIO)

  // arc
  stroke(100)
  strokeWeight(3);
  arc(0, 0, 80, 80, 0, a);
  noFill();

  stroke('purple');
  strokeWeight(10);
  point(COS, 0)

  stroke('orange');
  point(COS, SIN)

  stroke('pink')
  point(RADIO, 0)
  point(RADIO, TAN)

  stroke('red')
  point(0, RADIO)
  point(COT, RADIO)

}