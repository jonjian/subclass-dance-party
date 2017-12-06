var Dankify = class Dankify extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super();
    this.$node.addClass('Dankify');
    this.$node.append('<img src="src/snoop.gif"></img>');
    super.setPosition(top, left);
  }

  step() {
    this.$node.toggle();
  }
};
