const btnTheme = document.getElementById("theme-switch");
const bodyElement = document.querySelector("body");
const iconSun = document.getElementById("sun-icon");
const iconMoon = document.getElementById("moon-icon");

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
