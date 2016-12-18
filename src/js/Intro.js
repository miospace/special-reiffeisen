var Intro = (function() {
  var btnStart = $('[data-btn=start]');
  var prev = $('.specraif__prev');
  var parent = $('.specraif');
  var prevActive = 'specraif--prev';

  return {
    init: function() {
      prev.show();
      parent.addClass(prevActive);

      btnStart.on('click', function(event) {
        event.preventDefault();
        $('.' + prevActive).removeClass(prevActive);
        prev.hide();
      });
    }
  };
})();
