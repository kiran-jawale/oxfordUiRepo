




const linksData = {
  "about": { sidebarLinks: [] },
  "channel-partners": {
    sidebarLinks: [
      { title: "Consumer Products", target: "#consumer-products", status: "subsidebar", subSidebarLinks: [
        { title: "Anchor", target: "#anchor" },
        { title: "Finolex", target: "#finolex" },
        { title: "Clair", target: "#clair" }
      ]},
      { title: "Industrial Products", target: "#industrial-products", status: "subsidebar", subSidebarLinks: [
        { title: "Manglam", target: "#manglam" },
        { title: "Polycab", target: "#polycab" }
      ]}
    ]
  },
  "products": {
    sidebarLinks: [
      { title: "Product A", target: "#product-a", status: "subsidebar", subSidebarLinks: [
        { title: "Details A1", target: "#details-a1" },
        { title: "Details A2", target: "#details-a2" }
      ]},
      { title: "Product B", target: "#product-b", status: "subsidebar", subSidebarLinks: [
        { title: "Details B1", target: "#details-b1" },
        { title: "Details B2", target: "#details-b2" }
      ]}
    ]
  },
  "contact": {
    sidebarLinks: [
      { title: "Office Locations", target: "#office-locations", status: "subsidebar", subSidebarLinks: [
        { title: "Headquarters", target: "#headquarters" },
        { title: "Branch Office", target: "#branch-office" }
      ]},
      { title: "Customer Support", target: "#customer-support", status: "subsidebar", subSidebarLinks: [
        { title: "Email Support", target: "#email-support" },
        { title: "Phone Support", target: "#phone-support" }
      ]}
    ]
  }
};

const closeSidebarButton = document.querySelector("#close-sidebar");
const closeSubSidebarButton = document.querySelector("#close-sub-sidebar");
const sidebarContainer = document.querySelector("#sidebar");
const sidebarContent = document.querySelector("#sidebar-content");
const subSidebarContainer = document.querySelector("#sub-sidebar");
const subSidebarContent = document.querySelector("#sub-sidebar-content");
const navLinks = document.querySelectorAll(".nav-link");
let activeNavLink = null;
let activeSidebarLink = null;

function openSidebar() {
  sidebarContainer.classList.add("open");
}

function closeSidebar() {
  sidebarContainer.classList.remove("open");
  sidebarContent.innerHTML = ""; // Remove sidebar content
  closeSubSidebar();
  if (activeNavLink) {
    activeNavLink.classList.remove("active");
    activeNavLink = null;
  }
}

function openSubSidebar() {
  subSidebarContainer.classList.add("open");
}

function closeSubSidebar() {
  subSidebarContainer.classList.remove("open");
  subSidebarContent.innerHTML = ""; // Remove sub-sidebar content
  if (activeSidebarLink) {
    activeSidebarLink.classList.remove("active");
    activeSidebarLink = null;
  }
}

function handleNavLinkClick(event) {
  const target = event.target;
  const dataTarget = target.getAttribute("data-target");
  const status = target.getAttribute("data-status");

  // Ignore redirection links
  if (status === "redirect") return;

  // Close sub-sidebar if it's open
  closeSubSidebar();

  // Close sidebar if it's already open and the same link is clicked
  if (activeNavLink && activeNavLink === target) {
    closeSidebar();
    return;
  }

  // Close sidebar if it's already open and another link is clicked
  if (activeNavLink && activeNavLink !== target) {
    activeNavLink.classList.remove("active");
  }

  target.classList.add("active");
  activeNavLink = target;

  // Only show sidebar if it’s hidden
  if (!sidebarContainer.classList.contains("open")) {
    openSidebar();
  }

  renderSidebarContent(dataTarget);
}

function renderSidebarContent(dataTarget) {
  const sidebarData = linksData[dataTarget];
  if (!sidebarData) return;

  const sidebarLinksHtml = sidebarData.sidebarLinks.map(link => {
    return `<li><a href="#" data-target="${link.target}" data-status="${link.status}" data-nav="${dataTarget}">${link.title}</a></li>`;
  }).join("");

  sidebarContent.innerHTML = `<ul id="sidebar-links">${sidebarLinksHtml}</ul>`;

  const sidebarLinksElements = document.querySelectorAll("#sidebar-links a");
  sidebarLinksElements.forEach(link => {
    const status = link.getAttribute("data-status");
    if (status !== "redirect") {
      link.addEventListener("click", handleSidebarLinkClick);
    }
  });
}

function handleSidebarLinkClick(event) {
  const target = event.target;
  const dataTarget = target.getAttribute("data-target");
  const parentNav = target.getAttribute("data-nav");
  const status = target.getAttribute("data-status");

  // Ignore redirection links
  if (status === "redirect") return;

  if (activeSidebarLink && activeSidebarLink !== target) {
    activeSidebarLink.classList.remove("active");
  }

  target.classList.add("active");
  activeSidebarLink = target;

  // Only show sub-sidebar if it’s hidden
  if (!subSidebarContainer.classList.contains("open")) {
    openSubSidebar();
  }

  renderSubSidebarContent(parentNav, dataTarget);
}

function renderSubSidebarContent(parentNav, dataTarget) {
  const sidebarData = linksData[parentNav];
  if (!sidebarData) return;

  const subSidebarData = sidebarData.sidebarLinks.find(link => link.target === dataTarget);
  if (!subSidebarData || !subSidebarData.subSidebarLinks) return;

  const subSidebarLinksHtml = subSidebarData.subSidebarLinks.map(link => {
    return `<li><a href="${link.target}">${link.title}</a></li>`;
  }).join("");

  subSidebarContent.innerHTML = `<ul>${subSidebarLinksHtml}</ul>`;
}

closeSidebarButton.addEventListener("click", closeSidebar);
closeSubSidebarButton.addEventListener("click", closeSubSidebar);

navLinks.forEach(link => {
  const status = link.getAttribute("data-status");
  if (status !== "redirect") {
    link.addEventListener("click", handleNavLinkClick);
  }
});
//end

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
