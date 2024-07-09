//
//-- JavaScript for Scroll Animation
//-- to animate when page scroll
//-- to the section
//
//
//
//==== About Scroll Animation ====

document.addEventListener("scroll", () => {
  const aboutMeTitle = document.getElementById("about-me");
  const aboutMeMsg = document.getElementById("about-me-msg");

  if (window.scrollY > 200) {
    aboutMeTitle.classList.add(
      "animate__animated",
      "animate__fadeInUp",

      "animate__slow"
    );
    aboutMeTitle.classList.remove("hideEl");

    aboutMeMsg.classList.add(
      "animate__animated",
      "animate__bounceIn",
      "animate__delay-1s",
      "animate__slow"
    );
    aboutMeMsg.classList.remove("hideEl");
  }
});

//==== Project Scroll Animation ====

document.addEventListener("scroll", () => {
  const projectCards = document.getElementById("project-cards");
  const introFtrowOne = document.querySelector(".intro-ftrow-one");
  const introFtrowTwo = document.querySelector(".intro-ftrow-two");
  const introSdrowThree = document.querySelector(".intro-sdrow-three");
  const introSdrowFour = document.querySelector(".intro-sdrow-four");

  if (window.scrollY > 700) {
    projectCards.classList.add(
      "animate__animated",
      "animate__zoomIn",
      "animate__delay-1s",
      "animate__slow"
    );
    projectCards.classList.remove("hideEl");

    introFtrowOne.classList.remove("hideEl");
    introFtrowTwo.classList.remove("hideEl");
    introSdrowThree.classList.remove("hideEl");
    introSdrowFour.classList.remove("hideEl");
  }
});
