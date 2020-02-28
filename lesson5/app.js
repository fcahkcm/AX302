var c = document.getElementById('myCanvas');
var ctx = c.getContext("2d");

var width=c.width;
var height=c.height;


var x,y;
var dx,dy;


function init(){
	x=width/2;
	y=height/2;

	dx=3;
	dy=5;
}



function drawCircle(x,y,r,color){
	ctx.beginPath();
	// pi radian <-> 180 degree    2pi radian <-> 360 degree
	ctx.arc( x , y , r , 0 , 2 * Math.PI );
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle=color;
	ctx.fill();
}

function clear(){
	ctx.clearRect(0,0,width,height);
}


function update(){
	// 1. clear all the things inside the canvas
	clear();
	// 2. draw a new circle
	drawCircle(x,y,10,"red");
	// 3. check boundary (if the circle hits the boundary, bounces back)
	if ( x+dx < 0 || x+dx > width){
		dx = dx * -1;
	}

	if ( y+dy < 0 || y+dy > height){
		dy = dy * -1;
	}



	// 4. update the location of the circle
	x=x+dx;
	y=y+dy;
}

init();
setInterval(update,10);

//drawCircle(width/2,height/2,20,"blue");