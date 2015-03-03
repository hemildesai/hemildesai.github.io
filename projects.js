$(document)
.ready(function() {

  $('.ui.dropdown')
  .dropdown({
    on: 'hover'
  })
  ;

  $('.information')
  .transition('scale in', 1000)
  ;

  $("#abme").click(function() {
    $('.aboutme.modal')
    .modal('show')
    ;
  });
  //
  $("#abme1").click(function() {
    $('.aboutme.modal')
    .modal('show')
    ;
  });

  $(".mhacks").click(function() {
    $('.connections.modal')
    .modal('show')
    ;
  });

  $(".hackmit").click(function() {
    $('.parse.modal')
    .modal('show')
    ;
  });

  $(".safewalk").click(function() {
    $('.swalk.modal')
    .modal('show')
    ;
  });

  $(".otherp").click(function() {
    $('.other.modal')
    .modal('show')
    ;
  });

  // setInterval(changeSides, 3000);

})
;
