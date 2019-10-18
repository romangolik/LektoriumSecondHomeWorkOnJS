var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var x = canvas.width/2;
var y = canvas.height-50;

var ballRadius = 16;

var dx = 2;
var dy = -2;

function drawBall(){
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fill();
	ctx.closePath();
}

function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();

	if(x > canvas.width - ballRadius || x - ballRadius < 0)
	{
		dx = -dx;
	}
	if(y > canvas.height - ballRadius || y - ballRadius < 0)
	{
		dy = -dy;
	}

	y += dy;
	x += dx;
}

setInterval(draw, 10);