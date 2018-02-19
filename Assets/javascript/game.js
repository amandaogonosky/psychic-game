// ============== VARIABLES =============== //
// We need variables to hold data
// console.log("working");

var targetLetter = "y" ;
// to do make thisa random  letter #2......
///js generate random letter check---- wwww. gooogle copyt paste
var Wins = 0;
var Losses = 0;
var guessLeft = 10;
var guessSoFar = 0;
// var userGuess = String.fromCharCode(event.keyCode)
// game start
var resetGame = function(){

    var Wins = 0;
    var Losses = 0;
    var guessLeft = 10;
    var guessSoFar = 0;
}
document.onkeyup = function(event){
    var userGuess = event.key;
    if(userGuess===targetLetter){
    alert ("You Are The Winner!");
    Wins++;
    $("#wins").text("Wins: " +Wins);
    guessSoFar++;
    $("#guessesNow").text("Your Guesses so far: " + guessSoFar);
    guessLeft--;
    $("#guessesLeft").text("Guess left: " + guessLeft);
    
    }
    else {
    alert("try again");
        Losses++;
        $("#losses").text("Losses: " +Losses);
        guessLeft--;
        $("#guessesLeft").text("Guess left: " + guessLeft);
        guessSoFar++;
        $("#guessesNow").text("Your Guesses so far: " + guessSoFar);
    }
    if (guessLeft===0){
        alert("Guess again?");
        resetGame();
    }
    }
        resetGame(); 
        // document.getElementById("resetgame").reset();
        // $("#wins").text("Wins: " +Wins);


    // console.log("Losses",Losses);
    // console.log("guessSoFar",guessSoFar);
    // console.log("guessLeft",guessLeft);
    // console.log("Wins",Wins);
 

// console.log($("#wins").text("test"));

// document.getElementbyId( )
// var html =
// document.querySelectorAll;
// 
// document.querySelectorAll(".container"); 
// Wins: " + Wins + "</p>" +;
// document.querySelector("#headername");



