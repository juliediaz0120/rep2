let rectX = 0;
let wheel1X = 40;
let wheel2X= 260;
let window1X = 60;
let window2X = 155;
let window3X = 250;

function setup() {
  createCanvas(1000, 500);
  frameRate(30); 
}

function draw() {
  background('#FFEBCD');
  rectX++;    // Move bus
  wheel1X++;
  wheel2X++;
  window1X++;
  window2X++;
  window3X++;

  if (rectX >= width) {
   // If you go off screen.
    rectX = 0;
    wheel1X = 40;
    wheel2X= 260;
    window1X = 60;
    window2X = 155;
    window3X = 250;
    
  }
  fill(255);
  rect(rectX, 200, 300, 120);
  
  fill(0);
  circle(wheel1X, 320, 40);
  circle(wheel2X, 320, 40);
  
  fill(0,0,255);  
  square(window1X, 220, 50, 10);
  square(window2X, 220, 50, 10);
  square(window3X, 220, 50);
  
}