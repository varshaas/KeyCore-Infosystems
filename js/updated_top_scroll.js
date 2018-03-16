$(window).scroll(function(){
	var top = $(this).scrollTop();
	//
	if(top >=520){
		$('.item-block-2').addClass('fadeInDown');
	}
	
	// This is then function used to detect if the element is scrolled into view
	function elementScrolled(elem)
	{
		var docViewTop = $(window).scrollTop();
		var docViewBottom = docViewTop + $(window).height();
		var elemTop = $(elem).offset().top;
		return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
	}

	if(elementScrolled('.item-block-3')) {
		var els = $('.item-block-3 '),
		i = 0,
		f = function () {
			$(els[i++]).addClass('fadeInDown');
			if(i < els.length) setTimeout(f, 400);
		};
		f();
	}

	if(elementScrolled('.item-block-4')) {
		var els = $('.item-block-4 '),
		i = 0,
		f = function () {
			$(els[i++]).addClass('fadeInDown');
			if(i < els.length) setTimeout(f, 400);
		};
		f();
	}

	if(elementScrolled('.new-letter-wrap')) {
		var els = $('.new-letter-wrap '),
		i = 0,
		f = function () {
			$(els[i++]).addClass('fadeInDown');
			if(i < els.length) setTimeout(f, 400);
		};
		f();
	}

	if(elementScrolled('.story-sec')) {
		var els = $('.story-sec '),
		i = 0,
		f = function () {
			$(els[i++]).addClass('fadeInDown');
			if(i < els.length) setTimeout(f, 400);
		};
		f();
	}

	if(elementScrolled('.trend-video-wrap')) {
		var els = $('.trend-video-wrap '),
		i = 0,
		f = function () {
			$(els[i++]).addClass('fadeInDown');
			if(i < els.length) setTimeout(f, 400);
		};
		f();
	}
});