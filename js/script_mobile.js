$('.upcoming-content').slick({
     slidesToShow: 2,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 4000,
     responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
               breakpoint: 991,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,
                 infinite: true,
                 dots: true
               }
             },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
 });

 $('.slider-list').slick({
     slidesToShow: 2,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 4000,
     responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
               breakpoint: 991,
               settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,
                 infinite: true,
                 dots: true
               }
             },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }]
 });


 		$(window).on('scroll', function() {
				var pos_body = $('html,body').scrollTop();
				if(pos_body>50){
					$(".header-top-wraper").addClass('fix-top')
          $("#back_top").css("display", "block")
				}
				else {
					$(".header-top-wraper").removeClass('fix-top')
          $("#back_top").css("display", "none")
				}
		});

    $('#mobile_community #community_content').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      responsive: [
           {
             breakpoint: 1024,
             settings: {
               slidesToShow: 3,
               slidesToScroll:3,
               infinite: true,
               dots: true
             }
           },
           {
                breakpoint: 991,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
           {
             breakpoint: 600,
             settings: {
               slidesToShow: 3,
               slidesToScroll: 3
             }
           },
           {
             breakpoint: 480,
             settings: {
               slidesToShow: 2,
               slidesToScroll: 2
             }
           }]
  });


  $(document).ready(function(){

    $('#back_top').click(function(){
      $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })

    $(".icon-menu i").click(function(){
      $(".icon-menu .fa-bars").toggleClass("hide-icon")
      $(".icon-menu .fa-times").toggleClass("hide-icon")
      $(".mb-menu").toggleClass("is-visible")

    

    $(".mb-menu ul").removeClass("show-sub2menu")
    $(".mb-menu ul").removeClass("show-submenu")
    // $(".mb-menu ul a").parent().toggleClass("has-not-submenu")
    // $(".mb-menu ul a").parent().toggleClass("has-submenu")

    })

    $(".has-submenu").click(function(){
      $(this).parent().children("ul").toggleClass("show-sub2menu")
      $(this).toggleClass("has-submenu")
      $(this).toggleClass("has-not-submenu")
    })

    $(".has-sub2menu").click(function(){
      $(this).parent().children("ul").toggleClass("show-sub2menu")
      $(this).toggleClass("has-sub2menu")
      $(this).toggleClass("has-not-sub2menu")
    })

  })



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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
           breakpoint: 991,
           settings: {
             slidesToShow: 5,
             slidesToScroll: 1,
             infinite: true,
             dots: true
           }
         },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }]
    // vertical: true,
  });