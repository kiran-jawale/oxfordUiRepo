//nav sidebar//
var channelPartnerButton = document.querySelector("#channel-partner-id");
var channelPartnerClose = document.querySelector("#close-ch-partner");

var time = gsap.timeline();

time.to("#ChannelPartner",{
    right: 2,
    duration:0.2
});
 
time.from("#ChannelPartner #ul li",{
    x: 150,
    duration:0.1,
    stagger:0.1,
    opacity:0,
}); 
time.pause();

channelPartnerButton.addEventListener("click",() => {
    channelPartnerButton.style.display = "none"
    time.play();
});
 

channelPartnerClose.addEventListener("click",()=> {
  time.reverse(0.5); // Reverse the timeline with a duration of 0.3 seconds
  //if no params, then as per durations
  channelPartnerButton.style.display = "block";
});

//nav sidebar end//

//navbar//

const toggleButton = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

toggleButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
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
    pauseOnMouseEnter: true,
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
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
//squares end

// 3d image slider left to right   banners//
const emblaNode = document.querySelector(".embla");
const options = { loop: false };
const plugins = [EmblaCarouselAutoplay()];
const emblaApi = EmblaCarousel(emblaNode, options, plugins);
//banners end

// 3d image slider up to down //
// ...

// 3d image slider up to down //

/** image slider up to down  */


var tl = gsap.timeline({scrollTrigger:{
  trigger:"#updown",
  // markers:true,
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
 // Existing GSAP animation for desktop screens

// New GSAP animation for mobile screens
// Existing GSAP animation for desktop screens
// New GSAP animation for mobile screens
var tlSmall = gsap.timeline({
  scrollTrigger: {
    trigger: "#updown-small",
    start: "30% 80% ",
    end: "55% 95%",
   
    //markers:true,
    scrub:1,
  },
});

tlSmall.from(
  "#card-one-small",
  {
    x: -100,
    opacity: 0,
    duration : 0.01,
  },
  "a"
)
  .from(
    "#card-two-small",
    {
      x: 100,
      opacity: 0,
      duration:0.1,
    },
    "a"
  )
  .from(
    "#card-three-small",
    {
      y: 100,
      opacity: 0,
      duration: 0.1,
    },
    "a"
  );
// ...
// 3d image slider up to down end //
// Company numbers  //

// Company numbers End //
// testmonial//

$(".testimonials-container").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 6000,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    600: {
      items: 1,
      nav: true,
    },
    768: {
      items: 2,
    },
  },
});

// testmonial end//
//footer//

//footer End//
const metricsStatNumbers = document.querySelectorAll(".metrics-stat-number");
const metricsStats = document.querySelector(".metrics-stats");

metricsStatNumbers.forEach((statNumber) => {
  const num = parseInt(statNumber.getAttribute("data-num"), 10);

  gsap.fromTo(
    statNumber,
    { textContent: "0" },
    {
      textContent: num,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: metricsStats,
        start: "10% 95%",
        end: "10% 90%",
        toggleActions: "play play none none",
        //  markers: true,
      },
      onUpdate: function () {
        statNumber.textContent = Math.floor(statNumber.textContent);
      },
    }
  );
});
