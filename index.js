Baic.ready(() => {
  "use strict";
  var page = new View();
  var one = Baic('.one');
  var two = Baic('.two');
  var three = Baic('.three');
  var bt = Baic('.bt');
  var isRun = false;
  
  function _run() {
    isRun = true;
    bt.addClass('disable');
    (new Baic.Animator({
      startValue: 0,
      endValue: 58.5 * 3 + 9.75 * Baic.random(0, 5),
      duration: 2000,
      easing: Baic.easing.cubicOut,
      onStep: function () {
        one.css('backgroundPositionY', this.value + 'rem');
      }
    })).start();

    (new Baic.Animator({
      startValue: 0,
      endValue: 58.5 * 3 + 9.75 * Baic.random(0, 5),
      duration: 3000,
      easing: Baic.easing.cubicOut,
      onStep: function () {
        two.css('backgroundPositionY', this.value + 'rem');
      }
    })).start();

    (new Baic.Animator({
      startValue: 0,
      endValue: 58.5 * 3 + 9.75 * Baic.random(0, 5),
      duration: 4000,
      easing: Baic.easing.cubicOut,
      onStep: function () {
        three.css('backgroundPositionY', this.value + 'rem');
      },
      onEnd: function () {
        isRun = false;
        bt.removeClass('disable');
      }
    })).start();
  }

  Baic('.bt').tap(function () {
    if(isRun){
      return;
    }
    _run();
  });
})