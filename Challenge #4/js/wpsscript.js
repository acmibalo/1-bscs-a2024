const wordDisplay = document.getElementById('word-display');
const wordInput = document.getElementById('word-input');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const wpsDisplay = document.getElementById('wps');
const restartButton = document.getElementById('restart-button');

const words = [
  'apple', 'banana', 'cherry', 'dragon', 'eclipse', 
  'future', 'galaxy', 'horizon', 'illusion', 'journey',
  'kitten', 'light', 'mountain', 'night', 'ocean',
  'planet', 'quiet', 'river', 'sunset', 'tiger'
];

let score = 0;
let timeLeft = 30;
let timer;
let startTime;

// Generate a random word
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// Start the game
function startGame() {
  wordDisplay.textContent = getRandomWord();
  wordInput.value = '';
  wordInput.disabled = false;
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = `Words Typed: ${score}`;
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;
  wpsDisplay.textContent = `WPS: 0`;
  clearInterval(timer);
  startTime = Date.now();
  timer = setInterval(countdown, 1000);
  wordInput.focus();
}

// Countdown timer
function countdown() {
  if (timeLeft > 0) {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;
  } else {
    clearInterval(timer);
    calculateWPS();
    gameOver();
  }
}

// Calculate words per second
function calculateWPS() {
  const elapsedTime = (30 - timeLeft); // Time elapsed
  const wps = elapsedTime > 0 ? (score / elapsedTime).toFixed(2) : 0;
  wpsDisplay.textContent = `WPS: ${wps}`;
}

// Check typed word
wordInput.addEventListener('input', () => {
  if (wordInput.value === wordDisplay.textContent) {
    score++;
    scoreDisplay.textContent = `Words Typed: ${score}`;
    wordDisplay.textContent = getRandomWord();
    wordInput.value = '';
  }
});

// End the game
function gameOver() {
  wordInput.disabled = true;
  wordDisplay.textContent = 'Game Over!';
  alert(`Game Over! You typed ${score} words with a speed of ${wpsDisplay.textContent}.`);
}

// Restart the game
restartButton.addEventListener('click', startGame);

// Start the game on page load
startGame();
