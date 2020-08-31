var div1 = document.createElement('div');
div1.className = 'warp';
document.body.appendChild(div1);

var dragging = false;
var lastX, lastY;

div1.onmousedown = function (e) {
  dragging = true;
  lastX = e.clientX;
  lastY = e.clientY;
}

document.onmousemove = function (e) {
  if (dragging === true) {
    var detalX = e.clientX - lastX;
    var detalY = e.clientY - lastY;
    var top = parseInt(div1.style.top) || 0;
    var left = parseInt(div1.style.left) || 0
    div1.style.top = top + detalY + 'px';
    div1.style.left = left + detalX + 'px';
    lastX = e.clientX;
    lastY = e.clientY;
  }
}

div1.onmouseup = function (e) {
  dragging = false;
}
