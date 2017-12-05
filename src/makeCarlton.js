var makeCarlton = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.addClass('makeCarlton');
  this.$node.append('<img src="src/carlton.gif"></img>');
};

makeCarlton.prototype = Object.create(makeDancer.prototype);
makeCarlton.prototype.constructor = makeCarlton;

makeCarlton.prototype.step = function () {
  this.$node.toggle();
};
