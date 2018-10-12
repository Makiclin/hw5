function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //top right half
  for (var i = 20; i <= 200; i = i + 10) {
  var trstartX = 200;
  var trstartY = i;
  var trendX = 180+i;
  var trendY = i;
  line(trstartX, trstartY, trendX, trendY);
	}
  
  //top left half
  for (var i = 20; i <= 200; i = i + 10) {
  var tlstartX = 200-i+20;
  var tlstartY = i;
  var tlendX = 180+i;
  var tlendY = i;
  line(tlstartX, tlstartY, tlendX, tlendY);
	}
  
  //bottom left half
  for (var i = 20; i <= 200; i = i + 10) {
  var blstartX = i;
  var blstartY = 180 + i;
  var blendX = 200;
  var blendY = 180 + i;
  line(blstartX, blstartY, blendX, blendY);
	}
  
  //bottom right half
  for (var i = 20; i <= 200; i = i + 10) {
  var startX = 200;
  var startY = 180 + i;
  var endX = 400- i;
  var endY = 180 + i;
  line(startX, startY, endX, endY);
	}
  
//   for (var i = 20; i <= 380; i = i + 10) {
//   var startX = 200;
//   var startY = 20;
//   var endX = i
//   var endY = 380;
//   line(startX, startY, endX, endY);
// 	}
  
  
}
