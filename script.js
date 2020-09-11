let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, randomNumber) => {
    if (humanGuess > 10 || humanGuess <0) {
        alert('Number is out of range');
    }

    const distanceHumanGuess = Math.abs(randomNumber - humanGuess);
    const distanceComputerGuess = Math.abs(randomNumber - computerGuess);
    return distanceHumanGuess <= distanceComputerGuess;
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    }   else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => currentRoundNumber++;