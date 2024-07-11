import { quizzes } from "./data.js";

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

let btnSubmit;
let questionCounter;
let questionElement;
let timerElement;
let btnOptionA;
let btnOptionB;
let btnOptionC;
let btnOptionD;
let optionTextA;
let optionTextB;
let optionTextC;
let optionTextD;

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

function renderQandA() {
  mainElement.innerHTML = "";
  let markup = `<div class="question-section">
  <div>
    <p class="counter-style">Question <span id="counter">0</span> of 10</p>
    <p class="question-style" id="question">
      Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA
      requirement for normal text?
    </p>
  </div>
  <div class="timer-container">
    <div class="timer-indicator" id="timer"></div>
  </div>
</div>
<div class="answers-section">
  <button class="answer-btn-style" id="optionA">
    <p class="answer-order">A</p>
    <p class="topic-title" id="text-A">4.5 : 1</p>
    <img src="" />
  </button>
  <button class="answer-btn-style" id="optionB">
    <p class="answer-order">B</p>
    <p class="topic-title" id="text-B">4.5 : 1</p>
    <img src="" />
  </button>
  <button class="answer-btn-style" id="optionC">
    <p class="answer-order">C</p>
    <p class="topic-title" id="text-C">4.5 : 1</p>
    <img src="" />
  </button>
  <button class="answer-btn-style" id="optionD">
    <p class="answer-order">D</p>
    <p class="topic-title" id="text-D">4.5 : 1</p>
    <img src="" />
  </button>
  <button class="submit-btn-style" id="submit-button">
    <p>Submit Answer</p>
  </button>
  <p class="please hidden">Please select an answer</p>
</div>`;

  mainElement.innerHTML = markup;

  btnSubmit = document.getElementById("submit-button");
  questionCounter = document.getElementById("counter");
  questionElement = document.getElementById("question");
  timerElement = document.getElementById("timer");
  btnOptionA = document.getElementById("optionA");
  btnOptionB = document.getElementById("optionB");
  btnOptionC = document.getElementById("optionC");
  btnOptionD = document.getElementById("optionD");
  optionTextA = document.getElementById("text-A");
  optionTextB = document.getElementById("text-B");
  optionTextC = document.getElementById("text-C");
  optionTextD = document.getElementById("text-D");
}

function renderTopicNav(text, imgSrc) {
  navImg.src = imgSrc;
  navText.textContent = text;

  if (text === "HTML") {
    navImg.className = "";
    navImg.className = "topic-icon html-style";
  }
  if (text === "CSS") {
    navImg.className = "";
    navImg.className = "topic-icon css-style";
  }
  if (text === "JavaScript") {
    navImg.className = "";
    navImg.className = "topic-icon js-style";
  }
  if (text === "Accessibility") {
    navImg.className = "";
    navImg.className = "topic-icon access-style";
  }
}

function selectTopic(id, data) {
  let selectedTopic = {};
  data.forEach((topic) => {
    if (topic.title === id) {
      selectedTopic = topic;
    }
  });
  return selectedTopic;
}

function handleSubmit() {
  
}

function renderQuestionAndAnswers(questions) {
  console.log(questions);

  questionElement.textContent = questions[0].question;
  optionTextA.textContent = questions[0].options[0];
  optionTextB.textContent = questions[0].options[1];
  optionTextC.textContent = questions[0].options[2];
  optionTextD.textContent = questions[0].options[3];

  btnSubmit.addEventListener("click", handleSubmit);
}

function handleTopicSelection(topicId, data) {
  let topic = selectTopic(topicId, data);

  renderTopicNav(topic.title, topic.icon);
  renderQandA();
  renderQuestionAndAnswers(topic.questions);
}

topicButtons.forEach((btn) => {
  btn.addEventListener("click", () => handleTopicSelection(btn.id, quizzes));
});
