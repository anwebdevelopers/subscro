$(function() {

    'use strict';

    //------------------------------------------------------
    //Tooltip
    //------------------------------------------------------
    $('[data-toggle="tooltip"]').tooltip({
        delay: {
            'show': 200,
            'hide': 200
        }
    });

    //------------------------------------------------------
    //Form Styler
    //------------------------------------------------------
    $('select.form-control').styler({
        onFormStyled: function() {
            $('.jq-selectbox').removeClass('form-control');
        }
    });

    //------------------------------------------------------
    //Datetimepicker
    //------------------------------------------------------
    $('[data-toggle="datetimepicker"]').datetimepicker({
      pickTime: false
    });
    $('.bootstrap-datetimepicker-widget').on('click', '.day', function() {
        $('.bootstrap-datetimepicker-widget').hide();
    });

    //------------------------------------------------------
    //Toggle End Date Wrapper
    //------------------------------------------------------
    $('#end-date-wrapper').hide();
    $('#end-date-toggler').click(function() {
        $('#end-date-wrapper').slideToggle(200);
    });

    //------------------------------------------------------
    //Chrome Smooth Scroll
    //------------------------------------------------------
    try {
        $.browserSelector();
        if ($('html').hasClass('chrome')) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $('img, a').on('dragstart', function(event) {
        event.preventDefault();
    });

    //------------------------------------------------------
    //Full height body for IE
    //------------------------------------------------------

    var $body = $('body');
    function fullheight() {
        if($('html').hasClass('ie') || $('html').hasClass('gecko')) {
            $body.removeAttr('style');
            var windowHeight = $(window).height(),
                bodyHeight = $body.height();
            if (windowHeight >= bodyHeight) {
                $body.css({
                    'height' : windowHeight + 'px'
                });
            }
        }
    }
    fullheight();
    $(window).resize(function() {
        fullheight();
    });
});
