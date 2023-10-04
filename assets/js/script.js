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

function enterBtn() {
    console.log("function fired");

    let userName = document.getElementById("username").value;

    if (userName === null || userName === "") {
        let errorDiv = document.getElementById("errors");
        errorDiv.innerHTML = "Please choose a username to play the game!";
        errorDiv.style.display = "block";

    } else {
        console.log("Username entered successfully!");
        formSection.classList.add("hide");
        gameSection.classList.remove("hide");
    }
}

function displayUsername() {

    usernameP.innerHTML = userName.value;
    console.log("Username:", userName.value);
}

function hideGame() {
    console.log("Game hidden");

    questionElement.classList.add("hide");
    nextBtn.classList.add("hide");
    allAnswers.style.display = "none";
}

// timer 
document.getElementById("start").addEventListener("click", function () {
    console.log("timer started");

    //variables
    let timeLeft = 40;
    let timerInterval = setInterval(startTimer, 1000);

    document.getElementById("start").style.display = "none";

    //counts down the remaining time
    function startTimer() {
        document.getElementById("timer").innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;

        if (timeLeft === 0) {
            clearInterval(timerInterval);

            //shows result once time is up
            results();

            resultSection.classList.remove("hide");
            introSection.classList.add("hide");
            formSection.classList.add("hide");
            gameSection.classList.add("hide");
            console.log("Times up!");
        }
    }
});

//timer stops when last question is answered



//shows main game section onve "GO!" button is clicked
function displayGame() {
    console.log("Show game");

    questionElement.classList.remove("hide");
    allAnswers.style.display = "flex";

    //shows question and answer options
    showQuestion();
}

//index for questions array 
let currentQuestion = 0;

//displays questions and answer options
function showQuestion() {

    //question
    const question = questions[currentQuestion];
    questionElement.innerHTML = question.text;
    console.log(`${question.text}`);
 
    optionElements.forEach(function (button, index) {
        button.textContent = question.options[index];
        console.log(`Answer option:${question.options[index]}`);
    });

    let answerOptions = optionElements;
    for (i = 0; i < answerOptions.length; i++) {
        answerOptions[i].setAttribute("onclick", "answerSelected(this)");
    }
}


//checks selected answer 
function answerSelected(answer) {

    //variables to define the selected answer and the correct answer 
    let selectedAnswer = answer.innerHTML;
    let correctAnswer = questions[currentQuestion].answer;

    //checks the selected answer if this is equal to the correct answer
    if (selectedAnswer === correctAnswer) {
        answer.classList.add("right-answer");
        incrementRight();

    } else {
        answer.classList.add("wrong-answer");
        incrementWrong();
    }

    //show next button to get the next question 
    nextBtn.classList.remove("hide");

    //loop for diabling answer options so only one answer can be choosen
    for (i = 0; i < optionElements.length; i++) {
        optionElements[i].classList.add("disabled");
    }
}

//eventlistener to fire function to display the next question
nextBtn.addEventListener("click", () => {
    currentQuestion++;
    setNextQuestion();
});

//function to increment score of correct answers 
function incrementRight() {

    let currentScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++currentScore;
    console.log(`score ${currentScore}`);
}

//function to increment score of wrong answers
function incrementWrong() {

    let currentIncorrect = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++currentIncorrect;
    console.log(`incorrect score ${currentIncorrect}`);
}

// function to set the next question
function setNextQuestion() {

    console.log("next question");
    nextBtn.classList.add("hide");
    showQuestion();

    // loop for removing the added classlist from answer buttons
    for (i = 0; i < optionElements.length; i++) {
        optionElements[i].classList.remove("disabled");
        optionElements[i].classList.remove("right-answer");
        optionElements[i].classList.remove("wrong-answer");
    }
}

//function to show a user message on result page depending on the achieved score
function results() {
    console.log("result loaded");

    if (document.getElementById("incorrect").innerText > document.getElementById("score").innerText) {
        document.getElementById("result-message").textContent = "Sorry, these were not of the easy travel quiz questions! But at least You have learned something new!";

    } else if (document.getElementById("incorrect").innerText <= document.getElementById("score").innerText) {
        document.getElementById("result-message").textContent = "Congratulations! You are an official citizen of the World, with limitless thirst for knowledge!";
    }
}

// function to reload document when clicking on home-button in result section
function locationReload() {

    window.location.reload();
}

//end of JavaScript code







