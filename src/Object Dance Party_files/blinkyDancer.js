var makeBlinkyDancer = class makeBlinkyDancer extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super();
    super.setPosition(top, left);
  }

  step() {
    super.step();
    this.$node.toggle();
  }
};