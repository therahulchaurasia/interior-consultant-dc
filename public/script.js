let modalOpen = document.getElementById("open-modal");
let modalClose = document.getElementById("close-modal");
let modal = document.getElementById("modal");
let tags = document.querySelectorAll(".tags");
let year = document.querySelector(".year");

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
