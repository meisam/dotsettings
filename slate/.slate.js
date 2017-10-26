// var hint = slate.operation("hint", {
//   "characters" : "QWERTYUIOP
// });
//
// slate.bind("1:f1", hint);


var pushRight = slate.operation("push", {
    "direction" : "right",
      "style" : "bar-resize:screenSizeX/3"
});
var pushLeft = slate.operation("push", {
    "direction" : "left",
      "style" : "bar-resize:screenSizeX/3"
});
var pushTop = slate.operation("push", {
    "direction" : "top",
      "style" : "bar-resize:screenSizeY/3"
});
var pushBottom = slate.operation("push", {
    "direction" : "bottom",
      "style" : "bar-resize:screenSizeY/3"
});

var pushTopRight = slate.operation("corner", {
    "direction" : "top-right",
      "width" : "screenSizeX/3",
      "height" : "screenSizeY/3"
});
var pushTopLeft = slate.operation("corner", {
    "direction" : "top-left",
      "width" : "screenSizeX/3",
      "height" : "screenSizeY/3"
});
var pushBottomRight = slate.operation("corner", {
    "direction" : "bottom-right",
      "width" : "screenSizeX/3",
      "height" : "screenSizeY/3"
});
var pushBottomLeft = slate.operation("corner", {
    "direction" : "bottom-left",
      "width" : "screenSizeX/3",
      "height" : "screenSizeY/3"
});

var splitRight = slate.operation("push", {
    "direction" : "right",
      "style" : "bar-resize:screenSizeX/2"
});
var splitLeft = slate.operation("push", {
    "direction" : "left",
      "style" : "bar-resize:screenSizeX/2"
});
var splitTop = slate.operation("push", {
    "direction" : "top",
      "style" : "bar-resize:screenSizeY/2"
});
var splitBottom = slate.operation("push", {
    "direction" : "bottom",
      "style" : "bar-resize:screenSizeY/2"
});

var splitTopRight = slate.operation("corner", {
    "direction" : "top-right",
      "width" : "screenSizeX/2",
      "height" : "screenSizeY/2"
});
var splitTopLeft = slate.operation("corner", {
    "direction" : "top-left",
      "width" : "screenSizeX/2",
      "height" : "screenSizeY/2"
});
var splitBottomRight = slate.operation("corner", {
    "direction" : "bottom-right",
      "width" : "screenSizeX/2",
      "height" : "screenSizeY/2"
});
var splitBottomLeft = slate.operation("corner", {
    "direction" : "bottom-left",
      "width" : "screenSizeX/2",
      "height" : "screenSizeY/2"
});

var fullscreen = slate.operation("move", {
    "x" : "screenOriginX",
      "y" : "screenOriginY",
        "width" : "screenSizeX",
          "height" : "screenSizeY"
});

var center = slate.operation("move", {
    "x" : "screenOriginX+screenSizeX/4",
      "y" : "screenOriginY+screenSizeY/4",
        "width" : "screenSizeX/2",
          "height" : "screenSizeY/2"
});

// Bind keys
slate.bind("u:space,alt", function(win) {
  win.doOperation(pushTop);
});

slate.bind("m:space,alt", function(win) {
  win.doOperation(pushBottom);
});

slate.bind("h:space,alt", function(win) {
  win.doOperation(pushLeft);
});

slate.bind("k:space,alt", function(win) {
  win.doOperation(pushRight);
});

slate.bind("y:space,alt", function(win) {
  win.doOperation(pushTopLeft);
});

slate.bind("i:space,alt", function(win) {
  win.doOperation(pushTopRight);
});

slate.bind("n:space,alt", function(win) {
  win.doOperation(pushBottomLeft);
});

slate.bind(",:space,alt", function(win) {
  win.doOperation(pushBottomRight);
});

// Bind keys
slate.bind("r:space,alt", function(win) {
  win.doOperation(splitTop);
});

slate.bind("v:space,alt", function(win) {
  win.doOperation(splitBottom);
});

slate.bind("d:space,alt", function(win) {
  win.doOperation(splitLeft);
});

slate.bind("g:space,alt", function(win) {
  win.doOperation(splitRight);
});

slate.bind("e:space,alt", function(win) {
  win.doOperation(splitTopLeft);
});

slate.bind("t:space,alt", function(win) {
  win.doOperation(splitTopRight);
});

slate.bind("c:space,alt", function(win) {
  win.doOperation(splitBottomLeft);
});

slate.bind("b:space,alt", function(win) {
  win.doOperation(splitBottomRight);
});

// bind keys
slate.bind("f:space,alt", function(win) {
  win.doOperation(fullscreen);
});

slate.bind("j:space,alt", function(win) {
  win.doOperation(center);
});



