const introSection = document.querySelector(".intro");
const formSection = document.querySelector(".user");
const gameSection = document.querySelector(".game-play");
const resultSection = document.querySelector(".result");
let modal = document.querySelector(".modal");
let modalButton = document.getElementById("modal-button");
let closeButton = document.querySelector(".close-button");

const usernameP = document.getElementById("username-output");
const userName = document.getElementById("username");

const questionElement = document.getElementById("facts");
const optionElements = document.querySelectorAll(".options");
const allAnswers = document.getElementById("answer-buttons");
const nextBtn = document.querySelector(".next");

//modal box settings

modalButton.addEventListener("click", () => {
    modal.style.display = "block";
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", function () {

    formSection.classList.add("hide");
    gameSection.classList.add("hide");
    resultSection.classList.add("hide");

});

function showHideIntro() {

    introSection.classList.add("hide");
    formSection.classList.remove("hide");
}

