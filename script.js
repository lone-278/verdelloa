$(function (){
  //스크롤 이벤트
  $(window).scroll(function (){
    var nowscroll = $(window).scrollTop();
    var trigger = 90;
    
    if (nowscroll > trigger) {
      $("nav").addClass("scrolled");
    }else{
      $("nav").removeClass("scrolled");
    }
  })

  //슬라이드
  function slide (){
    $(".top ul").animate({left: "-1920px"},2000, function (){
      $(".top ul").append($(".top ul li:first-child"))
      $(".top ul").css({left:0})

      setTimeout (slide, 3000)
    })
  }
  setTimeout (slide, 3000)
})