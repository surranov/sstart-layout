$(window).load(function() {
  pageLoadDuration();
});

function pageLoadDuration() {
  var time = performance.now(),
      timeSec = time / 1000,
      timeSecFixed = +timeSec.toFixed(5);

  console.group('Page Load Duration');
  console.info( timeSecFixed + ' sec' );
  console.groupEnd();
}