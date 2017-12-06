var makeRickRoll = class makeRickRoll extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('rickRoll');
    this.$node.append('<img src="src/rick.png"></img>');
  }

  step() {
    super.step();
    this.$node.toggle();
  }
};