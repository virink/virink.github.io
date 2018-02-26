var can;
function hackrain( cid=0, timeout=50 ){
  if (window.jQuery == "undefined"){
    return 1;
  }
  var canvas;
  if (cid)
    canvas = document.getElementById(cid)
  else{
    var canvas = document.createElement("canvas");
    canvas.style.position="fixed";
    canvas.style.zIndex=-999;
    canvas.style.top=0;
    canvas.style.left=0;
    document.body.prepend(canvas)
  }
  can = canvas.getContext("2d");
  s = window.screen;
  w = canvas.width = s.width;
  h = canvas.height = s.height;
  words = Array(256).join("1").split("");
  can.fillStyle = color();
  setInterval(draw, timeout);
}

function draw() {
  can.fillStyle = 'rgba(0,0,0,0.05)';
  can.fillRect(0, 0, w, h);
  can.fillStyle = color();
  words.map(function(y, n) {
    text = String.fromCharCode(Math.ceil(65 + Math.random() * 57));
    x = n * 10;
    can.fillText(text, x, y)
    words[n] = (y > 758 + Math.random() * 484 ? 0 : y + 10);
  });
}

function color() {
  return "#" + (function(color) {
    return new Array(7 - color.length).join("0") + color;
  })((Math.random() * 0x1000000 << 0).toString(16))
}
