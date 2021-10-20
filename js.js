let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
let pi = Math.PI;

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'yellow';
ctx.arc(150, 100, 75, 0, 2 * pi, false);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.strokeStyle = 'green';
ctx.fillStyle = 'pink';
ctx.arc(270, 100, 75, 0, 2 * pi, false);
ctx.stroke();
ctx.fill();

ctx.clearRect(0, 0, 400, 200);

canvas.onmousemove = function (event) {
  let x = event.offsetX;
  let y = event.offsetY;
  ctx.clearRect(0, 0, 400, 200);
  ctx.beginPath();
  let radius = Math.pow(Math.pow(x - 200, 2) + Math.pow(y - 100, 2), 0.5);
  ctx.arc(200, 100, Math.abs(x - 200), 0, 2 * pi, false);
  ctx.stroke();
  ctx.fill();
};
