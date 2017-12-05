var makeRickRoll = function(top, left, timeBetweenSteps) {
  this.oldStep = makeDancer.prototype.step;
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.addClass('rickRoll');
  this.$node.append('<img src="src/rick.png"></img>');
};

makeRickRoll.prototype = Object.create(makeDancer.prototype);
makeRickRoll.prototype.constructor = makeRickRoll;

makeRickRoll.prototype.step = function () {
  this.oldStep();
  this.$node.toggle();
};