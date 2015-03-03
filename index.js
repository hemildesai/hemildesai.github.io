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

$("#abme1").click(function() {
  $('.aboutme.modal')
  .modal('show')
  ;
});

// setInterval(changeSides, 3000);

})
;
