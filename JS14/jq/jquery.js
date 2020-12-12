'use strict'

    $(".header__menu a").on('click', function () {
    let linkHref = $(this).attr("href");
    let idElement = linkHref.substr(linkHref.indexOf("#"));

    $('html, body').animate({
        scrollTop: $(idElement).offset().top
    }, 750);
    return false;
    });

    $(function () {
        $(".slide-toggle").on('click', function () {
            $(".intro").slideToggle(750);
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 438) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

