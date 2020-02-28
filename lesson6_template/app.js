// Declaring all variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// Width and height of canvas
var width = canvas.width;
var height = canvas.height;
// position and radius of player
var x = width/2;
var y = height/2;
var s = 50;
// Player speed in x-y directions
var dx = 0;
var dy = 0;

// Positions, size  of circle
var circleX ;
var circleY ;
var circleS = 50;

//Variable for the score
var score = 0;





// randomize circle position
function randCirclePos(){
	circleX = Math.random()*(width - circleS);
	circleY = Math.random()*(height - circleS);

}




// Import images onto canvas
function drawPacman(){
	var player = new Image();
	player.src = "pacman.png";
	//(image, xCoor, yCoor, width, height)
	ctx.drawImage(player, x,y, s,s);

}


function drawCircle(){
	var circle = new Image();
	circle.src = "circle.png";
	//(image, xCoor, yCoor, width, height)
	ctx.drawImage(circle, circleX,circleY, circleS,circleS);
}


function updatePlayer(){
	// Make player bounce off the walls and go in the opposite direction
	if (x + dx > width - s || x + dx < 0){
		dx = -dx;
	} else if (y + dy > width - s || y + dy < 0) {
		dy = -dy;
	}

	// Moves our player
	x += dx;  
	y += dy;
}





// Wiping canvas
function clear () {
	ctx.clearRect(0, 0, width, height);
}





//Function to handle the keypresses
function keydownHandler(e){

	// Change the direction depending on which button is pressed
	// up arrow
	if (e.keyCode == 38){
		dy = -4;
		dx = 0;
	}
	//down arrow
	if (e.keyCode == 40){
		dy = 4;
		dx = 0;
	}
	//left arrow
	if (e.keyCode == 37){
		dx = -4;
		dy = 0;
	}
	//right arrow
	if (e.keyCode == 39){
		dx = 4;
		dy = 0;
	}
}

// Initialise our animation
function init() {
	// Put circle in random position	
	randCirclePos();
	// Wait for user to press keyboard 
	window.onkeydown=keydownHandler;
}

// Repeated draw function
function draw() {
	clear();	

	//update player position
	updatePlayer();

	//draw images
	drawPacman();
	drawCircle();

	// Check for collisions
	if (checkCollusion(circleX,circleY,circleS)){
		circleCollusionHandle();
	}

}


//Function to check for collisions
function checkCollusion(objX,objY,objS){
	var result = (x+s>= objX) && (x <=objX+objS) && (y+s>= objY) && (y <=objY+objS);
	return result;
}

//Function to handle the collision
function circleCollusionHandle(){
	randCirclePos();
	score += 1;
	document.getElementById("score").innerHTML =score;
}





init();
setInterval(draw, 10);