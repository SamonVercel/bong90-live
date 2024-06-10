var menuBtn = document.getElementById("menu-btn");
var closeBtn = document.getElementById("close-btn");
var nav = document.getElementById("nav");

menuBtn.addEventListener("click", function () {
  nav.classList.add("show");
});

closeBtn.addEventListener("click", function () {
  nav.classList.remove("show");
});



//Get Date
setInterval(() => {
  const d = new Date();
  let text = d.toLocaleString();
  document.getElementById("demo").innerHTML = text + " (GMT+7)";
}, 1000);
