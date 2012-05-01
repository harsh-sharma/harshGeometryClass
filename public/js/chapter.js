$(document).ready(function(){
	$("p.rectangle").hide();
	$("p.circle").hide();
  $("button.circle").click(function(){
	$("p.rectangle").slideUp();
	$("p.circle").slideDown();
  });
  $("button.rectangle").click(function(){
	$("p.circle").slideUp();
	$("p.rectangle").slideDown();
  });
  
  $("button#rectCalc").click(function(){
	var width = document.getElementById("width").value;
	var height = document.getElementById("height").value;
	if(width=="" || height==""){
		alert("Please enter values");
	}else if(width>50){
		alert("max height for best diagram is 40.");
	}else if(height>40){
		alert("max height for best diagram is 40.");
	}else{
		document.getElementById("rectangleArea").innerHTML = width * height;
		document.getElementById("rectanglePerimeter").innerHTML = (2*width + 2*height);
		drawRectangle(width*10, height*10);
	}
  });
  $("button#circleCalc").click(function(){
	var radius = document.getElementById("radius").value;
	if(radius==""){
		alert("Please enter values");
	}else if(radius>100){
		alert("max radius for best diagram is 100.");
	}else{
		document.getElementById("circleArea").innerHTML = 3.14 * radius * radius;
		document.getElementById("circleCircumference").innerHTML = (2 * 3.14 * radius);
		drawCircle(radius*2);
	}
  });
});
simpleCanvas();
function simpleCanvas(){
	var myCanv = document.getElementById('myCanv');
	cntxt = myCanv.getContext('2d');
}

window.onload = function(){		    
	draw();
};
function draw() {  
	cntxt.globalCompositeOperation = 'source-over';  

	// clear canvas  
	cntxt.clearRect(0,0,440,400);  
	
	//drawLines
	drawLines();
	
	//drawCircle
	var radius = 150;
	//Create a new path
	cntxt.beginPath();
	//cntxt.arc(x, y, radius, sAngle, eAngle, aClockwise);
	cntxt.arc(250, 200, radius, 0, 2 * Math.PI, false);
 
	//cntxt.restore(); // restore to original state
	cntxt.fillStyle = "#999999";
	cntxt.fill();
	cntxt.lineWidth = 2;
	cntxt.strokeStyle = "black";
	cntxt.stroke();

	//drawRectangle
	var width = 100;
	var height = 380;
	//Create a new path
	cntxt.beginPath();
	//cntxt.arc(x, y, width, height);
	cntxt.rect(0, 0, width, height);
 
	//cntxt.restore(); // restore to original state
	cntxt.fillStyle = "#999999";
	cntxt.fill();
	cntxt.lineWidth = 2;
	cntxt.strokeStyle = "black";
	cntxt.stroke();		
}

function drawLines(){
	//Vertical lines
	for (var x = 0.5; x < 600; x +=20) {
	  cntxt.moveTo(x, 0);
	  cntxt.lineTo(x, 400);
	}
	
	//Horizonatal lines
	for (var y = 0.5; y < 400; y += 20) {
	  cntxt.moveTo(0, y);
	  cntxt.lineTo(600, y);
	}
	
	//Draw in the lines
	cntxt.strokeStyle = "#c0c0c0";
	cntxt.stroke();
}

function drawRectangle(width, height){					
	// clear canvas  
	cntxt.clearRect(0,0,440,400);  
	
	//drawLines
	drawLines();
	
	//Create a new path
	cntxt.beginPath();
	//cntxt.arc(x, y, width, height);
	cntxt.rect(0, 0, width, height);
 
	//cntxt.restore(); // restore to original state
	cntxt.fillStyle = "#999999";
	cntxt.fill();
	cntxt.lineWidth = 2;
	cntxt.strokeStyle = "black";
	cntxt.stroke();					
}

function drawCircle(radius){
	// clear canvas  
	cntxt.clearRect(0,0,500,400);  
	
	//drawLines
	drawLines();
	
	//Create a new path
	cntxt.beginPath();
	//cntxt.arc(x, y, radius, sAngle, eAngle, aClockwise);
	cntxt.arc(220, 200, radius, 0, 2 * Math.PI, false);
 
	//cntxt.restore(); // restore to original state
	cntxt.fillStyle = "#999999";
	cntxt.fill();
	cntxt.lineWidth = 2;
	cntxt.strokeStyle = "black";
	cntxt.stroke();
}