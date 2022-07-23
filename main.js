"use strict";

//***********RANDOMLY GENERALLY TIPS*********
//Will export this data to another document in the future

const htmlTips = [
  "What does a doctype do?",
  "How do you serve a page with content in multiple languages?",
  "What kind of things must you be wary of when design or developing for multilingual sites?",
];

const cssTips = [
  "What is CSS selector specificity and how does it work?",
  "What's the difference between 'resetting' and 'normalizing' CSS? Which would you choose, and why?",
  "Describe z-index and how stacking context is formed.",
];

document
  .querySelector(".html")
  .addEventListener(
    "click",
    () =>
      (document.querySelector("#tipParagraph").textContent =
        htmlTips[Math.floor(Math.random() * htmlTips.length)])
  );

document
  .querySelector(".css")
  .addEventListener(
    "click",
    () =>
      (document.querySelector("#tipParagraph").textContent =
        cssTips[Math.floor(Math.random() * cssTips.length)])
  );

const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
