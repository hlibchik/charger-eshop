$(document).ready(function () {
    $(".header-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $(".multiple-slider").slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
    });

    $(".card-slider").slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    });

    $(".item-slider").slick({
        slidesToShow: 1,
        fade: true,
        asNavFor: ".item-slider-nav",
        arrows: false,
    });
    $(".item-slider-nav").slick({
        slidesToShow: 3,
        asNavFor: ".item-slider",
        focusOnSelect: true,
        arrows: true,
    });

    $(".catalog-slider").slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    });

    $(".collapsible").collapsible();
});

Fancybox.bind("[data-fancybox]", {});
