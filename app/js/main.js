$(function () {
    $('#menu__hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('#menu').toggleClass('menu-active');
    });
});
