// navigation
$(function () {
    $('#menu__hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('#menu').toggleClass('menu-active');
    });
});

$(document).ready(function() {
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth > 769)$("#menu").removeClass("menu-active");
        if (windowWidth > 769)$("#menu__hamburger").removeClass("active");
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
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
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