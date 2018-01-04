$(document).ready(function() {



  $(window).scroll(function() {
    if ( $(this).scrollTop() >= 100 ) {
      $('nav').addClass('fixed')
    } else {                                        //fix gamburger
      $('nav').removeClass('fixed')
    }
  })
	
  $(".nav-menu").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top - 70;
    $('body,html').animate({scrollTop: top}, 1500);
  });

  $('.carousel').carousel();



  $('.play-video-url').hover(
    function() {
      $(this).parent().parent().find('.play-video').addClass('play-hover');
    },
    function() {
     $(this).parent().parent().find('.play-video').removeClass('play-hover');
   })



  $('#scroll-btn').draggable({
    containment: "parent",
    refreshPositions: true 
  });

  $( "#scroll-btn" ).on( "drag", function() {
    var btnX = $('#scroll-btn').position().left - $('.my-scroll-bar').position().left,
        barWidth = $('.my-scroll-bar').outerWidth(),
        contWidth = $('.scroll-cont').outerWidth() - barWidth,
        contX = btnX / barWidth * contWidth;
        $('.scroll-cont').css({'left': -contX + 'px'});
  });

 $(".visible-scroll").height($('.scroll-cont').height());
 $(window).resize(function() {
  $(".visible-scroll").height($('.scroll-cont').height());
 })


$('.info-btn').draggable({
    containment: "parent",
    axis: 'y',
    refreshPositions: true,

  });
$( ".info-btn" ).on( "drag", function() {
   var btnY = $('.info-btn').position().top - $('.info-scroll').position().top,
      btnHeight = $('.info-btn').outerHeight(),
      barHeight = $('.info-scroll').outerHeight() - btnHeight,
      contHeight = $('.info-text').outerHeight() - barHeight - btnHeight,
      contY = btnY / barHeight * contHeight;
      $('.info-text').css({'top': -contY + 'px'});
  });



function timer() { setTimeout(function() {

  var end = new Date(2018, 0, 1),
      start = new Date(),
      left = end - start,
      res = new Date(left);
        
    $('.timer-days').text(res.getUTCDate() - 1);
    $('.timer-hours').text(res.getUTCHours());
    $('.timer-minutes').text(res.getUTCMinutes());
    $('.timer-seconds').text(res.getUTCSeconds());
       
timer();

}, 500)}

timer();

$('.info').mouseenter(function() {
  $('.info-box').delay(3000).removeClass('invisible')
})

 
 $(document).click(function(event) {
    if ($(event.target).closest(".info-box").length) return;
    $(".info-box").addClass("invisible");
    event.stopPropagation();
  });


$('.catalog-owl').owlCarousel({
    navText:[],
    loop:true,
    merge:true,
    autoplay:true,
    margin:20,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            merge:true,
            center:true,
            margin: 30
        },
        480:{
            items:2,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})

$('.gallery-owl').owlCarousel({
  margin: 15,
  loop:true,
  navText:[],
  nav: true,
  responsive:{
        0:{
            items:4,
            nav:true,
            merge:true,
            center:true,
            margin: 15
        },
        768:{
            items:3,
            nav:true
        }
    }
});



})
