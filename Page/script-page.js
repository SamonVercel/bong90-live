var menuBtn = document.getElementById("menu-btn");
var closeBtn = document.getElementById("close-btn");
var nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  nav.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  nav.classList.remove("show");
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
