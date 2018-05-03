// custom script
(function($) {	
	$.fn.Accordion = function() {		
	var accItem = $('.accordion .accordion-at');
	$(accItem).on('click', '.icon', function() {
		if($(this).parents('.accordion-at').hasClass('active')){
			$(this).parents('.accordion-at').removeClass('active');
		} else {
			$(this).parents('.accordion-at').addClass('active');
			$(this).parents('.accordion-at').siblings().removeClass('active');
		}
	});
}

}(jQuery));
$( document ).ready(function() {
	$.getJSON( 'faqs.json', function( data ) {
		var items = [];
		$.each( data.faqs, function( key, val ) {
		items.push( '<dl class=\'accordion-at\'><dt><span>' + val.question + '<span><span class=\'icon\'></span></dt><dd><p>' + val.answer + '</p></dd></dl>' );
		});	 
		$( '<div/>', {
		'class': 'accordion',
		html: items.join( "" )
		}).appendTo( 'body');
	}).done(function(){				
		$('.accordion').Accordion();
	});
});