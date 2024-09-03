// for computer choice
function getComputerChoice(){
    let choices = ["ROCK", "PAPER", "SCISSOR"];
    // generating random index of the array based on its length
    let randomIndex = Math.floor(Math.random() * choices.length);
    // storing the value of array with random index
    let computerChoice = choices[randomIndex];
    return computerChoice;
}

// checking result based on computer choice and user choice
function checkResult(computerChoice, userChoice){
    let result = "";
    if(computerChoice === userChoice){
        result = "It's a TIE";
    } else if (
        (computerChoice === "PAPER" && userChoice === "ROCK") || 
        (computerChoice === "SCISSOR" && userChoice === "PAPER") || 
        (computerChoice === "ROCK" && userChoice === "SCISSOR")
    ) {
        result = "Computer is the winner!";
    } else {
        result = "You are the winner!";
    }
    return result;
}

function displayResult(computerChoice, userChoice, result){
    const user = document.getElementById("userChoice");
    const computer = document.getElementById("computerChoice");
    const winner = document.getElementById("winner");
    user.innerHTML = `Your choice: ${userChoice}`;
    computer.innerHTML = `Computer's choice: ${computerChoice}`;
    winner.innerHTML = result;
}

// initializing the buttons 
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

// adding event listeners to the buttons
rock.addEventListener("click", (event) => {
    let userChoice = event.target.textContent.trim().toUpperCase();
    let computerChoice = getComputerChoice();
    let result = checkResult(computerChoice, userChoice);
    displayResult(computerChoice, userChoice, result);
});

paper.addEventListener("click", (event) => {
    let userChoice = event.target.textContent.trim().toUpperCase();
    let computerChoice = getComputerChoice();
    let result = checkResult(computerChoice, userChoice);
    displayResult(computerChoice, userChoice, result);
});

scissor.addEventListener("click", (event) => {
    let userChoice = event.target.textContent.trim().toUpperCase();
    let computerChoice = getComputerChoice();
    let result = checkResult(computerChoice, userChoice);
    displayResult(computerChoice, userChoice, result);
});