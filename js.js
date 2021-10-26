let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.strokeStyle = 'green';
ctx.moveTo(200, 50);
ctx.quadraticCurveTo(150, 0, 100, 50);

ctx.quadraticCurveTo(50, 150, 200, 180);
ctx.quadraticCurveTo(350, 150, 300, 50);
ctx.quadraticCurveTo(250, 0, 200, 50);
ctx.stroke();
ctx.fill();

ctx.moveTo(50, 50);
ctx.quadraticCurveTo(100, 100, 50, 150);
ctx.stroke();

canvas.onmousemove = function (event) {
  let x = event.offsetX;
  let y = event.offsetY;
  ctx.clearRect(0, 0, 400, 200);
  ctx.beginPath();
  ctx.moveTo(50, 50);
  ctx.quadraticCurveTo(x, y, 50, 150);
  ctx.stroke();
  ctx.closePath();
};
