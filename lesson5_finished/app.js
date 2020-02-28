var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//width and height of canvas
var width = canvas.width;
var height = canvas.height;

//ball x-y coordinates 
//and magnitude of movement
var x,y;
var mx, my; 

//initialize animation
function init(){
	x = width/2;
	y = height/2;
	mx = 3;
	my = 6;

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

//draw frames
function draw(){
	clear();
	circle(x,y,30);

	if(x+mx <0 || x+mx>width){
		mx = -mx;
	}
	if(y+my <0 || y+my>height){
		my = -my;
	}

	x += mx;
	y += my;
}

init();
setInterval(draw,10);

