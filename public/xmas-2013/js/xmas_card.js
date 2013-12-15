$(document).ready(function() {
  var can = document.getElementById("xmas-card");
  var dad = document.getElementById("dad");
  var kayla = document.getElementById("kayla");
  var lindsey = document.getElementById("lindsey");
  var mom = document.getElementById("mom");
  var ctx = can.getContext("2d");
  var scaleFactor = backingScale(ctx);

  if (scaleFactor > 1) {
    can.width = can.width * scaleFactor;
    can.height = can.height * scaleFactor;
    // update the context for the new canvas scale
    var ctx = can.getContext("2d");
  }

  ctx.drawImage(dad, 5, 170);
  ctx.drawImage(kayla, 105, 250);
  ctx.drawImage(lindsey, 275, 252);
  ctx.drawImage(mom, 355, 165);

  ctx.save();
  ctx.rotate(Math.PI);
  ctx.restore();
});

function backingScale(context) {
  if ('devicePixelRatio' in window) {
    if (window.devicePixelRatio > 1) {
      return window.devicePixelRatio;
    }
  }
  return 1;
}
