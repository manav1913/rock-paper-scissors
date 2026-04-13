const rockEl = document.getElementById("rock")
const paperEl = document.getElementById("paper")
const scissorsEl = document.getElementById("scissors")
const resultEl = document.getElementById("result")
const scoreEl = document.getElementById("score")
const resetEl = document.getElementById("reset-score")


let score = JSON.parse(localStorage.getItem("score")) || {
    Wins : 0,
    Tie: 0,
    Losses : 0
}

rockEl.addEventListener("click", function () {
    playGame("Rock")
})

paperEl.addEventListener("click", function () {
    playGame("Paper")
})

scissorsEl.addEventListener("click", function () {
    playGame("Scissors")
})


resetEl.addEventListener("click", function () {
    score.Wins = 0;
    score.Losses = 0;
    score.Tie = 0;

    localStorage.removeItem("score");

    updateScore();

    resultEl.textContent = "Game reset. Play again!";
})


function updateScore() {
    scoreEl.textContent = `Wins: ${score.Wins} | Losses: ${score.Losses} | Tie: ${score.Tie}`;
}

function playGame(playerMove) {
    let randomNumber = Math.floor(Math.random() * 3)
    let computerMove = randomNumber === 0 ? "Rock" :
        randomNumber === 1 ? "Paper" : "Scissors"


    if (playerMove === computerMove) {
        resultEl.textContent = `You : ${playerMove} | Computer : ${computerMove} | So => Tie.`
        score.Tie++

    } else if ((playerMove === "Rock" && computerMove === "Scissors") ||
        (playerMove === "Paper" && computerMove === "Rock") ||
        (playerMove === "Scissors" && computerMove === "Paper")) {
        resultEl.textContent = `You : ${playerMove} | Computer : ${computerMove} | So => Won.`
        score.Wins++

    } else {
        resultEl.textContent = `You : ${playerMove} | Computer : ${computerMove} | So => Lost.`
        score.Losses++
    }

    localStorage.setItem("score", JSON.stringify(score))
    updateScore()



}

