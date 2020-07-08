$(document).ready(function(){
    $('.feedbacks-slider').slick({
        dots: true,
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
        $('.navbar').show( 300 );
    })

    $('.close').click(() => {
        $('.navbar').hide(300)
    })

    $('.navigation__link').click(() => {
        $('.navbar').hide(300)
    })
});