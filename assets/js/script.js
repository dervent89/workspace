$(document).ready(function(){
   var mainSlider = new Swiper('.main-slider .swiper-container',{
      speed: 400,
      parallax: true,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
   });
   $('.component > .component-header').on('click',function(){
      $(this).parent('li').addClass('active');
      $('body').addClass('no-scroll');
   });
   $('.component > .component-overlay').on('click',function(){
      $(this).parent('li').removeClass('active');
      $('body').removeClass('no-scroll');
   });
});