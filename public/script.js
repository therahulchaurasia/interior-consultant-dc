let modalOpen = document.getElementById("open-modal");
let modalClose = document.getElementById("close-modal");
let modal = document.getElementById("modal");
let tags = document.querySelectorAll(".tags");
let year = document.querySelector(".year");
let toTop = document.getElementById("toTop");
let backToTop = document.getElementById("backtoTop");
// console.log(toTop);

modalOpen.addEventListener("click", () => {
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
});
modalClose.addEventListener("click", () => {
  modal.classList.add("hidden");
  document.body.style.overflow = "auto";
});
tags.forEach((tag) => {
  tag.addEventListener("click", () => {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  });
});

const date = new Date();
year.innerHTML = date.getFullYear();

window.addEventListener("scroll", () => {
  const scrollHeight = window.scrollY;
  // console.log(scrollHeight);
  if (scrollHeight > 300) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
