/*------Constants------*/




/*------Variables------*/
let secretNum, prevGuesses, isWinner, currentGuess




/*------Cached Element References------*/
const messageEl = document.getElementById('message');
const guessesEl = document.getElementById('prevGuesses');
const guessBtn = document.getElementById('initiateGuess');
const powerBtn = document.getElementById('powerButton')
const resetBtn = document.getElementById('resetButton');
const guessInput = document.getElementById('guessInput');
const titleEl = document.getElementById('titleB');




/*------Event Listeners------*/

resetBtn.addEventListener('click', function() {
    init();
})
// guessInput.addEventListener('keyup',function(e){
//     if (e.keyCode === 13) {
//         init();  
//   }
// });


// EVENT LISTENER 02: When guessBtn clicked: 
guessBtn.addEventListener('click', function() {
    //If preGuesses ARRAY length = 0, add text in guessesEl.
    if (prevGuesses.length === 0) {
        guessesEl.innerText = 'Previous Guesses:'
    }
    //If not winner, getGuess FUNCTION PARAMETERS are the input value.
    if (isWinner === false) {
        getGuess(parseInt(guessInput.value))
    }
})
// guessInput.addEventListener('keyup',function(e){
//     if (e.keyCode === 13) {
//         if (guessList.length === 0) {
//         guessesEl.innerText = 'Previous Guesses:'
//         }
//         if (isWinner === false) {
//         checkGuess(parseInt(guessInput.value))
//         }
//     }
// });


powerBtn.addEventListener('click', function() {
    init();
})



/*------Functions------*/

// Init function sets all state variable for a new game (initiates game for playing).
init();

// FUNCTION 01: Sets and prepares new game (initialaization stage).
function init() {
    // There is no text in the prevGuesses div at initalization stage.
    guessesEl.innerText = '';
    messageEl.innerText = 'Please enter a number between 1 and 100!';
    guessInput.value = '';
    // 01: prevGuesses to game OBJECT to ARRAY.
    prevGuesses =[];
    isWinner = false;
    // Random number generator.
    secretNum = Math.floor(Math.random()*100) +1;
}

// FUNCTION 02: Checks the player's choice against the secretNum.
// Is initiated by the guessBtn EVENT LISTENER.
// The guess is a paramenter and can be called anything (use something descriptive).
function getGuess(guess) {
    if (guess < 1 || guess > 100) {
        messageEl.innerText = 'Whoops! Please enter a number between 1 and 100!';
    } else if (guess === secretNum) {
        // Win scenario.
        messageEl.className = 'winner';
        isWinner = true;
            if (prevGuesses.length ===0) {
                messageEl.innerText = `Congrats! You found the number in ${prevGuesses.length + 1} guess!`
            } else {
                messageEl.innerText = `Congrats! You found the number in ${prevGuesses.length + 1} guesses!`
            }
    } else if (guess < secretNum) {
        // Handle guess is too low.
        messageEl.innerText = `Your guess of ${guess} is too low.`
        messageEl.className = 'low';
        prevGuesses.push(guess);
        render(guess);
    } else {
        // Handle guess is too high.
        messageEl.className = 'high';
        prevGuesses.push(guess);
        render(guess);
    }
}

// FUNCTION 03: It shows (RENDERS) the results of the specific game turn outcome by:
function render (guess) {
// Append a child div to the guessesEl div based on whether our guess is highter or lower than secretNum 
    if (guess === secretNum) {
    // Creating a new div to house paramenter guess number. 
        let newDiv = document.createElement("div");
        //
        newDiv.innerText == guess;
        // 
        div.className = 'high';
        // Changing message div,
        guessesEl.appendChild(div);
    } if (guess > secretNum) {
        let div = document.createElement("div");
        div.innerText = guess;
        div.className = 'high';
        guessesEl.appendChild(div);
    } else if (guess < secretNum) {
        let div = document.createElement("div");
        div.innerText = guess;
        div.className = 'low';
        guessesEl.appendChild(div);
    }
}
