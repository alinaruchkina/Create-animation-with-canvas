let canvas = document.getElementById('c1');
let ctx = canvas.getContext('2d');
var myColor = 'red';
document.getElementById('color').oninput = function () {
  myColor = this.value;
};

let a;

canvas.onmousedown = function (event) {
  canvas.onmousemove = function (event) {
    let x = event.offsetX;
    let y = event.offsetY;
    ctx.fillRect(x - 5, y - 5, 10, 10);
    ctx.fillStyle = myColor;
    ctx.fill();
  };
  canvas.onmouseup = function () {
    canvas.onmousemove = null;
  };
};
