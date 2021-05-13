var offset = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  var x = 0;
  while (x <= width)
  {
  ellipse(x, 200, 25, 25);
  x = x + 50;
  
  
  }
  
  for (var x = 0; x < width; x = x +50){
    fill(random(255));
    ellipse(x + offset, 200, 25, 25);
  x = x + 50;
  
  }
  
  offset = offset + 1;
}