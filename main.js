// document.querySelector(".show-modal").addEventListener("click", answer);

// let meowAnswers = [
//   "You should go for it!",
//   "No way, Bro!",
//   "You know what you need to do",
// ];

// function answer() {
//   let answer = meowAnswers[Math.floor(Math.random() * meowAnswers.length)];

//   const questionField = document.querySelector("#questionField").value;

//   alert(answer);
// }

"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    console.log("button clicked!");
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

btnCloseModal.addEventListener("click", function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});
