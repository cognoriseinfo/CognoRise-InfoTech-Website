// let wrapper = document.querySelector(".wrapper");
// let loginLink = document.querySelector(".login-link");
// let registerLink = document.querySelector(".register-link");

// registerLink.addEventListener("click", () => {
//   wrapper.classList.add("active");
// });

// loginLink.addEventListener("click", () => {
//   wrapper.classList.remove("active");
// });
// const form = document.querySelector("form");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = form.username.value;
    const password = form.password.value;

    const authenticated = authentication(username, password);

    if (authenticated) {
      window.location.href = "dashboard.html";
    } else {
      alert("wrong");
    }
  });
});
// function for checking username and password

function authentication(username, password) {
  if (username === "admin" && password === "password") {
    return true;
  } else {
    return false;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  let wrapper = document.querySelector(".wrapper");
  let loginLink = document.querySelector(".login-link");
  let registerLink = document.querySelector(".register-link");

  registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
  });

  loginLink.addEventListener("click", () => {
    wrapper.classList.remove("active");
  });
});

function openLink() {
  let linkUrl =
    "https://docs.google.com/forms/d/1yvWchnI8idySqHCW6kn8n3F-pYxzqSj2AjOjjhTjMi4/edit";

  window.open(linkUrl, "_blank");
}
function openLinkH() {
  let linkUrl = "https://forms.gle/hvz5mwyiQV8hDYrB6";

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

var currentDownDate = new Date("June 28, 2024 00:00:00").getTime();

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

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hrs").innerHTML = "00";
    document.getElementById("mins").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
  }
}, 1000);
