//= jquery.min.js
//= jquery.magnific-popup.min.js
//= constructor/main.js

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