let xspacing = 15; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 150;
let period = 200.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let logo;
let ballImg;
let mouseMoveX = 300;


function setup() {
  createCanvas(windowWidth, 400);
  w = width;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
  logo.resize(200,200);
  pattern.resize(width,height);

}


function preload(){
  logo = loadImage("Julie Diaz LogoLarge.png");
  pattern = loadImage("pattern.jpg");
  
}


function draw() {
  background(255);
  image(pattern,0,0);
  calcWave();
  renderWave();
  frameRate(20);
  if ( mouseMoveX > -10) {
     mouseMoveX -= 10
  } else if (mouseMoveX < 10) {
     mouseMoveX += 10;
  } 
  
  mouseMoveX += floor(movedX / 5);
  image(logo,mouseMoveX,sin(theta)*20+100); 
  
}


function calcWave() {
  theta += 0.07 

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}


function renderWave() {
  strokeWeight(1);
  stroke(51);
  fill(255,182,193);
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height/2 + yvalues[x],sin(theta/4)*100,sin(theta/3)*100);
  }
}


function mouseClicked() {
  tint(random(255)+150,random(255)+150,random(255)+150);
}

