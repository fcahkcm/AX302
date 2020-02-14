var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//width and height of canvas
var width = canvas.width;
var height = canvas.height;



class Ball{
	constructor(x,y,dx,dy,ballColor) {
	    this.x = x;
	    this.y = y;
		this.dx = dx;
	    this.dy = dy;
	    this.ballColor=ballColor;
	}

	start(){
		//draw circle
		function circle(x,y,r){
			ctx.beginPath();
			ctx.arc(x,y,r,0, 6.28);
			ctx.closePath();
			ctx.stroke();
			//console.log(this);
			ctx.fillStyle = this.ballColor;

			ctx.fill();
		}
		//clear trail
		function clear(){
			ctx.clearRect(0,0,width,height);
		}

		//check boundary
		function checkBoundary(){

			if(this.x+this.dx <0 || this.x+this.dx>width){
				this.dx = -this.dx;
			}
			if(this.y+this.dy <0 || this.y+this.dy>height){
				this.dy = -this.dy;
			}
		}


		//update frames
		function draw(){
			clear();
			console.log(this.x,this.y);
			circle(this.x,this.y,30);

			//preparation for next frame

			checkBoundary();
			//update circle location
			this.x += this.dx;
			this.y += this.dy;
			
			
		}

		setInterval(draw,10);
	}
}








var ball1=new Ball(width/2,height/2,3,5,"red");
ball1.start();
//startBall(width/2,height/2,-3,-5,"blue");




