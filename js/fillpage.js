$(document).ready(function () {
    fillpage();
});

function fillpage() {
    var containerheight = $('.container').height();
    var windowheight = $(window).height();

    if (containerheight < windowheight) {
        $('.container').height(windowheight);
    }
}