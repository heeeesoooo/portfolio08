$(function () {
    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 0) {
            $('#header').addClass('on');
        } else {
            $('#header').removeClass('on');
        }
    })

    $('.main_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
    })
    $('.product_slide').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
    })
    $('.plus_goods_slide').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
    })
})