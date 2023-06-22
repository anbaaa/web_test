// JavaScript Document
//메뉴
$(".navi li").mouseover(function() {
	$(".submenu").stop ().slideDown();
	});

$(".navi li").mouseleave(function () {
	$(".submenu").stop().slideUp();
	});	    
	
	
//이미지슬라이딩
 var imgs=2;
  var now=0;

  start( );

  function start(){
  $(".imgslide>a").eq(0).siblings( ).animate({width:"-1250px"});
  
  setInterval(function(){
  now = now==imgs?0:now+=1;
  $(".imgslide>a").eq(now-1).animate({width:"-1250px"});   
  $(".imgslide>a").eq(now).animate({width:"1250px"});},3000); 
  }
  