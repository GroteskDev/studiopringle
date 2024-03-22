console.log("Hello");

let navMob = document.querySelector(".nav-mob-menu-btn"); //
let navLineEl = document.querySelectorAll(".nav-mob-menu-line"); //
let menuContainEl = document.querySelector(".nav-menu-wrap-mob"); //
let flipItemEl = document.querySelector(".nav-mob-bg");
let menuLinkEl = document.querySelectorAll(".nav-text-wrap.is-mob");
let menuWrapEl = document.querySelector(".nav-menu-wrap-mob");

menuLinkEl.forEach((element) => {
  element.style.opacity = 1;
});

let tl = gsap.timeline({ paused: true });
let flipDuration = 0.25;

function flip(forwards) {
  let state = Flip.getState(flipItemEl);
  if (forwards) {
    menuContainEl.appendChild(flipItemEl);
  } else {
    navMob.appendChild(flipItemEl);
  }
  Flip.from(state, { duration: flipDuration });
}

tl.set(menuWrapEl, { display: "flex" });
tl.from(menuWrapEl, {
  duration: flipDuration,
  ease: "none",
  onStart: () => {
    flip(true);
  },
});
tl.to(flipItemEl, { borderRadius: 0, duration: 0.25 }, "<");
tl.to(navLineEl[0], { y: 3, rotate: 45, duration: 0.1 }, "<");
tl.to(navLineEl[1], { y: -3, rotate: -45, duration: 0.1 }, "<");
tl.from(menuLinkEl, {
  opacity: 0,
  // yPercent: 50,
  duration: 0.2,
  stagger: { amount: 0.2 },
  onStart: () => console.log("Animation started"),
  onComplete: () => console.log("Animation completed"),
  onReverseComplete: () => {
    flip(false);
  },
});

navMob.addEventListener("click", function () {
  this.classList.toggle("nav-open");
  if (this.classList.contains("nav-open")) {
    tl.play();
  } else {
    tl.reverse();
  }
});

function mobileNav() {
  if (window.innerWidth > 99) {
    tl.reverse();
  }
}

// window.addEventListener("load", mobileNav);
