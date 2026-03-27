// Generate random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Set maximum attempts
let maxAttempts = 7;
let attemptsLeft = maxAttempts;

function checkGuess() {
    let userGuess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    let attemptsText = document.getElementById("attempts");

    if (!userGuess) {
        message.textContent = "⚠️ Please enter a number!";
        return;
    }

    attemptsLeft--;

    if (userGuess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed the number!";
        endGame();
    } else if (userGuess > randomNumber) {
        message.textContent = "📉 Too high!";
    } else {
        message.textContent = "📈 Too low!";
    }

    attemptsText.textContent = `Attempts left: ${attemptsLeft}`;

    if (attemptsLeft === 0 && userGuess !== randomNumber) {
        message.textContent = `❌ Game Over! The number was ${randomNumber}`;
        endGame();
    }
}

function endGame() {
    document.getElementById("guessInput").disabled = true;
    document.querySelector("button").disabled = true;
    document.getElementById("restartBtn").style.display = "inline-block";
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = maxAttempts;

    document.getElementById("guessInput").disabled = false;
    document.querySelector("button").disabled = false;
    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("restartBtn").style.display = "none";
}
