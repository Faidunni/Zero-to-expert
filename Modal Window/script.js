"use strict";

// const modal = document.querySelector(".modal");
// const overlay = document.querySelector(".overlay");
// const btnClosedModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".btn");
const display = document.querySelectorAll(".display");
const close = document.querySelectorAll(".close");
const modal = document.querySelector(".modal");
console.log(btnsOpenModal);
console.log(display);

for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent);

// working with classes
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", function () {
    console.log("Button clicked");
    modal.classList.toggle("hidden");
    close.classList.toggle("active");
    display.classList.toggle("active");
  });

const closedModal = function () {
  modal.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
};

// btnClosedModal.addEventListener("click", closedModal);

overlay.addEventListener("click", closedModal);

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closedModal();
  }
});
