var makeCarlton = class makeCarlton extends makeDancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('makeCarlton');
    this.$node.append('<img src="src/carlton.gif"></img>');
    this.top = top;
    this.left = left;
    this.identifier = 'makeCarlton';
  }

  step() { 
    this.$node.toggle();
  }
};
