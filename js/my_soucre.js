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
        slidesToScroll: 5,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $("#upcoming_event_content").slick({
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $("#upcoming_event_content2").slick({
      slidesToShow: 5,
      slidesToScroll: 5,
      autoplay: true,
      autoplaySpeed: 5000,
  });

    // $('#trend_voucher_1').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 5000,
    // });
 

      $('.sider-full').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.previews'
      });
      $('.previews').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.sider-full',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
      });


      $('.slick-slide').click(function(){
        $('.slick-slide img').removeClass('img-slide-active')
          $(this).children('img').addClass('img-slide-active')
      })
        
//     $("#zoom").glassCase({
//         'widthDisplay': 512,
//         'heightDisplay': 512,
//         'nrThumbsPerRow': 5,
//         'isSlowZoom': true,
//         'thumbsPosition': 'bottom',
//         'colorIcons': '#fff',
//         'colorActiveThumb': '#00aef0'
    
// })

$('.sidebar .box-local .local-content .local-item').click(function(){
    $('.sidebar .box-local .local-content .local-item').removeClass('active')

    $(this).toggleClass('active')
    $(this).children('ul').toggleClass('show');
    $(this).children('.fa-chevron-right').toggle()
    $(this).children('.fa-chevron-down').toggle()
})

$(".price-range h3 i").click(function(){
    var parent = $(this).parent().parent()
    $(parent).children('local-content').toggle()
})

$('.head-2 button').click(function(){
    $('.head-sort').fadeToggle('head-sort-active')
})


   });