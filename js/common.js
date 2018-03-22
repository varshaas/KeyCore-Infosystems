$(document).ready(function(){
        $("img").unveil();

        $('.banner-slides').slick({       
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
        });

        $('.testimonial-slider').slick({       
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });

        $('.hamburger').click(function(){
            $(this).hide();
            $('.cross').show();
            $('.navigation-ul').slideDown();
        });
        $('.cross').click(function(){
            $(this).hide();
            $('.hamburger').show();
            $('.navigation-ul').slideUp();
        });

        var cachedWidth = $(window).width();
        $(window).resize(function(){
            var newWidth = $(window).width();
            if(newWidth !== cachedWidth){
                if (window.innerWidth <= 1024) {
                    $(".navigation-ul").hide();
                    $(".hamburger").show(5000);
                    $(".cross").hide(5000);
                }else{
                    if ($( ".navigation-ul" ).css('display','none')) {
                        $(".navigation-ul").show(5000);
                    }
                    if ($( ".hamburger" ).css('display','block')) {
                        $(".hamburger").hide(5000);
                    }
                }
                cachedWidth = newWidth;   
            }
        });

        // Add smooth scrolling to all links
        $('.navigation-scroll').on('click', function (e) {
            // e.preventDefault();
            var target = this.hash,
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top-0
            }, 900, 'swing', function () {
            });
            return false;
        });

        $(window).scroll(function(){
            var stickyhead = $('.navigation');
            var stickylogo = $('.logo'); 
            var stickylogoanc = $('.logo-anc');
            if ($(window).scrollTop() >= 100) {
                stickyhead.addClass('sticky-navbar') ;
                stickylogoanc.addClass('sticky-logo-anc');
            }
            else {
                stickyhead.removeClass('sticky-navbar');
                stickylogoanc.removeClass('sticky-logo-anc');
            }
            if ($(window).scrollTop() >= 10) {stickylogo.addClass('sticky-logo');}
            else {stickylogo.removeClass('sticky-logo');}
            // This is then function used to detect if the element is scrolled into view
            function elementScrolled(elem)
            {
                var docViewTop = $(window).scrollTop();
                var docViewBottom = docViewTop + $(window).height();
                var elemTop = $(elem).offset().top;
                return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
            }
            if(elementScrolled('.services-outerDiv')) {
                $('.services-outerDiv .animated').addClass('fadeInDown');      
            }
            if(elementScrolled('.testimonial-div')) {
                $('.testimonial-div .animated').addClass('fadeInDown');      
            }
            if(elementScrolled('.blog')) {
                $('.blog .animated').addClass('fadeInDown');      
            }
            if(elementScrolled('.contactUs-outerDiv')) {
                $('.contactUs-outerDiv .animated').addClass('fadeInDown');      
            }
        });      
    });