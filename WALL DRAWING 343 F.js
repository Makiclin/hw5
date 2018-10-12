function setup() {
  createCanvas(400, 400);
  background(220);
}



function draw() {
  background(220);
  
  for (var i = 1; i <= 240; i = i + 1) {
  
    
  var startX =100+i;
  var startY = 50;
  var endX = 50 + i;
  var endY = 350;
  line(startX, startY, endX, endY);
	}
  
  
  
  
}
