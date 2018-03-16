var stickyhead = $('.navigation');
var stickylogo = $('.logo');
var servicesDiv = $('.services-outerDiv');
var testimonialDiv = $('.testimonial-div');
var blogDiv = $('.blog');
var contactusDiv = $('.contactUs-outerDiv');
// scroll = $(window).scrollTop();

$(window).scroll(function () {
    if ($(window).scrollTop() >= 90) stickyhead.addClass('sticky-navbar');
    else stickyhead.removeClass('sticky-navbar');
});
$(window).scroll(function () {
    if ($(window).scrollTop() >= 30) stickylogo.addClass('sticky-logo');
    else stickylogo.removeClass('sticky-logo');
});
$(window).scroll(function () {
    if($(window).scrollTop() > 20) servicesDiv.addClass("scroll_animate");
    else servicesDiv.removeClass("scroll_animate");
});
$(window).scroll(function () {
    if($(window).scrollTop() > 300) testimonialDiv.addClass("scroll_animate");
    else testimonialDiv.removeClass("scroll_animate");
});
$(window).scroll(function () {
    if($(window).scrollTop() > 600) blogDiv.addClass("scroll_animate");
    else blogDiv.removeClass("scroll_animate");
});
$(window).scroll(function () {
    if($(window).scrollTop() > 1000) contactusDiv.addClass("scroll_animate");
    else contactusDiv.removeClass("scroll_animate");
});