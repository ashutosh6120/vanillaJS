const randomNumber = Math.floor(Math.random() * 100) + 1;
let remainingGuesses = 10;
const previousGuesses = [];

function checkGuess() {
    const userGuess = parseInt(document.getElementById("guessid").value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    previousGuesses.push(userGuess);
    document.querySelector(".guesses").textContent = previousGuesses.join(", ");
    document.getElementById("guessid").value = "";


    if (userGuess === randomNumber) {
        document.querySelector(".lowOrHi").textContent = "Correct! You are the winner!";
        document.querySelector(".lastResult").textContent = "0";
        document.getElementById("btn").disabled = true;
        celebrate();
    } else {
        remainingGuesses--;
        document.querySelector(".lowOrHi").textContent = userGuess < randomNumber ? "You are too low!" : "You are too high!";
        document.querySelector(".lastResult").textContent = remainingGuesses;
        if (remainingGuesses === 0) {
            document.getElementById("btn").disabled = true;
        }
    }
}

function celebrate(){
    confetti({
        particleCount: 2000,
        spread: 100, 
        origin: { x: 0.5, y: 0.6 }, 
        colors: ["#FFD700", "#FF6347", "#00FF00"],
        shapes: ["square"],
        scalar: 1.8, 
        gravity: 0.5,
    });
}
