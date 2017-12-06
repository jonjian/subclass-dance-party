var dissapointedFred = class dissapointedFred extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super();
    this.$node.addClass('fred');
    this.$node.append('<img src="src/fred.png"></img>');
    super.setPosition(top, left);
  }

  step() {
    this.$node.toggle();
  }
};
