//It targets things inside the body
$( document ).ready(function() {


$('.accordionBlock a').on('click', function() {
  $(this).parent().children('div').toggle();
});

    });
