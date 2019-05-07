!function(o) {
    "use strict";
    jQuery(document).on("ready", function() {
        if (o("a.click-humbarger").on("click", function() {
                return o("a.click-humbarger").toggleClass("cg"),
                    o(".humburger-menu").toggleClass("active"),
                    !1
            }),
                o(".slider-active").on("translate.owl.carousel", function() {
                    o(".slide-content h2").removeClass("animated bounceIn").css("opacity", "0"),
                        o(".slide-content p").removeClass("animated flipInX").css("opacity", "0"),
                        o(".slide-content a.th-primary").removeClass("animated slideInLeft").css("opacity", "0"),
                        o(".slide-content a.th-secondary").removeClass("animated slideInRight").css("opacity", "0")
                }),
                o(".slider-active").on("translated.owl.carousel", function() {
                    o(".slide-content h2").addClass("animated bounceIn").css("opacity", "1"),
                        o(".slide-content p").addClass("animated flipInX").css("opacity", "1"),
                        o(".slide-content a.th-primary").addClass("animated slideInLeft").css("opacity", "1"),
                        o(".slide-content a.th-secondary").addClass("animated slideInRight").css("opacity", "1")
                }),
                o(".slider-active").owlCarousel({
                    loop: !0,
                    margin: 0,
                    autoplay: !0,
                    animateOut: "fadeOut",
                    animateIn: "fadeIn",
                    nav: !0,
                    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    autoplayTimeout:15000,
                    autoplayHoverPause:true,
                    mouseDrag: !1,
                    responsive: {
                        210: {
                            items: 1
                        },
                        320: {
                            items: 1
                        },
                        479: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        980: {
                            items: 1
                        },
                        1199: {
                            items: 1
                        }
                    }
                }),
                o(".team-active").owlCarousel({
                    loop: !0,
                    margin: 30,
                    nav: !0,
                    mouseDrag: !0,
                    autoplay: !0,
                    navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
                    responsive: {
                        210: {
                            items: 1
                        },
                        320: {
                            items: 1
                        },
                        479: {
                            items: 1
                        },
                        768: {
                            items: 3
                        },
                        980: {
                            items: 4
                        },
                        1199: {
                            items: 4
                        }
                    }
                }),
                o(".test-active").owlCarousel({
                    loop: !0,
                    margin: 0,
                    nav: !0,
                    mouseDrag: !0,
                    autoplay: !0,
                    navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
                    responsive: {
                        210: {
                            items: 1
                        },
                        320: {
                            items: 1
                        },
                        479: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        980: {
                            items: 1
                        },
                        1199: {
                            items: 1
                        }
                    }
                }),
            o(".tstiText-active").length && o(".testImg-active").length) {
            var a = o(".tstiText-active")
                , i = o(".testImg-active")
                , t = !1;
            a.owlCarousel({
                loop: !0,
                items: 1,
                margin: 0,
                nav: !1,
                dots: !0,
                autoplay: !1,
                autoplayTimeout:15000,
                autoplayHoverPause:true,
            }).on("changed.owl.carousel", function(e) {
                t || (t = !1,
                    i.trigger("to.owl.carousel", [e.item.index, 500, !0]),
                    t = !1)
            }),
                i.owlCarousel({
                    loop: !0,
                    margin: 10,
                    items: 3,
                    nav: !1,
                    dots: !1,
                    center: !0,
                    autoplay: !1,
                    autoplayTimeout:15000,
                    autoplayHoverPause:true,
                    responsive: {
                        210: {
                            items: 1
                        },
                        320: {
                            items: 1
                        },
                        479: {
                            items: 1
                        },
                        768: {
                            items: 1
                        },
                        980: {
                            items: 3
                        },
                        1199: {
                            items: 3
                        }
                    }
                }).on("click", ".owl-item", function() {
                    a.trigger("to.owl.carousel", [o(this).index(), 500, !0])
                }).on("changed.owl.carousel", function(e) {
                    t || (t = !0,
                        a.trigger("to.owl.carousel", [e.item.index, 500, !0]),
                        t = !1)
                })
        }
        o(".rlt_product_active").owlCarousel({
            loop: !0,
            nav: !0,
            margin: 15,
            mouseDrag: !0,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            responsive: {
                210: {
                    items: 1
                },
                320: {
                    items: 1
                },
                479: {
                    items: 2
                },
                768: {
                    items: 3
                },
                980: {
                    items: 4
                },
                1199: {
                    items: 4
                }
            }
        }),
            o(".cart-open").on("click", function() {
                o(".shopping-cart").toggleClass("active")
            }),
            o(".search-opt").on("click", function() {
                return o(".hidden-search-rapper, .serach-overlay").toggleClass("active"),
                    !1
            }),
            o(".close-search, .serach-overlay").on("click", function() {
                o(".hidden-search-rapper, .serach-overlay").removeClass("active")
            }),
            o(".counter").counterUp({
                delay: 10,
                time: 1e3
            }),
            o(".video-pop").magnificPopup({
                type: "iframe",
                removalDelay: 300,
                mainClass: "mfp-fade"
            }),
            o(window).on("scroll", function() {
                o(window).scrollTop() < 300 ? o(".site-header, .site-main-header").removeClass("sticky slideInDown animated") : o(".site-header, .site-main-header").addClass("sticky slideInDown animated")
            }),
            o(".menu-click").on("click", function() {
                return o(".main-menu > ul").toggleClass("show"),
                    !1
            }),
        o(window).width() < 767 && o(".humburger-menu ul li.menu-item-has-children, .main-menu ul li.menu-item-has-children").on("click", function() {
            return o(this).children("ul.sub-menu").slideToggle(),
                o(this).toggleClass("change-icon"),
                !1
        }),
            o(".humburger-menu ul li, .humburger-menu ul ul li, .main-menu ul li, .main-menu ul ul li").on("click", function(e) {
                e.stopPropagation()
            }),
            o(".img-poppu").magnificPopup({
                type: "image",
                gallery: {
                    enabled: !0
                }
            }),
            o("#slider-range").slider({
                range: !0,
                min: 40,
                max: 600,
                values: [60, 570],
                slide: function(e, a) {
                    o("#amount").val("$" + a.values[0] + " - $" + a.values[1])
                }
            }),
            o("#amount").val("$" + o("#slider-range").slider("values", 0) + " - $" + o("#slider-range").slider("values", 1)),
            o('[data-toggle="tooltip"]').tooltip();
        var e = o(".count-down");
        if (e.length) {
            var n = new Date(e.data("end-date"));
            e.countdown({
                date: n,
                render: function(e) {
                    o(this.el).html('<div class="cd-row"><div><h1>' + this.leadingZeros(e.days, 2) + "</h1><p>days</p></div><div><h1> : " + this.leadingZeros(e.hours, 2) + '</h1><p>hrs</p></div></div><div class="cd-row"><div><h1> : ' + this.leadingZeros(e.min, 2) + "</h1><p>min</p></div><div><h1> : " + this.leadingZeros(e.sec, 2) + "</h1><p>sec</p></div></div>")
                }
            })
        }
        o(".comming_soonwrapper a.mr-modal").on("click", function() {
            return o(".notyfy-me-segment-rapper, .comming-soon-overlay").toggleClass("active"),
                !1
        }),
            o(".notifay-close a.noti-close, .comming-soon-overlay").on("click", function() {
                return o(".notyfy-me-segment-rapper, .comming-soon-overlay").removeClass("active"),
                    !1
            }),
            o.scrollUp({
                scrollText: '<i class="fa fa-angle-up"></i>'
            }),
            o(".js-tilt").tilt({
                glare: !0,
                maxGlare: .5
            }),
            jQuery(window).load(function() {
                jQuery(".pink-rosepreloder").fadeOut(300)
            }),
            o(".player").mb_YTPlayer(),
            o(function() {
                function e(e, t) {
                    e.each(function() {
                        var e = o(this)
                            , a = e.attr("data-animation")
                            , i = e.attr("data-animation-delay");
                        e.css({
                            "-webkit-animation-delay": i,
                            "-moz-animation-delay": i,
                            "animation-delay": i
                        }),
                            (t || e).waypoint(function() {
                                e.addClass("animated").css("visibility", "visible"),
                                    e.addClass("animated").addClass(a)
                            }, {
                                triggerOnce: !0,
                                offset: "90%"
                            })
                    })
                }
                e(o(".animation")),
                    e(o(".staggered-animation"), o(".staggered-animation-wrap"))
            });
        var s = skrollr.init({
            forceHeight: !1
        });
        s.isMobile() && s.destroy()
    })
}(jQuery);
