$(function () {
    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
    });

    $('.main_slide .slick-current').addClass('on');

    $('.main_slide').on('afterChange', function () {
        let _this = $('.main_slide .slick-current')
        _this.addClass('on').siblings().removeClass('on');
    })
})