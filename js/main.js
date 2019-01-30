
//Scroll

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
        $(".header-mid").addClass("header-active");
        $(".scroll-top").addClass("active-scroll"); // Scroll Menu - Mobile
    } 
    else {
        $(".header-mid").removeClass("header-active");
        $(".scroll-top").removeClass("active-scroll");
    }
    }); 

// scroll To Top

$(".scroll-top").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});



// carousel
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:5,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});

$(".header-menu ul li a").click(function() {
  $(".header-menu ul li a").removeClass("active");
  $(this).addClass("active");
});

//

$(".list-tab-img ul li a").click(function() {
  $(".list-tab-img ul li a").removeClass("active");
  $(this).addClass("active");
  let data = $(this).attr("data-tab");
  $(".list-img-bottom").slideUp();
  $("#" + data).slideDown();
});


// click video

// Bước 1 

var image = $('.list-video-text:nth-child(1)').find('img').attr('src'); 
var linkvideo = $('.list-video-text:nth-child(1)').find('iframe').attr('src'); 
$('.video-left-yt').find('.img-video').attr('src',image); 
$('.video-left-yt').find('iframe').attr('src',linkvideo);
$('.play-video a').click(function(event) {
    event.preventDefault(); 
    $(this).parents('.video-left-yt').addClass('active-video'); 
    var linkyt = $(this).parents('.play-video').next().find('iframe').attr('src'); 
    $('.video-iframe').attr('src',linkyt + '?autoplay=1');
});

// Bước 2
$('.list-video-text .video-left-text').each(function() {
    var clicks = $(this);
    $(this).find('a').attr('href', 'javascript:;'); 
    clicks.click(function() {
        var linkyt2 = $(this).find('iframe').attr('src'); 
        var img2 = $(this).find('img').attr('src');
        $('.video-left-yt').find('iframe').attr('src', linkyt2);
        $('.img-playvideo img').attr('src', img2);
    });
});

//

$(".list-video-text").click(function(event) {
  $(".list-video-text").removeClass("active-yt");
  $(this).addClass("active-yt")
});

//


// ?jquery mobile

(function($) {
    var $main_nav = $('#main-nav');
    var $toggle = $('.toggle');

    var defaultData = {
        maxWidth: false,
        customToggle: $toggle,
        // navTitle: 'All Categories',
        levelTitles: true,
        pushContent: '#container'
    };

    // add new items to original nav
    $main_nav.find('li.add').children('a').on('click', function() {
        var $this = $(this);
        var $li = $this.parent();
        var items = eval('(' + $this.attr('data-add') + ')');

        $li.before('<li class="new"><a>' + items[0] + '</a></li>');

        items.shift();

        if (!items.length) {
            $li.remove();
        } else {
            $this.attr('data-add', JSON.stringify(items));
        }

        Nav.update(true);
    });

    // call our plugin
    var Nav = $main_nav.hcOffcanvasNav(defaultData);

    // demo settings update

    const update = (settings) => {
        if (Nav.isOpen()) {
            Nav.on('close.once', function() {
                Nav.update(settings);
                Nav.open();
            });

            Nav.close();
        } else {
            Nav.update(settings);
        }
    };

    $('.actions').find('a').on('click', function(e) {
        e.preventDefault();

        var $this = $(this).addClass('active');
        var $siblings = $this.parent().siblings().children('a').removeClass('active');
        var settings = eval('(' + $this.data('demo') + ')');

        update(settings);
    });

    $('.actions').find('input').on('change', function() {
        var $this = $(this);
        var settings = eval('(' + $this.data('demo') + ')');

        if ($this.is(':checked')) {
            update(settings);
        } else {
            var removeData = {};
            $.each(settings, function(index, value) {
                removeData[index] = false;
            });

            update(removeData);
        }
    });
})(jQuery);

// 

// click

$(".search-mobile a").click(function(event) {
  $(".full-search").slideDown("active-search");
});
$(".times-search a").click(function() {
  $(".full-search").slideUp("active-search");
});

//

$(".about-main-list-menu ul li a").click(function(){
    $(".about-main-list-menu ul li a").removeClass("active-about");
    $(this).addClass("active-about");
});


