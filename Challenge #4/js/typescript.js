const wordDisplay = document.getElementById('word-display');
const wordInput = document.getElementById('word-input');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');

let words = ['apple', 'banana', 'cherry', 'dragon', 'eclipse', 'future', 'galaxy', 'horizon', 'illusion', 'journey'];
let score = 0;
let timeLeft = 30;
let timer;

// Select a random word
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Start the game
function startGame() {
  wordDisplay.textContent = getRandomWord();
  wordInput.value = '';
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = `Score: ${score}`;
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;
  wordInput.disabled = false;
  wordInput.focus();
  clearInterval(timer);
  timer = setInterval(countdown, 1000);
}

// Countdown timer
function countdown() {
  if (timeLeft > 0) {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;
  } else {
    clearInterval(timer);
    gameOver();
  }
}

// Check typed word
wordInput.addEventListener('input', () => {
  if (wordInput.value === wordDisplay.textContent) {
    score++;
    scoreDisplay.textContent = `Score: ${score}`;
    wordDisplay.textContent = getRandomWord();
    wordInput.value = '';
  }
});

// End the game
function gameOver() {
  wordInput.disabled = true;
  wordDisplay.textContent = 'Game Over!';
  alert(`Time's up! Your final score is: ${score}`);
}

// Start the game on page load
startGame();
