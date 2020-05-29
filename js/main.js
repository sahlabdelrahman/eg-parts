$(document).ready(function(){
    
    // first carousel
    var brands = $('#brands');
    
    $('#brands').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        navText:["<img class='nav-btn prev-slide' src='images/home/icons/left.svg' >","<img class='nav-btn next-slide' src='images/home/icons/right (1).svg' >"],
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav: false,
        dots: false,
        singleItem: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:4
            },
            1000:{
                items:7
            }
        }
    })
    $('#brands').find('.owl-nav').removeClass('disabled');
    $('#brands').on('changed.owl.carousel', function(event) {
        $(this).find('.owl-nav').removeClass('disabled');
    });

    // second carousel
    var deal = $('#deal');
    $('#featured').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        navText:["<img class='nav-btn prev-slide' src='images/home/icons/prev.svg' >","<img class='nav-btn next-slide' src='images/home/icons/next.svg' >"],
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav: false,
        dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    $('#featured').find('.owl-nav').removeClass('disabled');
    $('#featured').on('changed.owl.carousel', function(event) {
        $(this).find('.owl-nav').removeClass('disabled');
    });


    // third carousel
    var deal = $('#deal');
    $('#deal').owlCarousel({
        loop:true,
        margin:15,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        nav: false,
        dots: false,
        navText:["<img class='nav-btn prev-slide' src='images/home/icons/prev.svg' >","<img class='nav-btn next-slide' src='images/home/icons/next.svg' >"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1200:{
                items:4
            }
        }
    });
    $('#deal').find('.owl-nav').removeClass('disabled');
    $('#deal').on('changed.owl.carousel', function(event) {
        $(this).find('.owl-nav').removeClass('disabled');
    });
});