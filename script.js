//
//-- JavaScript for testimonial corasual
// -- and Hamburger Nav.
//
//

//==== Testimonial Section script ====
$(".testimonial-container").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  margin: 10,
  nav: true,
  navText: [
    "<i class='fa-solid fa-arrow-left'></i>",
    "<i class='fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    /*
    1000: {
      items: 5,
    },
    */
  },
});

//==== Hamburger JS Code ====

let menuList = document.getElementById("menu-list");
const hamburgerToggle = document.getElementById("hamburger-bars");
menuList.style.maxHeight = "0px";

hamburgerToggle.addEventListener("click", () => {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "500px";
    hamburgerToggle.classList.replace("fa-bars", "fa-xmark");
  } else {
    menuList.style.maxHeight = "0px";
    hamburgerToggle.classList.replace("fa-xmark", "fa-bars");
  }
});

//==== Scroll to Top Button ====
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  let scrollValue = Math.round((pos * 100) / calcHeight);

  //-- condition to display button ...
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  //-- EventListener to scroll to top on one click ...
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  //--scroll wheel ...
  scrollProgress.style.background = `conic-gradient(red ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
