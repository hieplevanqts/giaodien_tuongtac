$('.center_slide').slick({
     dots: true,
     arrows: false,
     infinite: true,
     speed: 1000,
     slidesToShow: 1,
     adaptiveHeight: true,
     autoplay: true,
     fade: true
   });

   $(document).ready(function(){
    $('#community_content').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('#shop_voucher_content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('#favourite_upcoming_event_content').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $("#upcoming_event_content").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    // $('#trend_voucher_1').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    // });
    

    
})