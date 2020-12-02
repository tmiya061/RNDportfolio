"use strict";
{
  // $(function () {
  //   $('.menu').on('click', function () {
  //     $(this).toggleClass('active');
  //     $("#nav").toggleClass('active');
  //   })
  // })
  //  $(function () {
  //   $('#nav a').on('click', function () {
  //     $('#nav').toggleClass('active');
  //     $(".menu").toggleClass('active');
  //   })
  // });

  const mouse = document.querySelector(".cursor");
  const mouseTxt = mouse.querySelector("span");
  const burger = document.querySelector(".burger");
  const divs = document.querySelectorAll("a");
  const navbar = document.querySelector(".nav-bar");

  function navToggle(e) {
    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
      gsap.to(".line1", 0.5, { rotate: "45", y: 5, background: "#FE3E57" });
      gsap.to(".line2", 0.5, { rotate: "-45", y: -5, background: "#FE3E57" });
      gsap.to("#logo", 1, { color: "black" });
      gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 100% -10%)" });
      document.body.classList.add("hide");
      navbar.classList.add("block");
    } else {
      e.target.classList.remove("active");
      gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "white" });
      gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "white" });
      gsap.to("#logo", 1, { color: "white" });
      gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
      document.body.classList.remove("hide");
      navbar.classList.remove("block");
    }
  }
  function navRemove(e) {
    e.target.classList.remove("active");
    gsap.to(".line1", 0.5, { rotate: "0", y: 0, background: "white" });
    gsap.to(".line2", 0.5, { rotate: "0", y: 0, background: "white" });
    gsap.to("#logo", 1, { color: "white" });
    gsap.to(".nav-bar", 1, { clipPath: "circle(50px at 100% -10%)" });
    document.body.classList.remove("hide");
  }
  burger.addEventListener("click", navToggle);
  divs.forEach((div) => div.addEventListener("click", navRemove));
  // window.addEventListener("mousemove", cursor);
  // window.addEventListener("mouseover", activeCursor);

  //Changing Title Effect
  const b = baffle(".baffle");
  b.set({
    characters: "█<▓ ░█▒█▒ ░▒/░█ ▓▒▓ █/██▒ █▓█/ █▒█ ░█▒█ ▓░█▒",
    speed: 120,
  });

  var i = 1;
  let changeTitle = () => {
    let titles = ["Retoucher", "Graphic Designer", "Front-End Enginner"];
    if (i == titles.length) {
      i = 0;
    }
    b.text((currentText) => titles[i]).reveal(1500);
    i++;
  };

  setInterval(changeTitle, 3200);
}
