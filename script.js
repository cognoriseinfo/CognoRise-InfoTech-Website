function openLink() {
  let linkUrl = "https://forms.gle/hioyFNq7MA9vVH9SA";

  window.open(linkUrl, "_blank");
}
function openLinkH() {
  let linkUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLSczuX-KtdS5Fclf4S4G-IqUJ2lMk1jZ_e3xWLaQAWEZkYWhVg/viewform?pli=1";

  window.open(linkUrl, "_blank");
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

window.onload = function () {
  window.addEventListener("scroll", function (e) {
    if (window.pageYOffset > 100) {
      document.querySelector("header").classList.add("is-scrolling");
    } else {
      document.querySelector("header").classList.remove("is-scrolling");
    }
  });

  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });

  document.querySelectorAll(".nav-link").forEach((n) =>
    n.addEventListener("click", () => {
      menu_btn.classList.remove("is-active");
      mobile_menu.classList.remove("is-active");
    })
  );
};

function show() {
  document.querySelector(".hamburger").classList.toggle("open");
  document.querySelector(".navigation").classList.toggle("active");
}

var currentDownDate = new Date("Mar 15, 2024 00:00:00").getTime();

var x = setInterval(() => {
  var now = new Date().getTime();
  var distance = currentDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var sec = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;

  document.getElementById("hrs").innerHTML = hours;
  document.getElementById("mins").innerHTML = mins;
  document.getElementById("sec").innerHTML = sec;
}, 1000);
