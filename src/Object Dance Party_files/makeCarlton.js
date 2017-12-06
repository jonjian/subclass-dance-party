var makeCarlton = class makeCarlton extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super();
    this.$node.addClass('makeCarlton');
    this.$node.append('<img src="src/carlton.gif"></img>');
    super.setPosition(top, left);
  }

  step() {
    this.$node.toggle();
  }
};
