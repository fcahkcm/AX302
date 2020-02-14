var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.lineTo(400,10);
ctx.lineTo(300,500);

ctx.fillStyle="red";
ctx.fillRect(300,300,100,200);


ctx.lineWidth =5;
ctx.strokeStyle="blue";

ctx.stroke();

console.log("hi");


