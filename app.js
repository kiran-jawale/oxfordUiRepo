  
 
 //navbar//
 const toggleButton = document.getElementById('navToggle');
 const navMenu = document.getElementById('navMenu');

 toggleButton.addEventListener('click', () => {
     navMenu.classList.toggle('active');
 });
 //navbar End//
 //3d squares// 
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
//squares end


 // 3d image slider left to right   banners// 
 const emblaNode = document.querySelector('.embla')
  const options = { loop: false }
  const plugins = [EmblaCarouselAutoplay()]
  const emblaApi = EmblaCarousel(emblaNode, options, plugins)
//banners end

 // 3d image slider up to down // 

   /** image slider up to down  */

   var tl = gsap.timeline({scrollTrigger:{
    trigger:"#updown",
     markers:true,
    start:"38% 50%",
    end:"100% 50%",
    scrub:2,
    pin:true
}});


tl
.to(".text",{
    top: "-7%",
},'a')
.to("#card-one",{
    top: "35%",
},'a')
.to("#card-two",{
    top: "130%"
},'a')
.to("#card-two",{
    top: "42%"
},'b')
.to("#card-one",{
    width: "65%",
    height: "65vh"
},'b')
.to("#card-three",{
    top: "130%"
}, 'b')
.to("#card-three",{
    top: "50%"
}, 'c')
.to("#card-two",{
    width: "70%",
    height: "70vh"
},'c')

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