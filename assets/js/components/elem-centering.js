var centringTargets = $('.js__centering'),
    centringTarget;

$(window).load(function() {
  for (var i = 0; i < centringTargets.length; i++) {
    centringTarget = centringTargets.eq(i);
    elemCentering(centringTarget);
  }
});
$(window).resize(function() {
  for (var i = 0; i < centringTargets.length; i++) {
    centringTarget = centringTargets.eq(i);
    elemCentering(centringTarget);
  }
});

function elemCentering(elem) {
  var element = elem,
      elementParent = element.parent(),
      elementTop,
      elementLeft;

  elementTop = ( elementParent.height() - element.height() ) / 2;
  elementLeft = ( elementParent.width() - element.width() ) / 2;

  elementParent.css('position', 'relative');
  element.css({
    'position': 'absolute',
    'top': elementTop,
    'left': elementLeft
  });
  element.animate({
    opacity: 1
  }, 400);
}