$(function () {
    "use strict";
    console.log('( •ิཬ•ั ) Hello!!!');

    var obj = {
        init: function () {
            // this.aos();
            // this.wow();
            this.visual();
            this.construct();
            // this.loadPost();
            this.idxMenu();
        },

        //aos
        aos: function () {
            AOS.init({
                startEvent: 'DOMContentLoaded',
                offset: 0,
                duration: 800,
                delay: '200',
                easing: 'ease-in-sine',
                once: true,
                mirror: true,
                disable: function () {
                    return $(window).width() <= 768;
                },
            });
        },

        wow: function () {
            var wow = new WOW(
                {
                    boxClass: 'wow',      // default
                    animateClass: 'animated', // default
                    offset: 0,          // default
                    mobile: false,
                    live: false,       // default
                }
            )
            wow.init();
        },

        visual: function () {
            if ($('#visual').length > 0) {
                $('#visual').slick({
                    dots: true,
                    infinite: true,
                    speed: 1000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    arrows: false,
                    centerMode: false,
                    centerPadding: 0,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    fade: false,
                    variableWidth: false,
                });
            }
        },

        construct: function () {
            if ($('#const-slider').length > 0) {
                $('#const-slider').slick({
                    dots: false,
                    infinite: true,
                    speed: 1000,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // autoplay: true,
                    // autoplaySpeed: 5000,
                    arrows: false,
                    centerMode: false,
                    centerPadding: 0,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    fade: false,
                    variableWidth: false,
                    responsive: [
                        {
                            breakpoint: 751,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: true,
                            }
                        },

                    ]
                });
            }
        },

        loadPost: function () {
            $.ajax({
                url: 'blog/_custom/?limit=2',
                dataType: 'jsonp',
                success: function (json) {
                    $.each(json.data, function (i, val) {
                        var dateFormatted = val.date.replace('/', '.').replace('/', '.');
                        var items =
                            '<li>' +
                            '<a href="./blog/' + val.url + '" class="blogs-item">' +
                            '<span class="blogs-time">' + dateFormatted + '</span>' +
                            '<span class="blogs-tt">' + val.title + '</span>' +
                            '</a>' +
                            '</li>'
                        $('#blog-list').append(items);
                    });
                }
            });
        },

        idxMenu: function () {
            $(window).scroll(function () {
                var pod = $('html,body').scrollTop();
                var menuHeight = $('#header').outerHeight();
                var idxMenuHeight = $('.idx-menu').outerHeight();
                var scrollTop = pod + menuHeight;
                
                var _w = $(window).width();
                var nextElement = $('.idx-menu').next().offset().top;
                var posFixedMenu = nextElement - idxMenuHeight;

                if (_w > 751 && scrollTop >= posFixedMenu) {
                    $('.idx-menu').addClass('--fixed');
                    $('.btn-more').addClass('--active');
                } else {
                    $('.idx-menu').removeClass('--fixed');
                    $('.btn-more').removeClass('--active');
                }
                
            });
        }
    }

    obj.init();
});