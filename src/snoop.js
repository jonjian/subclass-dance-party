var Dankify = class Dankify extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('Dankify');
    this.$node.append('<img src="src/snoop.gif"></img>');
    this.top = top;
    this.left = left;
    this.identifier = 'Dankify';
  }

  step() {
    this.$node.toggle();
  }
};
