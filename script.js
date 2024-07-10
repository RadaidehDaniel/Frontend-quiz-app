import { quizzes } from "./data.js";

console.log(quizzes);

const btnTheme = document.getElementById("theme-switch");
const bodyElement = document.querySelector("body");
const iconSun = document.getElementById("sun-icon");
const iconMoon = document.getElementById("moon-icon");
const btnHTML = document.getElementById("HTML");
const btnCSS = document.getElementById("CSS");
const btnJs = document.getElementById("JavaScript");
const btnAccess = document.getElementById("Accessibility");
const mainElement = document.querySelector("main");
const navImg = document.getElementById("navigation-topic-img");
const navText = document.getElementById("navigation-topic-text");
const topicButtons = [btnHTML, btnCSS, btnJs, btnAccess];

// THEME FUNCTIONS

function handleTheme() {
  bodyElement.classList.toggle("dark");

  if (bodyElement.classList.contains("dark")) {
    iconSun.src = "./assets/images/icon-sun-light.svg";
    iconMoon.src = "./assets/images/icon-moon-light.svg";
  } else {
    iconSun.src = "./assets/images/icon-sun-dark.svg";
    iconMoon.src = "./assets/images/icon-moon-dark.svg";
  }
}

btnTheme.addEventListener("click", handleTheme);

// TOPIC SELECTION

function handleTopicSelection(topicId) {
  let topicIndex;
  if (topicId === "HTML") {
  }
  mainElement.innerHTML = "";
}

topicButtons.forEach((btn) => {
  btn.addEventListener("click", () => handleTopicSelection(btn.id));
});
