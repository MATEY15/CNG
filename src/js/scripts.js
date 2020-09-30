//= jquery.min.js
//= jquery.magnific-popup.min.js
//= slick.min.js
//= jquery.fullpage.js

//= gsap.min.js
//= TweenMax.min.js
//= ScrollMagic.min.js
//= animation.gsap.js

//= debug.addIndicators.min.js


// constructor/main.js

// window.onload = function(){
//   $("#overlayer").delay(1000).fadeOut("slow");
//   setTimeout(function() {
//   }, 800);
// }

// Variable
var heightFoot;



function heightFooter() {
    heightFoot = $('.footer').outerHeight();
    // $('body').css({ 'padding-bottom': '380px' });
    $('#footer').css({ 'max-height': '410px' });
    // $('body').css({ 'padding-bottom': heightFoot });

}
heightFooter();
$(window).resize(function() {
    heightFooter()
});


// $(".burger-menu").on("click", function() {  
//   $(".menu-header").toggleClass('is-active');
//   $("body").toggleClass('overflow');
// })

/* Popup Window */

$(".popup").magnificPopup({
    type: 'inline',
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
});

/* Popup Window End */

/* Slider Home */

$('.home-slider').slick({
    infinite: false,
    // autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 3,
    speed: 400,
    dots: false,
    // adaptiveHeight: true,
    // fade: true,
    // cssEase: 'linear',
    // appendArrows: ".slider-arrow",
    prevArrow: '<div class="slider-home--prev"><img src="img/arrow.svg" /></div>',
    nextArrow: '<div class="slider-home--next"><img src="img/arrow.svg" /></div>',
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                infinite: true,
            }
        }
    ]
});

/* Animation */

gsap.to('.default-section p', .8, {
    delay: 1,
    top: 0,
    opacity: 1,
    ease: 'power1.out',
})
gsap.to('.logo-link', .8, {
    delay: 1,
    top: 0,
    opacity: 1,
    ease: 'power1.out',
})
gsap.to('.right-sidebar', .8, {
    delay: 1,
    right: 0,
    opacity: 1,
    ease: 'power1.out',
})
gsap.to('.header-content h1', .8, {
    delay: .9,
    top: 0,
    opacity: 1,
    ease: 'power1.out',
})
gsap.to('.header-content p', .8, {
    delay: .9,
    left: 0,
    opacity: 1,
    ease: 'power1.out',
})
gsap.to('.link-copy', .8, {
    delay: .9,
    bottom: 0,
    opacity: 1,
    ease: 'power1.out',
})
gsap.to('.pulse-button', 1.2, {
    delay: .9,
    bottom: -65,
    opacity: 1,
    ease: 'power1.out',
})

var controller = new ScrollMagic.Controller();

if ($('#footer').length) {
    var pinIntroScene = new ScrollMagic.Scene({
            triggerElement: '#footer-scroll',
            triggerHook: 1,
            duration: null, // heightFoot,
            offset: 410,
        })
        .setClassToggle('#footer', 'stiky')
        // .setPin('#footer') //, { pushFollowers: false }
        // .addIndicators()
        .addIndicators({ name: "pin scene 1010", colorStart: "transparent", colorTrigger: "transparent", colorEnd: "transparent" })
        // .removeIndicators()
        .addTo(controller);
}

// var pinIntroScene2 = new ScrollMagic.Scene({
//         triggerElement: '#footer-scroll',
//         triggerHook: 1,
//         duration: null, // heightFoot,
//         offset: 250,
//     })
//     .setClassToggle('.logo-footer', 'stiky')
//     // .setPin('#footer') //, { pushFollowers: false }
//     // .addIndicators()
//     // .addIndicators({ name: "pin scene 1010", colorStart: "transparent", colorTrigger: "transparent", colorEnd: "transparent" })
//     // .removeIndicators()
//     .addTo(controller);


// $(".slider-animate").each(function() {
//     var scene = new ScrollMagic.Scene({
//             triggerElement: this,
//             // duration: durationStatus,
//             // delay: durationStatus,
//             triggerHook: .9,
//             // reverse: false,
//         })
//         // .setClassToggle(this, 'add-xxx')
//         .setTween(
//             gsap.to(this, 0, {
//                 delay: +$(this).attr('data-duration'),
//                 y: 0,
//                 opacity: 1,
//                 ease: 'power1.out',
//             }))
//         .addTo(controller);
// });

var eachAnimateStart = function(item) {
    $(item).each(function() {
        var scene = new ScrollMagic.Scene({
                triggerElement: this,
                // duration: durationStatus,
                // delay: durationStatus,
                triggerHook: .9,
                // reverse: false,
            })
            // .setClassToggle(this, 'add-xxx')
            .setTween(
                gsap.to(this, 0, {
                    delay: +$(this).attr('data-duration'),
                    y: 0,
                    opacity: 1,
                    ease: 'power1.out',
                }))
            .addTo(controller);
    });
};
eachAnimateStart(".slider-animate");
eachAnimateStart(".image-main--items");


$(".animate-item").each(function() {
    var durationStatus = null;
    var scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: .9,
            // reverse: false,
        })
        .setClassToggle(this, 'add-animate')
        .addTo(controller);
});


// var tl = new TimelineMax();
// tl.staggerFrom("h4", 1.25, {
//     scale: 0,
//     cycle: {
//         y: [-50, 50]
//     },
//     ease: Back.easeOut,
//     stagger: {
//         from: "center",
//         amount: 0.25
//     }
// });


// $(document).ready(function() {
//     $('#fullpage').fullpage({
//         // licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
//         // scrollHorizontallyKey: 'YWx2YXJvdHJpZ28uY29tX01mU2MyTnliMnhzU0c5eWFYcHZiblJoYkd4NVNRcg==',

//         autoScrolling: true,

//         // scrollHorizontally: true
//     });

//     //methods
//     // $.fn.fullpage.setAllowScrolling(false);
// })