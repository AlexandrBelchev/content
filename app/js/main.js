// navigation
$(function () {
    $('.menu__hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('.menu').toggleClass('menu_active');
    });
});

$(document).ready(function() {
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth > 769)$(".menu").removeClass("menu_active");
        if (windowWidth > 769)$(".menu__hamburger").removeClass("active");
    });
});

// scroll to section
$(function() {
    $('a').click(function() {
        var href = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1000);
        return false;
    });
});

// carousel
$(document).ready(function() {
    $('.center').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(".lazy").slick({
        lazyLoad: 'ondemand',
        infinite: true
    });
});