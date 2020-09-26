//= jquery.min.js
//= jquery.magnific-popup.min.js
//= fullpage.min.js
//= gsap.min.js


// constructor/main.js

// window.onload = function(){
//   $("#overlayer").delay(1000).fadeOut("slow");
//   setTimeout(function() {
//   }, 800);
// }

function heightFooter() {
    var heightFoot = $('.footer').outerHeight();
    $('body').css({ 'padding-bottom': heightFoot });
}
heightFooter()
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

$(document).ready(function() {
    $('#fullpage').fullpage({
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling: true,
        scrollHorizontally: true
    });

    //methods
    $.fn.fullpage.setAllowScrolling(false);
})