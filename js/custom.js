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
  })

  
});
