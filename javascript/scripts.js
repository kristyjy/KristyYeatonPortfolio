$(document).ready(function(){

	// Mobile menu toggle //
	$('.menu-button').click(function(){
		$(this).toggleClass('open');

		$('.main-menu').toggleClass('open');
		$('.main-menu').slideToggle();
	});

});

var canvas1 = document.getElementById('canvas1'),
		ctx1 = canvas1.getContext('2d'),
		dots1 = [],
		canvas2 = document.getElementById('canvas2'),
		ctx2 = canvas2.getContext('2d'),
		dots2 = [];

function init(canvas, ctx, dots) {
	adjustCanvasSize(canvas);
	createInitialDots(dots);
	drawAllDots(dots, ctx);
	animate(dots, ctx, canvas);
}

document.addEventListener("resize", function(){
	adjustCanvasSize(canvas1);
	adjustCanvasSize(canvas2);
});

function adjustCanvasSize(canvas) {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}

function createInitialDots(dots) {
	var colors = [
		'255, 86, 124',
		'153, 225, 217',
		'255, 255, 255'
	];

	for (i = 0; i < 80; i++) {
		dots.push({
			radius    : getRandomNum(8, 30),
      posX      : getRandomNum(0, window.innerWidth),
      posY      : getRandomNum(0, window.innerHeight),
      xVelocity : getRandomNum(.001, .5),
      yVelocity : getRandomNum(.001, .5),
      color     : 'rgba(' + colors[Math.floor(getRandomNum(0,3))] + ',' + getRandomNum(.2, .8) + ')'
		});
	}
}

function drawDot(dot, ctx) {
	ctx.fillStyle =  dot.color;
	ctx.beginPath();
	ctx.arc(dot.posX, dot.posY, dot.radius, 0, 2 * Math.PI, false);
	ctx.fill();
}

function drawAllDots(dots, ctx) {
	for (i = 0; i < dots.length; i++) {
		drawDot(dots[i], ctx);
	}
}

function resetDot(canvas, dots, ctx, i) {
  var random = getRandomNum(0, 1);

  if (random > .5) {
    dots[i].posX = -dots[i].radius;
    dots[i].posY = getRandomNum(0, canvas.height);
  } else {
    dots[i].posX = getRandomNum(0, canvas.width);
    dots[i].posY = canvas.height + dots[i].radius;
  }
  drawDot(dots[i], ctx);
}

function resetView(ctx, canvas) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function animate(dots, ctx, canvas) {
	setInterval(function(){
		resetView(ctx, canvas);

		for (var i = 0; i < dots.length; i++) {
			dots[i].posX += dots[i].xVelocity;
			dots[i].posY -= dots[i].yVelocity;

			if (dots[i].posX > canvas.width + dots[i].radius || dots[i].posY > canvas.height + dots[i].radius) {
				resetDot(canvas, dots, ctx, i);
			} else {
				drawDot(dots[i], ctx);
			}
		}
	}, 15);
}

init(canvas1, ctx1, dots1);
init(canvas2, ctx2, dots2);
