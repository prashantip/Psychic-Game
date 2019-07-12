var lettersGuessed = [];
var wins = 0;
var losses = 0;
var computerGuess = ["a", "x", "c", "d", "p", "k", "r"];
var guessesLeft = 9;
    


// players's keyboard input and make the input lowercase

document.onkeyup = function(event) {
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();
    addLetter(keyPress);

    document.getElementById("numWins").innerHTML = wins;

    document.getElementById("numGuesses").innerHTML = guessesLeft;

    document.getElementById("numLosses").innerHTML = losses;

}
//Repeat function and Alert
function addLetter (usersKeypress) {

    var repeatGuess = lettersGuessed.some(function(item){
        return item === usersKeypress;
    })

      if (repeatGuess) {
        alert(usersKeypress + " already guessed. Try again!");
        } 
        else {
        lettersGuessed.push(usersKeypress);

        console.log(lettersGuessed);
        showLettersGuessed();
        guessMatch(usersKeypress);
    }

}

//function to show letters guessed in browser
function showLettersGuessed() {
    var show = lettersGuessed.join(", ");
    document.getElementById("playerGuess").innerHTML = show;
}

function guessMatch (character) {

    console.log(character);
    console.log(computerGuess);
    var i;
    var isMatched = false;
    
    for (i = 0; i < computerGuess.length; i++) { 
        if (character === computerGuess[i])
        {
            isMatched = true;
        }
    }
    
    if (isMatched === true) {
    
        alert("You win!");
        wins ++;
        guessesLeft--;
        
        console.log (wins);
    
    } 
   else if(isMatched == false)
    {
        guessesLeft--;
        losses++;
        

    }
    else if (guessesLeft === 0) {
        alert("Start the game over agin");
        resetVariables ();
    
    } 
}

   

function resetVariables () {
    lettersGuessed = [];
    guessesLeft = 9;
    document.getElementById("numGuesses").innerHTML = 9;
    document.getElementById("numWins").innerHTML = 0;
    document.getElementById("numLosses").innerHTML =0;
    document.getElementById("playerGuess").innerHTML ="";
    wins=0;
    losses=0;
}
// 
// // function startGame() {
//     showGuessesRemaining();
//     showWins();
//     showLosses();
// }


