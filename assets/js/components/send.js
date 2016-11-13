$("#form").submit(function(event) {
  event.preventDefault();

  var wrap    = $(this).parent(),
      email   = wrap.find('input[name = email]'),
      name    = wrap.find('input[name = name]'),
      phone   = wrap.find('input[name = phone]');

  //email input validation

  if($(email).val() != '') {
    var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
    if(pattern.test($(email).val())){
      $(email).css({'border' : '1px solid rgb(238, 238, 238)'});
    } else {
      $(email).css({'border' : '1px solid #da1414'});
      event.preventDefault();
    }
  } else {
    $(email).css({'border' : '1px solid #da1414'});
    event.preventDefault();
  }

  //name input validation

  if (name.val() == '') {
    $(name).css({'border' : '1px solid #da1414'});
    event.preventDefault();
  } else {
    $(name).css({'border' : '1px solid rgb(238, 238, 238)'});
  }

  //send

  if( pattern.test( $(email).val() ) && name.val() != '' ) {
    $.ajax({
      type: "POST",
      url: "send.php",
      data: $(this).serialize()
    }).done(function() {
      $("#form").animate({
        opacity: 0
      }, 300);
      setTimeout(function() {
        $(".form-output").animate({
          top: 10,
          opacity: 1
        }, 300);
      }, 200);
    });
    return false;
  }

});