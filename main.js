"use strict";

//TODO
//Will export array data to another document in the future
//need to refactor tips functions into one multi-use one...
//figure out how prevent the same tip from displaying back to back

//LOOK ---> modal behavior
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const moreModal = document.querySelector(".more-modal");

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

//LOOK ---> calling and rendering the tips to the modal

//BEHAVIORAL
document.querySelector(".behavorial").addEventListener("click", getBehavorTips);

function getBehavorTips() {
  document.querySelector("#tipParagraph").textContent =
    behavorTips[Math.floor(Math.random() * behavorTips.length)];
  moreModal.addEventListener("click", getBehavorTips);
}

//HTML
document.querySelector(".html").addEventListener("click", getHtmlTips);

function getHtmlTips() {
  document.querySelector("#tipParagraph").textContent =
    htmlTips[Math.floor(Math.random() * htmlTips.length)];
  moreModal.addEventListener("click", getHtmlTips);
}

//css
document.querySelector(".css").addEventListener("click", getCssTips);

function getCssTips() {
  document.querySelector("#tipParagraph").textContent =
    cssTips[Math.floor(Math.random() * cssTips.length)];
  moreModal.addEventListener("click", getCssTips);
}

//JS
document.querySelector(".js").addEventListener("click", getJsTips);

function getJsTips() {
  document.querySelector("#tipParagraph").textContent =
    jsTips[Math.floor(Math.random() * jsTips.length)];
  moreModal.addEventListener("click", getJsTips);
}

//Node
document.querySelector(".node").addEventListener("click", getNodeTips);

function getNodeTips() {
  document.querySelector("#tipParagraph").textContent =
    nodeTips[Math.floor(Math.random() * nodeTips.length)];
  moreModal.addEventListener("click", getNodeTips);
}

//Surprise
document.querySelector(".surprise").addEventListener("click", getSurpriseTips);

function getSurpriseTips() {
  document.querySelector("#tipParagraph").textContent =
    surpriseTips[Math.floor(Math.random() * surpriseTips.length)];
  moreModal.addEventListener("click", getSurpriseTips);
}

//LOOK ---> TIPS

const behavorTips = [
  "Give me an example of the project or initiative that you started on your own. It can be a non-business one. What prompted you to get started?",
  "Tell me about a time you had to work on several projects at once. How did you handle this?",
  "Describe a situation in which you felt you had not communicated well enough. What did you do? How did you handle it?",
  "Tell me about when you had to deal with conflict within your team. How was the conflict solved? How did you handle that? How would you deal with it now?",
  "Give me an example of a time you had to take a creative and unusual approach to solve coding problem. How did this idea come to your mind? Why do you think it was unusual?",
];

const htmlTips = [
  "What does a doctype do?",
  "How do you serve a page with content in multiple languages?",
  "What kind of things must you be wary of when design or developing for multilingual sites?",
  "What are data- attributes good for?",
  "Consider HTML5 as an open web platform. What are the building blocks of HTML5?",
];

const cssTips = [
  "What is CSS selector specificity and how does it work?",
  "What's the difference between 'resetting' and 'normalizing' CSS? Which would you choose, and why?",
  "Describe z-index and how stacking context is formed.",
  "Describe BFC (Block Formatting Context) and how it works.",
];

const jsTips = [
  "Explain how event delegation works in JavaScript.",
  "Explain how prototypal inheritance works.",
  "What do you think of AMD vs CommonJS?",
  "Explain why the following doesn't work as an IIFE: function foo(){ }();. What needs to be changed to properly make it an IIFE?",
  "What's the difference between a variable that is: null, undefined or undeclared? How would you go about checking for any of these states?",
];

const nodeTips = [
  "What is Node.js? Where can you use it?",
  "Why use Node.js?",
  "What are the features of Node.js?",
  "How do you update NPM to a new version in Node.js?",
  "Why is Node.js Single-threaded?",
];

const surpriseTips = ["...Coming Soon!", "...Even more coming soon!"];
