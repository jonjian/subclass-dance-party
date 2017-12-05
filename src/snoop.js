var Dankify = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.addClass('Dankify');
  this.$node.append('<img src="src/snoop.gif"></img>');
};

Dankify.prototype = Object.create(makeDancer.prototype);
Dankify.prototype.constructor = Dankify;

Dankify.prototype.step = function () {
  this.$node.toggle();
};
