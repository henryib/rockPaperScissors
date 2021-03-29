var userScore = 0;
var cpuScore = 0;
var userChoice = 0;
var cpuChoice = 0;
var cnt = 0;
const winCondition = 10;
const userScoreId = document.getElementById("user-score");
const cpuScoreId = document.getElementById("cpu-score");
const scoreboard = document.querySelector(".scoreboard");
const output = document.querySelector(".output");
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const button = document.getElementById("reset");


rock.addEventListener( "click", function(){
    userChoice = 1;
    game();
 });
 paper.addEventListener( "click", function(){
     userChoice = 2;
     game();
 });
 scissors.addEventListener( "click", function(){
     userChoice = 3;
     game();
 });
 button.addEventListener("click", function() {
    reset();
 });

function cpuLogic(){
    var play =Math.floor( (Math.random() * 3) + 1);
    cpuChoice = play;
    return play;
}
//game loop
function game(){
    var winLoss = winConds(userChoice, cpuLogic());
    if(winLoss == "win"){
        userScore += 1;
        userScoreId.innerHTML = userScore;
    } else if (winLoss == "loss"){
        cpuScore +=1;
        cpuScoreId.innerHTML = cpuScore;
    }

    if(cpuChoice == 1){
        output.innerHTML = "Cpu played ROCK, your " + winLoss;
    }
    else if(cpuChoice == 2){
        output.innerHTML = "Cpu played PAPER, your " + winLoss;
    }
    else if(cpuChoice == 3){
        output.innerHTML = "Cpu played SCISSORS, your " + winLoss;
    }
    console.log(winLoss);
    if(cpuScore == 3|| userScore == 3){
        if(userScore > cpuScore){
            output.innerHTML = "AYE YOU WIN OVERALL" ;
        }
        else{
            output.innerHTML = "LMAO YOU LOST TO RANDOM NUMBER GENERATOR" ;
        }  
        reset(); 
    } 
}


function winConds(p1, p2){
    var outcome = "";
    //inputs 1 rock , 2 paper , 3 scissors
    //return 1 win , 2 draw , 3 loss
    //rock
    if(p1 == 1 && p2 == 3){
        outcome = "win";
    }
    if(p1 == 1 && p2 == 2 ){
        outcome = "loss";
    }
    //paper
    if(p1 == 2 && p2 == 1){
        outcome = "win";
    }
    if(p1 == 2 && p2 == 3 ){
        outcome = "loss";
    }
    //scissors
    if(p1 == 3  && p2 == 2){
        outcome = "win";
    }
    if(p1 == 3 && p2 == 1 ){
        outcome = "loss";
    }
    if(p1 == p2){
        outcome = "draw";
    }
    return outcome;
}

function reset(){
    userScore = 0;
    cpuScore = 0;
    userScoreId.innerHTML = userScore;
    cpuScoreId.innerHTML = cpuScore;

}