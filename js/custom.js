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

  
  // function progressing(){

  //   var bar = $(".bar")
  
  //   for(i=0; i< bar.length; i++){
  //     var progress = $(".bar").eq(i).find(".progress").attr("value");
  //     console.log(progress);
  //     $(".bar").find(".progress").eq(i).animate({width: progress + "%" }, 3000);
  //   }
  // }

  // progressing()
 
});
