"use strict";

//TODO
//figure out how prevent the same tip from displaying back to back


//LOOK --->IMPORTING DATA FROM ANOTHER FILE USING MODULES.
// Interestingly we can import array data from another document by using modules. It doesn't seem to work within the main.js file but it will work directly in the html file. Had to use import vs required as require only works on server side...https://tinyurl.com/2p8pxzya
// import { behavorTips } from "./data.js";
// import { htmlTips } from "./data.js";


//LOOK ---> modal behavior
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const moreModal = document.querySelector(".more-modal");

//HELPER FUNCTIONS
function openModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

function moreModalFunc(tipsFunc) {
  moreModal.addEventListener("click", tipsFunc);
}

function randomTipsGen(tips) {
  document.querySelector("#tipParagraph").textContent =
    tips[Math.floor(Math.random() * tips.length)];
}

//MODAL BEHAVIOR

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener('click', closeModal)

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//LOOK --->ADDED API. Someday...PetFinder api.
//For now it will be one cute pic of a dog per question...

document.querySelector(".show-modal").addEventListener("click", getPics);

function getPics() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(".surprise-image").src = data.message;
    })
    .catch((err) => {
      console.log("error ${err}");
    });

  moreModalFunc(getPics);
}

//LOOK ---> calling and rendering the tips to the modal

//SURPRISE
document.querySelector(".surprise").addEventListener("click", getSurpriseTips);

function getSurpriseTips() {
  randomTipsGen(surpriseTips);
  moreModalFunc(getSurpriseTips);
}

//BEHAVIORAL
document.querySelector(".behavorial").addEventListener("click", getBehavorTips);

function getBehavorTips() {
  randomTipsGen(behavorTips);
  moreModalFunc(getBehavorTips);
}

//HTML
document.querySelector(".html").addEventListener("click", getHtmlTips);

function getHtmlTips() {
  randomTipsGen(htmlTips);
  moreModalFunc(getHtmlTips);
}

//css
document.querySelector(".css").addEventListener("click", getCssTips);

function getCssTips() {
  randomTipsGen(cssTips);
  moreModalFunc(getCssTips);
}

//JS
document.querySelector(".js").addEventListener("click", getJsTips);

function getJsTips() {
  randomTipsGen(jsTips);
  moreModalFunc(getJsTips);
}

//Node
document.querySelector(".node").addEventListener("click", getNodeTips);

function getNodeTips() {
  randomTipsGen(nodeTips);
  moreModalFunc(getNodeTips);
}



