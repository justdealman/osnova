$(document).ready(function() {
	if ( $('.introduction').length > 0 ) {
		$('.introduction').css({
			'background': 'url("'+$('.introduction').find('img').attr('src')+'") no-repeat center center',
			'-webkit-background-size': 'cover',
			'-moz-background-size': 'cover',
			'-o-background-size': 'cover',
			'background-size': 'cover'
		});
	}
	if ( $('.news-b').length > 0 ) {
		$('.news-b div .picture').each(function() {
			$(this).parent().addClass('imaged');
		});
	}
	$('.subs-open').bind('click', function(event) {
		event.preventDefault();
		$('.subscribe').stop().fadeIn(200);
	});
	$('.subscribe .close').bind('click', function(event) {
		event.preventDefault();
		$(this).parent().stop().fadeOut(200);
	});
	$('.reviews-i .prev').bind('click', function(event) {
		event.preventDefault();
		$('.reviews-i .next').removeClass('disabled');
		var t = $(this).parents('.reviews-i').children('div');
		if ( t.find('.active').index()+1 > 1 ) {
			t.find('.active').removeClass().prev('ul').addClass('active');
		}
		if ( t.find('.active').index()+1 < 2 ) {
			$('.reviews-i .prev').addClass('disabled');
		}
	});
	$('.reviews-i .next').bind('click', function(event) {
		event.preventDefault();
		$('.reviews-i .prev').removeClass('disabled');
		var t = $(this).parents('.reviews-i').children('div');
		if ( t.find('.active').index()+1 < t.find('ul').size() ) {
			t.find('.active').removeClass().next('ul').addClass('active');
		}
		if ( t.find('.active').index()+1 >= t.find('ul').size() ) {
			$('.reviews-i .next').addClass('disabled');
		}
	});
	$('input, textarea').each(function() {
		$(this).data('holder', $(this).attr('placeholder'));
		$(this).focusin(function() {
			$(this).attr('placeholder', '');
		});
		$(this).focusout(function() {
			$(this).attr('placeholder', $(this).data('holder'));
		});
	});
});
$(window).load(function() {
	if ( $('.intro-s').length > 0 ) {
		$('.intro-s ul li div').each(function() {
			var h = $(this).outerHeight();
			if ( h < 106 ) {
				$(this).css({
					'margin-top': (106-h)/2+'px'
				});
			}
			$(this).css({
				'opacity': '1'
			});
		});
	}
});