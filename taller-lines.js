function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  for (var i = 20; i <= 380; i = i + 4) {
  
  var h = i +100;
    
  var startX = i;
  var startY = 20;
  var endX = i;
  var endY = h;
  line(startX, startY, endX, endY);
	}
  
  
}
