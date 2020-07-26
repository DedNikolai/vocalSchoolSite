$(document).ready(function(){
    $('.feedbacks-slider').slick({
        // dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    // arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
});
    $('.burger-toggler').click(() => {
        $('.navbar').animate({
            left: '0'
        }, 500);
    });

    $('.close').click(() => {
        $('.navbar').animate({
            left: '-100%'
        }, 500);
    });

    $(function(){
        const url = window.location.pathname,
            urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");
        $('.navigation a').each(function(){
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).addClass('navigation__link--active');
            }
        });

    });

    $(window).resize(() => {
        if ($(window).width() >= '992') {
            $('.navbar').css('left', 'unset')
        }

        if ($(window).width() < '992') {
            $('.navbar').css('left', '-100%')
        }
    })

    $('.founder-slider').slick({
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: 0,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    // arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});