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

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    window.onYouTubePlayerAPIReady = function onYouTubeIframeAPIReady() {
        var elems1 = document.getElementsByClassName('yt-player');
        for(var i = 0; i < elems1.length; i++) {
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
});