// Creates and returns a new dancer object that can step
var makeDancer = class makeDancer {
  
  constructor (top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.setPosition(top, left);
  }

  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
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
      'margin': 0,
      'top': '50%',
      'transform': '',
      'display': 'inline-block'
    });
  }
}; 

jQuery(function($) {
  $('.fred').mouseover(function() {
    var dWidth = $(document).width() - 100; // 100 = image width
    var dHeight = $(document).height() - 100;// 100 = image height
    var nextX = Math.floor(Math.random() * dWidth);
    var nextY = Math.floor(Math.random() * dHeight);
    $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
  });
});