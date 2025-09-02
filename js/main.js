/* ===================================================================
 * Count - Main JS (Clean Version)
 *
 * Countdown removed, static "2026" only
 * Mobile responsive fix added
 * ------------------------------------------------------------------- */

(function($) {

    "use strict";
    
    var cfg = {
        scrollDuration : 800, // smoothscroll duration
        mailChimpURL   : 'https://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e6957d85dc' // mailchimp url
    },

    $WIN = $(window);

    // Add the User Agent to the <html>
    var doc = document.documentElement;
    doc.setAttribute('data-useragent', navigator.userAgent);

    // SVG fallback
    if (!Modernizr.svg) {
        $(".home-logo img").attr("src", "images/logo.png");
    }

    /* Preloader
    * -------------------------------------------------- */
    var ssPreloader = function() {
        $("html").addClass('ss-preload');

        $WIN.on('load', function() {
            $("#loader").fadeOut("slow", function() {
                $("#preloader").delay(300).fadeOut("slow");
            }); 
            $("html").removeClass('ss-preload');
            $("html").addClass('ss-loaded');
        });
    };

    /* info toggle
    * ------------------------------------------------------ */
    var ssInfoToggle = function() {
        $('.info-toggle').on('click', function(event) {
            event.preventDefault();
            $('body').toggleClass('info-is-visible');
        });
    };

    /* slick slider
    * ------------------------------------------------------ */
    var ssSlickSlider = function() {
        $('.home-slider').slick({
            arrows: false,
            dots: false,
            autoplay: true,
            autoplaySpeed: 3000,
            fade: true,
            speed: 3000
        });
    };

    /* placeholder plugin settings
    * ------------------------------------------------------ */
    var ssPlaceholder = function() {
        $('input, textarea, select').placeholder();
    };

    /* AjaxChimp
    * ------------------------------------------------------ */
    var ssAjaxChimp = function() {
        $('#mc-form').ajaxChimp({
            language: 'es',
            url: cfg.mailChimpURL
        });

        // Mailchimp translations
        $.ajaxChimp.translations.es = {
            'submit': 'Submitting...',
            0: '<i class="fas fa-check"></i> We have sent you a confirmation email',
            1: '<i class="fas fa-exclamation-triangle"></i> You must enter a valid e-mail address.',
            2: '<i class="fas fa-exclamation-triangle"></i> E-mail address is not valid.',
            3: '<i class="fas fa-exclamation-triangle"></i> E-mail address is not valid.',
            4: '<i class="fas fa-exclamation-triangle"></i> E-mail address is not valid.',
            5: '<i class="fas fa-exclamation-triangle"></i> E-mail address is not valid.'
        };
    };

    /* Countdown Text Responsive Fix
    * ------------------------------------------------------ */
    var adjustCountdownFont = function() {
        var $count = $('.countdown-text');
        if ($count.length) {
            // Scale font based on window width with a max limit
            $count.css('font-size', Math.min($(window).width() * 0.12, 200) + 'px'); 
        }
    };

    $WIN.on('resize', adjustCountdownFont);
    $(document).ready(adjustCountdownFont);

    /* initialize
    * ------------------------------------------------------ */
    (function ssInit() {
        ssPreloader();
        ssInfoToggle();
        ssSlickSlider();
        ssPlaceholder();
        ssAjaxChimp();
    })();

})(jQuery);
