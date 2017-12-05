// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class = "dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);
};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
makeDancer.prototype.lineup = function(i) {
  var node = this.$node[0];
  $(node).css({
    'margin': '0',
    'top': '50%',
    'transform': '',
    'display': 'inline-block'
  });
};