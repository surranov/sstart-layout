var elements = $('.box-bg'),
    elementsLength = elements.length;

$( window ).load(function() {
  for (var i = 0; i < elementsLength; i++) {
    boxBgAlignment( elements.eq(i) );
  }
});

$( window ).resize(function() {
  for (var i = 0; i < elementsLength; i++) {
    boxBgAlignment( elements.eq(i) );
  }
});

function boxBgAlignment(elem) {
  var parent,
      img = elem.find('.box-bg__img'),
      topMargin,
      leftMargin,
      parentRatio,
      elemRatio;

  if ( elem.parent().hasClass('box-bg__wrap') ) {
    parent = elem.parent().parent();
  } else {
    parent = elem.parent();
  }

  parentRatio = parent.width() / parent.height();
  imgRatio = img.width() / img.height();


  if ( !elem.parent().hasClass('box-bg__wrap') ) {
    $(".box-bg").wrap("<div class='box-bg__wrap'></div>");
  }
  $(".box-bg__wrap").css({
    'position': 'relative',
    'width': parent.width(),
    'height': parent.height()
  });

  if (parentRatio > imgRatio) {

    img.css({
      'width': parent.width(),
      'height': 'auto'
    });
    topMargin = ( parent.height() - img.height() ) / 2;
    img.css({
      'margin-top': topMargin,
      'margin-left': 'auto'
    });
    img.animate({
      opacity: 1
    }, 400);

  } else {

    img.css({
      'width': 'auto',
      'height': parent.height()
    });
    leftMargin = ( parent.width() - img.width() ) / 2;
    img.css({
      'margin-top': 'auto',
      'margin-left': leftMargin
    });
    img.animate({
      opacity: 1
    }, 400);

  }
}