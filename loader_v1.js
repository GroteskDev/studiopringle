// Loader
let pageInitTl = gsap.timeline({ paused: true });

pageInitTl
  .to(".loader-wrap", {
    opacity: 0,
    duration: 0.5,
    delay: 6,
  })
  .set(".loader-wrap", { display: "none" });

let loader = document.querySelector(".loader-wrap");

// HIDE LOADER
function hideLoader() {
  loader.style.display = "none";
}

if (sessionStorage.getItem("visited") == null) {
  pageInitTl.restart();

  loader.addEventListener("click", hideLoader);

  sessionStorage.setItem("visited", "true");
} else {
  hideLoader();
}
