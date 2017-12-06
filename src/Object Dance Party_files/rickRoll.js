var makeRickRoll = class makeRickRoll extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super();
    this.$node.addClass('rickRoll');
    this.$node.append('<img src="src/rick.png"></img>');
    super.setPosition(top, left);
  }

  step() {
    super.step();
    this.$node.toggle();
  }
};