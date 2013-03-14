/*======================================
=            Core Functions            =
======================================*/
$(document).ready(function() {

    // Close countdown timer after expires 4 sec
    $('.countdown-timer').delay(3000).animate({ opacity: 0 }, 1000,
        function() {
            $('.countdown-timer').css({ display: 'none' });
        }
    );


    // Smooth Scroll To Element
    $('a:not(#intro .button)').click(function(e)
    {
        if($(this).hasClass('third'))
        {
            e.preventDefault();
        }
        else if($(this).attr('href')[0] == '#')
        {
            var top = $(this).attr('href') == '#'? 0 : $($(this).attr('href')).offset().top;
            $('html, body').stop().animate({'scrollTop':top-($('#header').height()+70)}, 600);
            e.preventDefault();
        }
    });

    // Check Page onScroll
    var scrollItems = $('.main-nav li a').map(function()
    {
        if ($(this).attr("href")[0] == '#')
        {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        }
    });

    var folded = false;
    var scheduleOpened = false;
    var activeElId;
    $(document).scroll(function()
    {
        var top = $(document).scrollTop() + $('#header').height() + $(window).height() / 2;

        // Fold blog items
        if ($('html').hasClass('csstransforms3d'))
        {
            setTimeout(function(){
                if (top >= $('#blog').offset().top && !folded && $('html').hasClass('csstransforms3d'))
                {
                    folded = true;
                    $domi.settings.speed = 1500;
                    $domi._setTweening(true);
                    $domi.stairs(0, 'top');
                }
            }, 100);
        }

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top <= top)
                return this;
        });

        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (activeElId !== id)
        {
            if (id == 'schedule' && !scheduleOpened)
            {
                $('.schedule-tab .first').click();
                scheduleOpened = true;
            }
            activeElId = id;
            // Set/remove active class
            $('.main-nav li a')
            .removeClass("active")
            .parent().find("a[href=#"+id+"]").addClass("active");
        }

    });


    // Folded Paper Plugin
    if ($('html').hasClass('csstransforms3d') && !folded)
    {
        window.$domi = new OriDomi($('#blog ul')[0], { vPanels: 1, hPanels: $('#blog ul li').length,  shading: false, speed: 0, touchEnabled: false });
        $domi.settings.speed = 0;
        $domi._setTweening(true);
        $domi.stairs(100, 'top');
    }

    $(window).resize(function()
    {
        if ($('html').hasClass('csstransforms3d'))
        {
            window.$domi.destroy();
            $('.oridomi').removeAttr('style');
        }
    });

    // FAQ Accordion
    $('#faq li a').unbind('click');
    $('#faq li p').slideUp();
    $('#faq li').click(function(e)
    {
        $(this).addClass('active').siblings('li').removeClass('active');
        $(this).find('p').slideDown();
        $(this).siblings('li').find('p').slideUp();
        e.preventDefault();
    });
    // Open first answer
    $('#faq li').eq(0).click();


    $('#intro .button').click(function() {
        $.fancybox.open({
                    href: 'static/iframe.html',
                    type: 'iframe',
                    fitToView: false,
                    autoSize: false,
                    height: '70%',
                    helpers: {
                        overlay : {
                            locked: false
                        }
                    }
                });
        return false;
    });

    // Schedule
    (function()
    {

        var complete = true;
        var recursiveShow = function(el)
        {
            if (el.length)
            {
                el.stop().animate({ opacity: 1}, 200, function()
                {
                    recursiveShow($(this).next());
                });
            }
            else
            {
                complete = true;
            }
        };

        $('.schedule-tiles li').css('opacity', 0);
        $('.schedule-tab .first, .schedule-tab .second').unbind('click').click(function(e)
        {
            if (!$(this).hasClass('active') && complete)
            {
                complete = false;
                // Add active class and remove the active
                $(this).addClass('active').parent().siblings('li').find('a').removeClass('active');
                var container = $($(this).attr('href')).css('display', 'block');
                recursiveShow(container.find(' li').css('opacity', 0).eq(0));
                container.siblings('.schedule-tiles').css('display', 'none').find('li');
            }

            e.preventDefault();
        });
    })();


    // Slider
    $('.pages li a').unbind('click').each(function(i){
        var i = i;
        $(this).click(function(e)
        {
            $(this).addClass('active').parent().siblings('li').find('a').removeClass('active');
            $('.organizators .frame').animate({'margin-left': i*-160*6});
            e.preventDefault();
        });
    });

});
