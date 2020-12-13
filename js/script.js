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
        $('body').addClass('body-overflof-hidden');
        $('.header').addClass('header--clip-path-none');
        $('.navbar').addClass('navbar--mobile');
    });

    $('.close').click(() => {
        $('.navbar').animate({
            left: '-100%'
        }, 500, "linear", () => {
            $('body').removeClass('body-overflof-hidden');
            $('.header').removeClass('header--clip-path-none');
            $('.navbar').removeClass('navbar--mobile');
        });
    });

    $('.close-modal').click(() => {
        $('.modal-form').css({display: 'flex'});
    })

    $('.navbar').swipe({
        swipe:function(event, phase, direction, distance, duration, fingerCount, fingerData, currentDirection) {
            const isMobileMenu = ($('.navbar').hasClass('navbar--mobile'));
            if (phase=="left" && isMobileMenu){
                $('.navbar').animate({
                    left: '-100%'
                }, 500, "linear", () => {
                    $('body').removeClass('body-overflof-hidden');
                    $('.header').removeClass('header--clip-path-none');
                });
            }
        },
        triggerOnTouchEnd:false,
        threshold:20 // сработает через 20 пикселей
    });

    const location = window.location.href;

    $('.navigation__link').each(function () {
        const link = this.href;
        if (location == link) {
            $(this).addClass('navigation__link--active');
        }
    });

    $(window).resize(() => {
        if ($(window).width() >= '992') {
            $('.navbar').css('left', 'unset');
            $('body').removeClass('body-overflof-hidden');
            $('.header').removeClass('header--clip-path-none');
            $('.navbar').removeClass('navbar--mobile');
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


    $('.videos-slider').slick({
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 6000,
        centerPadding: '60px',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    // arrows: false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '0px',
                }
            }
        ]
    });

    let tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    let player;
    window.onYouTubePlayerAPIReady = function onYouTubeIframeAPIReady() {
        let elems1 = document.getElementsByClassName('yt-player');
        for(let i = 0; i < elems1.length; i++) {
            player = new YT.Player(elems1[i], {
                events: {
                    // 'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }
    }
    function onPlayerReady(event) {

    }
    function handleVideo(playerStatus) {
        if (playerStatus == -1) {
            // unstarted
            $('.videos-slider').slick('slickPause');
        } else if (playerStatus == 0) {
            // ended
            $('.videos-slider').slick('slickPlay');

        } else if (playerStatus == 1) {
            // playing = green
            $('.videos-slider').slick('slickPause');
        } else if (playerStatus == 2) {
            // paused = red
            $('.videos-slider').slick('slickPlay');
        } else if (playerStatus == 3) {
            // buffering = purple
        } else if (playerStatus == 5) {
            // video cued
        }
    }
    function onPlayerStateChange(event) {
        handleVideo(event.data);
    }

    $('.videos-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.yt-player').each(function(){
            this.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')
        });
    });

    const lightbox = GLightbox({});
});

$('.feedback-form').on('submit', (e) => {
    e.preventDefault();

    let action = $(e.currentTarget).attr('action');
    let th = $(e.currentTarget);


    $.ajax({
        type: 'POST',
        url: action,
        data: th.serialize()
    }).done(function(){
        $(".feedback-form").trigger("reset");
        $('.modal-form').css({display: 'flex'});
        setTimeout(() => {
            $('.modal-form').css({display: 'none'});
        }, 3000)
    });
});