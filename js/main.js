jQuery(document).ready(function($) {

  // * Navigation Scripts to Show Header on Scroll-Up
    var MQL = 1170;
    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height();
        $(window).on('scroll', {
                previousTop: 0
        },
        function() {
            var currentTop = $(window).scrollTop();
            //check if user is scrolling up
            if (currentTop < this.previousTop) {
                //if scrolling up...
                if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                    $('.navbar-custom').addClass('is-visible');
                } else {
                    $('.navbar-custom').removeClass('is-visible is-fixed');
                }
            } else {
                //if scrolling down...
                $('.navbar-custom').removeClass('is-visible');
                if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
            }
            this.previousTop = currentTop;
        });
    }

    // * Cover title fit screen
    setTimeout(function() {
        $('h1.responsive-title').fitText(1, { minFontSize: '40px', maxFontSize: '90px' });
    }, 100);

    // * Smooth scrolling
    $('.smooth-scroll').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });

    // * Portfolio popups
    $('.item-wrap a').magnificPopup({

        type:'inline',
        fixedContentPos: false,
        removalDelay: 200,
        mainClass: 'mfp-fade'

    });

});
