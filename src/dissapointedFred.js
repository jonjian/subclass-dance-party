var dissapointedFred = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.addClass('fred');
  this.$node.append('<img src="src/fred.png"></img>');
};

dissapointedFred.prototype = Object.create(makeDancer.prototype);
dissapointedFred.prototype.constructor = dissapointedFred;

dissapointedFred.prototype.step = function () {
  this.$node.toggle();
};
