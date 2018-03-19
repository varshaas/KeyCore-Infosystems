$(document).ready(function(){
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

        $("img").unveil();

        var cachedWidth = $(window).width();
        $(window).resize(function(){
            var newWidth = $(window).width();
            if(newWidth !== cachedWidth){
                if (window.innerWidth <= 1024) {
                    $(".navigation-ul").hide();
                    $(".hamburger").show();
                    $(".cross").hide();
                }else{
                    if ($( ".navigation-ul" ).css('display','none')) {
                        $(".navigation-ul").show();
                    }
                    if ($( ".hamburger" ).css('display','block')) {
                        $(".hamburger").hide();
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
                'scrollTop': $target.offset().top-200
            }, 900, 'swing', function () {
            });
            return false;
        });

        $(window).scroll(function(){
            var stickyhead = $('.navigation');
            var stickylogo = $('.logo'); 
            if ($(window).scrollTop() >= 100) stickyhead.addClass('sticky-navbar');
            else stickyhead.removeClass('sticky-navbar');
            if ($(window).scrollTop() >= 10) stickylogo.addClass('sticky-logo');
            else stickylogo.removeClass('sticky-logo');
            // This is then function used to detect if the element is scrolled into view
            function elementScrolled(elem)
            {
                var docViewTop = $(window).scrollTop();
                var docViewBottom = docViewTop + $(window).height();
                var elemTop = $(elem).offset().top;
                return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
            }
            if(elementScrolled('.services-outerDiv')) {
                $('.services-outerDiv').addClass('scroll_animate');      
            }
            if(elementScrolled('.testimonial-div')) {
                $('.testimonial-div').addClass('scroll_animate');      
            }
            if(elementScrolled('.blog')) {
                $('.blog').addClass('scroll_animate');      
            }
            if(elementScrolled('.contactUs-outerDiv')) {
                $('.contactUs-outerDiv').addClass('scroll_animate');      
            }
        });      
    });