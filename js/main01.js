$(function () {
    $('.mainSlide').slick({
        // arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        speed: 2000

    });
})

$(function () {
    $('.product_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    $('#product .arrows .left').on('click', function () {
        $('.product_slide').slick('slickPrev');
    });
    $('#product .arrows .right').on('click', function () {
        $('.product_slide').slick('slickNext');
    });

})