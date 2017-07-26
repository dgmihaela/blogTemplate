(function($) {
    $(document).ready(function() {
       $.slidebars();
    });
 }) (jQuery);

$('.accordion--button').click(function() {
  $(this).parent().toggleClass('active');
  $(this).parent().find('.accordion--content').slideToggle();
});



$(document).ready(function() {
  	$('#demo').sidr();


	$('.img-zoom').hover(function() {
	    $(this).addClass('transition');

	}, function() {
	    $(this).removeClass('transition');
	});


});
