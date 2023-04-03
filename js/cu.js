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
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
    })

    $('#mainVisual .arrows .prev').on('click', function () {
        $('.main_slide').slick('slickPrev')
    })

    $('#mainVisual .arrows .next').on('click', function () {
        $('.main_slide').slick('slickNext')
    })

    $('.product_slide').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
    })
    $('.plus_goods_slide').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
    })

    $('#hot_issue .arrows .prev').on('click', function () {
        $('.product_slide').slick('slickPrev')
    })

    $('#hot_issue .arrows .next').on('click', function () {
        $('.product_slide').slick('slickNext')
    })
    $('#plus_goods .arrows .prev').on('click', function () {
        $('.product_slide').slick('slickPrev')
    })

    $('#plus_goods .arrows .next').on('click', function () {
        $('.product_slide').slick('slickNext')
    })

    $('.store_slide').slick({
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000,
    })

    $('header .right').on('click', function () {
        $(this).toggleClass('on');
        $('.menu_cover').toggleClass('on');
    });

})