var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//width and height of canvas
var width = canvas.width;
var height = canvas.height;

//ball x-y coordinates 
//and magnitude of movement
var x,y;
var dx, dy; 

//initialize animation
function init(){
	x = width/2;
	y = height/2;
	dx = 3;
	dy = 6;
}
//draw circle
function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0, 6.28);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "red";
	ctx.fill();
}
//clear trail
function clear(){
	ctx.clearRect(0,0,width,height);
}

//check boundary
function checkBoundary(){

	if(x+dx <0 || x+dx>width){
		dx = -dx;
	}
	if(y+dy <0 || y+dy>height){
		dy = -dy;
	}
}


//update frames
function draw(){
	clear();
	circle(x,y,30);

	//preparation for next frame

	checkBoundary();
	//update circle location
	x += dx;
	y += dy;
	
	
}

init();
setInterval(draw,10);

