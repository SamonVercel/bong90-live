var menuBtn = document.getElementById("menu-btn");
var closeBtn = document.getElementById("close-btn");
var nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  nav.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  nav.classList.remove("show");
});

var slide = document.querySelector(".slide");

let move = 0;
if (slide) {
  slide.style.transform = `translateX(${-move}%)`;
}
setInterval(() => {
  move += 100;
  slide.style.transform = `translateX(${-move}%)`;
  if (move < 500) {
    slide.style.transition = "transform 0.5s";
  }
  if (move >= 500) {
    setTimeout(() => {
      slide.style.transition = "none";
      move = 0;
      slide.style.transform = `translateX(${-move}%)`;
    }, 500);
  }
}, 6000);

document.querySelector(".to-right").addEventListener("click", () => {
  slide.style.transition = "transform 0.5s";
  if (move < 600) {
    move += 100;
    slide.style.transform = `translateX(${-move}%)`;
  } else {
    move = 0;
  }
});

document.querySelector(".to-left").addEventListener("click", () => {
  slide.style.transition = "transform 0.5s";
  if (move > 0) {
    move -= 100;
    slide.style.transform = `translateX(${-move}%)`;
  } else {
    move = 600;
  }
});

var swiper = new Swiper(".cubeSwiper2", {
  slidesPerView: 2,
  spaceBetween: 20,
  loop: true,
  autoplay: true,
  interval: 1000,
  grabCursor: true,
  pauseOnMouseEnter: true,
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//gif

document.getElementById("close-gif").addEventListener("click", function () {
  document.getElementById("gif").style.left = "-8rem";
});
document.getElementById("close-chat").addEventListener("click", function () {
  document.getElementById("chat").style.display = "none";
});
document.getElementById("show-chat").addEventListener("click", function () {
  document.getElementById("chat").style.display = "flex";
});

//Get Date
setInterval(() => {
  const d = new Date();
  let text = d.toLocaleString();
  document.getElementById("demo").innerHTML = text + " (GMT+7)";
}, 1000);
