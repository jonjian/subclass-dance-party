var dissapointedFred = class dissapointedFred extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('fred');
    this.$node.append('<img src="src/fred.png"></img>');
  }

  step() {
    this.$node.toggle();
  }
};
