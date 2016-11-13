var verticalCenteringTargets = $('.js__vertical-centering'),
    verticalCenteringTarget;

$(window).load(function() {
  for (var i = 0; i < verticalCenteringTargets.length; i++) {
    verticalCenteringTarget = verticalCenteringTargets.eq(i);
    elemVerticalCentering(verticalCenteringTarget);
  }
});
$(window).resize(function() {
  for (var i = 0; i < verticalCenteringTargets.length; i++) {
    verticalCenteringTarget = verticalCenteringTargets.eq(i);
    elemVerticalCentering(verticalCenteringTarget);
  }
});

function elemVerticalCentering(elem) {
  var element = elem,
      elementParent = element.parent(),
      elementMargin;

  elementMargin = ( elementParent.height() - element.height() ) / 2;

  elementParent.css('overflow', 'auto');
  element.css('margin-top', elementMargin);
  element.animate({
    opacity: 1
  }, 400);
}