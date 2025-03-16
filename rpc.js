var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissor = document.querySelector(".scissor");
var winCount = document.getElementById("wins");
var looseCount = document.getElementById("losses");
var drawCount = document.getElementById("draws");
function playerMove(move) {
    pickComputerMove(move);
}
let win = 0;
let draw = 0;
let loose = 0;
rock.addEventListener("click", function(event) {
    playerMove("rock");
    

});

paper.addEventListener("click", function(event) {
    playerMove("paper");
    
});

scissor.addEventListener("click", function(event) {
    playerMove("scissor");
    
});

var max = 3;
var min = 1;

function pickComputerMove(playerMove) {
    let computerMove = Math.floor(Math.random() * (max - min + 1)) + min;
    let result = "";
    let computermove = '';
    if(computerMove === 1){
        computermove = "rock";
    }else if(computerMove === 2){
        computermove = "paper"
    }else{
        computermove = "scissor"
    }
    if (playerMove === "rock") {
        if (computerMove === 1) {
            result = "tie";
            draw++;
        } else if (computerMove === 2) {
            result = "you lose";
            loose++;
        } else {
            result = "you win";
            win++;
        }
    }

    if (playerMove === "paper") {
        if (computerMove === 1) {
            result = "you win";
            win++;
        } else if (computerMove === 2) {
            result = "tie";
            draw++;
        } else {
            result = "you lose";
            loose++;
        }
    }

    if (playerMove === "scissor") {
        if (computerMove === 1) {
            result = "you lose";
            loose++;
        } else if (computerMove === 2) {
            result = "you win";
            win++;
        } else {
            result = "tie";
            draw++;
        }
    }
    winCount.innerText = win;
    looseCount.innerText = loose;
    drawCount.innerText = draw;
    alert(`You are ${playerMove}. Computer is ${computermove}. Result: ${result}`);
}
