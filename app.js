 
 
 //navbar//
 var menu = document.querySelector("#nav i")
 var cross = document.querySelector("#full i")


 var tl =gsap.timeline()
  
 tl.to("#full",{
right:0,
duration:0.5

 })

 tl.from("#full h4",{

   x:150,
   duration:0.5,
   stagger:0.3,
   opacity:0
 })

 tl.from("#full i",{
opacity:0
 })

tl.pause()

 
 menu.addEventListener("click",function(){
tl.play()

 })
 cross.addEventListener("click",function(){
  tl.reverse()

 })
 //navbar End//
 //image slider// 
 var swiper = new Swiper(".mySwiper", {
   effect: "coverflow",
   grabCursor: true,
   centeredSlides: true,
   slidesPerView: "auto",
   loop: true,
   autoplay: {
     delay: 3000,
     disableOnInteraction: false,
     pauseOnMouseEnter: true
   },
   speed: 600,
   coverflowEffect: {
     rotate: 50,
     stretch: -20,
     depth: 100,
     modifier: 1,
     slideShadows: true,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true, 
     dynamicBullets: true
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   }
 });
 // 3d image slider left to right End // 
 // 3d image slider up to down // 



 // 3d image slider up to down end // 
 // Company numbers  // 


 // Company numbers End // 
 // testmonial// 
 
$('.testimonials-container').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:6000,
  margin:10,
  nav:true,
  navText:["<i class='fa-solid fa-arrow-left'></i>",
           "<i class='fa-solid fa-arrow-right'></i>"],
  responsive:{
      0:{
          items:1,
          nav:false
      },
      600:{
          items:1,
          nav:true
      },
      768:{
          items:2
      },
  }
})


 // testmonial end// 
 //footer//


 //footer End//