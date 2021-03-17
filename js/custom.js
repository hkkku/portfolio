$(function(){
  $(".sideMenu").click(function(){
    $(this).toggleClass("on");
    if($(this).hasClass("on")){
      $(this).find("i").attr("class", "fa fa-times");
      $(".sideMenu").attr("onclick", "closeNav()")
    } else {
      $(this).find("i").attr("class", "fa fa-bars");
      $(".sideMenu").attr("onclick", "openNav()")
    }
  });

  $(".btnBox button").click(function(){
    let index = $(this).index();

    $(".potFrame").hide();
    $(".txtBox p").hide();
    $(".potFrame").eq(index).css('display', 'flex');
    $(".txtBox p").eq(index).show();
    $('.potSlider').eq(index).slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
      centerMode: true,
      centerPadding: '0',
      infinite: true,
      speed: 500,
      arrows: true,
      autoplay: true,
      easing: 'ease',
      responsive: [
        
        {
          breakpoint: 900,
          settings: {
            arrows: true,
            // centerMode: true,
            // centerPadding: '40px',
            fade: true,
            speed: 700,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            // centerMode: true,
            // centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  });
  
  $(".btnBox button").eq(0).trigger("click");

  $(".mobileMenu").click(function(){
    $(this).toggleClass("on");
    // on 과 off로 분기를 나눌 수 있다 -> if 구문 사용 가능
    if($(this).hasClass("on")){
      $(this).find("i").attr("class", "fa fa-times");
      $(this).find("i").css("color", "#eae6df");
      $(".mobileCate").slideDown("fast");
    } else {
      $(this).find("i").attr("class", "fa fa-bars");
      $(this).find("i").css("color", "#424266");
      $(".mobileCate").slideUp("fast");
    }
  });
});
