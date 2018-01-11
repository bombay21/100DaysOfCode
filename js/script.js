// power button functions
$('#btn-on').click( function() {
  $('#led').removeClass('off-indicator');
  $('#led').addClass('on-indicator');
  $('#off').removeClass('bye');
  $('#off').removeClass('pre');
  $('#numbers').show();
  $('#off-state').hide();
});

$('#btn-off').click( function() {
  $('#led').removeClass('on-indicator');
  $('#led').addClass('off-indicator');
  $('#numbers').hide();
  $('#off-state').show();
  if ($('#off').hasClass('pre')) {
    return;
  } else {
    $('#off').show();
    setTimeout(function(){
      $('#off').addClass('bye');
    },2000);
  }

});

$('#btn-c').click(function() {
  $('#numbers').text('0');
});
