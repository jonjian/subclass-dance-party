// Creates and returns a new dancer object that can step
var makeDancer = class makeDancer {
  
  constructor (top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition(top, left);
  }

  step() {
    setTimeout(() => this.step(), this.timeBetweenSteps);
  }

  setPosition(top, left) {
    var styleSettings = {
      'top': top,
      'left': left
    };
    this.$node.css(styleSettings);
  }
 

  lineup(i) {
    var node = this.$node[0];
    var distanceApart = ($(window).width()) / i;
    $(node).css({
      'position': 'absolute',
      'margin': 0,
      'top': '50%',
      'transform': '',
      'display': 'inline-block'
    });
  }
}; 
