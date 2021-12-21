$(function () {
    /* --- define --- */
    var pl, fi;
    var ae, al, a1, a2, a3, ac;
    var fpage, cio, c1, cio1, c2, cio2, c3, cio3, c4, cio4, c5, cio5, c6, cio6;
    var navs, pb, nb, xb, ua, da, ss, sc1, sc2, sc3, sc4, sc5, sc6;
    var eh4, nsew, circles, small, ls, nh1;

    const allPages = 4
    pl = $('#preloader');
    fi = $('#first-image'); eh4 = $('#contact-email h4');
    am = $('.about-me'); al = $('.about-me > span'); a1 = $('.about-me-1'); a2 = $('.about-me-2'); a3 = $('.about-me-3'); ac = 1;
    fpage = $('#fullpage'); pb = $('#prev'); nb = $('#next'); xb = $('.xback'); navs = $('nav'); ua = $('#up-arrow'); da = $('#down-arrow'); ss = $('.screenshot');
    sc1 = $('.ocean-d-v-screen'); sc2 = $('.iberry-screen'); sc3 = $('.ennetech-screen'); sc4 = $('.catch-screen');
    cio = $('.check-it-out'); c1 = $('.case-1'); cio1 = $('#ocean-d-v-case'); c2 = $('.case-2'); cio2 = $('#iberry-case'); c3 = $('.case-3'); cio3 = $('#ennetech-case'); c4 = $('.case-4'); cio4 = $('#catch-case');
    nsew = $('#nsew'); circles = $('#circles'); small = $('#small-cross'); ls = $('#logo-svg'); nh1 = $('#studio');

    /* --- ABOUT ME CAROUSEL --- */
    setInterval(function () {
        if (ac === 1) {
            al.not(a1).removeClass('on');
            a1.addClass('on');
            ac++;
        }
        else if (ac === 2) {
            al.not(a2).removeClass('on');
            a2.addClass('on');
            ac++;
        }
        else {
            al.not(a3).removeClass('on');
            a3.addClass('on');
            ac = 1;
        }
    }, 3000);

    /* --- FULLPAGE.JS --- tkmnm*/
    fpage.fullpage({
        scrollingSpeed: 1200,
        easingcss3: "cubic-bezier(.23, 1, .32, 1)",
        continuousVertical: true,
        normalScrollElements: '.content',
        onLeave: function (index, nextIndex, direction) {
            var leavingSection = $(this);

            //ocean d v
            if (index === 1 && direction === 'down') active_iBerry()

            else if (index === 1 && direction === 'up') active_catchDesign()

            //iberry
            else if (index === 2 && direction === 'down') active_ennetech()

            else if (index === 2 && direction === 'up') active_ocean()

            //after ennetech
            else if (index === 3 && direction === 'down') active_catchDesign()

            else if (index === 3 && direction === 'up') active_iBerry()

            //after child pickles
            else if (index === 4 && direction === 'down') active_ocean()

            else if (index === 4 && direction === 'up') active_ennetech()
        }
    });

    const active_ocean = () => {
        c1.add(cio1).addClass('active');
        c2.add(cio2).add(sc2).removeClass('active');
        c3.add(cio3).add(sc3).removeClass('active');
        c4.add(cio4).add(sc4).removeClass('active');

        btnColor('light-gray')
        leftBarDissolve('gray')
        leftBarTextColor('light-gray')
    }

    const active_iBerry = () => {
        c1.add(cio1).removeClass('active');
        c2.add(cio2).add(ss).add(sc2).addClass('active');
        c3.add(cio3).add(sc3).removeClass('active');
        c4.add(cio4).add(sc4).removeClass('active');

        btnColor('red');
        leftBarSlide('white');
    }

    const active_ennetech = () => {
        c1.add(cio1).removeClass('active');
        c2.add(cio2).removeClass('active');
        c3.add(cio3).add(sc3).addClass('active');
        c4.add(cio4).add(sc4).removeClass('active');

        btnColor('teal')
        leftBarDissolve('blue')
        leftBarTextColor('light-gray')
    }

    const active_catchDesign = () => {
        c1.add(cio1).removeClass('active');
        c2.add(cio2).removeClass('active');
        c3.add(cio3).removeClass('active');
        c4.add(cio4).add(sc4).addClass('active');

        btnColor('light-red')
        leftBarSlide('light-red')
        leftBarTextColor('white')
    }

    const btnTextColor = (color) => {
        $('#up-arrow').attr('class', '').addClass(`bg-${color}`)
    }

    const btnColor = (color) => {
        const btns = pb.add(nb).add(cio)
        btns.find('.swipe-bg').removeClass('active')
        btns.find(`.swipe-bg.bg-${color}`).addClass('active')
    }

    const emailColor = (color) => {
        //
    }

    const leftBarTextColor = (color) => {
        am.attr('class', `about-me ${color}`);
        ls.attr('class', `fill-${color}`);
        nh1.attr('class', color);
    }

    const leftBarDissolve = (color) => {
        navs.attr('class', '').addClass(`bg-${color}`)
        navs.find('.swipe-bg').removeClass('active')
    }

    const leftBarSlide = (color) => {
        navs.find('.swipe-bg').removeClass('active')
        navs.find(`.swipe-bg.bg-${color}`).addClass('active')
    }

    /* --- fullpage switch button --- */
    $('#arrows')
        .on('click', '#prev', function () {
            $.fn.fullpage.moveSectionUp();
        })
        .on('click', '#next', function () {
            $.fn.fullpage.moveSectionDown();
        });

    /* --- preloader damaged --- */
    $(window).on('load', function () {
        pl.removeClass('active');
        fi.removeClass('first-image');
        setTimeout(
            function () {
                c1.add(eh4).addClass('active');
                pl.fadeOut('slow');
            }, 2000);
        $('body').css({ 'overflow': 'visible' });
    });

    /* --- PAGE TRANSITIONS --- */
    $(document).on('click', '.check-it-out a', function () {
        $('.laptop, .check-it-out, #case-numbers span, #case-outof span, #case-hashtags, nav, #case-title').addClass('out');
        $('.right-half').addClass('open');
        $('.accent-image').addClass('close');
        $('#up-arrow, #down-arrow').addClass('turn');
    });

    $(document).on('click', '.check-it-out.out', function () {
        $('.laptop, .check-it-out, #case-numbers span, #case-outof span, #case-hashtags, nav, #case-title').removeClass('out');
        $('.right-half').removeClass('open');
        $('.accent-image').removeClass('close');
        $('#up-arrow, #down-arrow').removeClass('turn');
    });

    /* --- COMPASS --- */

    $(document).on('click', '.check-it-out a#mountainside-case', function () {

        TweenMax.fromTo(small, 3, { css: { rotation: 60 } }, { css: { rotation: 0 }, ease: Elastic.easeOut.config(1, .4), easeParams: [1], delay: 2, repeat: 4, repeatDelay: 3 });
        TweenMax.fromTo(nsew, 1.8, { css: { rotation: -30 } }, { css: { rotation: 0 }, ease: Back.easeOut, easeParams: [1], delay: 2, repeat: 4, repeatDelay: 4.2 });
        TweenMax.fromTo(circles, 5, { css: { rotation: -400 } }, { css: { rotation: 0 }, ease: Back.easeOut, easeParams: [1], delay: 2, repeat: 4, repeatDelay: 1 });

    });
});
