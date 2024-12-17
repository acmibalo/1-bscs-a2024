const board = document.getElementById('game-board');
const boardSize = 20;

// Create the grid
for (let i = 0; i < boardSize * boardSize; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  board.appendChild(cell);
}

const cells = Array.from(document.getElementsByClassName('cell'));

let snake = [42, 41, 40]; // Initial snake position
let direction = 1; // Moving right
let food = 70; // Initial food position
let speed = 200;
let gameInterval;

// Place initial snake and food
function draw() {
  cells.forEach(cell => cell.className = 'cell');
  snake.forEach(index => cells[index].classList.add('snake'));
  cells[food].classList.add('food');
}

// Move the snake
function move() {
  const head = snake[0] + direction;
  const hitLeftWall = head % boardSize === 0 && direction === -1;
  const hitRightWall = head % boardSize === boardSize - 1 && direction === 1;
  const hitTopWall = head < 0;
  const hitBottomWall = head >= boardSize * boardSize;

  // End game conditions
  if (hitLeftWall || hitRightWall || hitTopWall || hitBottomWall || snake.includes(head)) {
    clearInterval(gameInterval);
    alert('Game Over!');
    return;
  }

  snake.unshift(head);

  // Check if the snake eats food
  if (head === food) {
    food = Math.floor(Math.random() * boardSize * boardSize);
    while (snake.includes(food)) {
      food = Math.floor(Math.random() * boardSize * boardSize);
    }
  } else {
    snake.pop();
  }

  draw();
}

// Change direction
function changeDirection(e) {
  switch (e.key) {
    case 'ArrowUp':
      if (direction !== boardSize) direction = -boardSize;
      break;
    case 'ArrowDown':
      if (direction !== -boardSize) direction = boardSize;
      break;
    case 'ArrowLeft':
      if (direction !== 1) direction = -1;
      break;
    case 'ArrowRight':
      if (direction !== -1) direction = 1;
      break;
  }
}

document.addEventListener('keydown', changeDirection);

// Start the game
function startGame() {
  draw();
  gameInterval = setInterval(move, speed);
}

startGame();
