const rockEl = document.getElementById("rock")
const paperEl = document.getElementById("paper")
const scissorsEl = document.getElementById("scissors")
const resultEl = document.getElementById("result")
const scoreEl = document.getElementById("score")
const resetEl = document.getElementById("reset-score")


let score = {
    Wins : 0,
    Tie : 0,
    Looses : 0
}

rockEl.addEventListener("click", function(){
   playGame("Rock") 
})

paperEl.addEventListener("click", function(){
    playGame("Paper")
})

scissorsEl.addEventListener("click", function(){
    playGame("Scissors")
})


resetEl.addEventListener("click",function(){

})


function playGame(playerMove){
    let randomNumber = Math.floor(Math.random()*3)
    let computerMove = randomNumber ===0 ? "Rock" :
        randomNumber ===1 ? "Paper" : "Scissors"


    if(playerMove === computerMove){
        resultEl.textContent = `You Choose ${playerMove} Computer Chosse ${computerMove} So It's a Tie.`
    }else if((playerMove==="Rock" && computerMove === "Scissors") ||
        (playerMove === "Paper" && computerMove === "Rock" ) ||
        (playerMove === "Scissors" && computerMove === "Paper")){
            resultEl.textContent =  `You Choose ${playerMove} Computer Chosse ${computerMove} So You Won.`
        }else{
            resultEl.textContent =  `You Choose ${playerMove} Computer Chosse ${computerMove} So You Lost.`
        }
    

   
}

