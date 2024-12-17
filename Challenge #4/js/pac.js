const board = document.getElementById('game-board');
const scoreDisplay = document.getElementById('score');
const messageDisplay = document.getElementById('message');
const restartButton = document.getElementById('restart-button');

const boardSize = 10;
let score = 0;
let isGameOver = false;
let pacmanPowerMode = false;

// Initial Board Layout
let layout = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 1, 2, 2, 2, 4, 1],
  [1, 3, 1, 2, 1, 2, 1, 1, 2, 1],
  [1, 2, 1, 2, 2, 2, 1, 2, 2, 1],
  [1, 2, 1, 1, 1, 2, 1, 1, 2, 1],
  [1, 2, 2, 2, 1, 4, 2, 2, 2, 1],
  [1, 2, 1, 2, 1, 1, 1, 2, 1, 1],
  [1, 3, 1, 2, 2, 2, 2, 2, 1, 1],
  [1, 2, 2, 2, 1, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let pacmanPosition = { x: 1, y: 1 };
let ghosts = [
  { x: 1, y: 2, direction: 'down' },
  { x: 7, y: 1, direction: 'up' },
];

function createBoard() {
  board.innerHTML = '';
  layout.forEach((row, y) => {
    row.forEach((cell, x) => {
      const cellDiv = document.createElement('div');
      cellDiv.classList.add('cell');

      if (cell === 1) cellDiv.classList.add('wall');
      if (cell === 2) cellDiv.classList.add('dot');
      if (cell === 4) cellDiv.classList.add('power-pellet');
      if (x === pacmanPosition.x && y === pacmanPosition.y) {
        const pacmanDiv = document.createElement('div');
        pacmanDiv.classList.add('pacman');
        cellDiv.appendChild(pacmanDiv);
      }

      ghosts.forEach((ghost) => {
        if (x === ghost.x && y === ghost.y) {
          const ghostDiv = document.createElement('div');
          ghostDiv.classList.add('ghost');
          cellDiv.appendChild(ghostDiv);
        }
      });

      board.appendChild(cellDiv);
    });
  });
}

function movePacman(direction) {
  if (isGameOver) return;

  let { x, y } = pacmanPosition;
  if (direction === 'ArrowUp') y--;
  if (direction === 'ArrowDown') y++;
  if (direction === 'ArrowLeft') x--;
  if (direction === 'ArrowRight') x++;

  if (layout[y][x] !== 1) {
    pacmanPosition = { x, y };

    // Eat dots or power pellets
    if (layout[y][x] === 2) {
      layout[y][x] = 0;
      score++;
    } else if (layout[y][x] === 4) {
      layout[y][x] = 0;
      pacmanPowerMode = true;
      setTimeout(() => (pacmanPowerMode = false), 10000); // Power mode lasts 10 seconds
    }

    scoreDisplay.textContent = `Score: ${score}`;
  }

  checkGameOver();
  createBoard();
}

function moveGhosts() {
  if (isGameOver) return;

  ghosts.forEach((ghost) => {
    const directions = [
      { x: 0, y: -1 }, // Up
      { x: 0, y: 1 }, // Down
      { x: -1, y: 0 }, // Left
      { x: 1, y: 0 }, // Right
    ];

    const randomDir = directions[Math.floor(Math.random() * directions.length)];
    const newX = ghost.x + randomDir.x;
    const newY = ghost.y + randomDir.y;

    if (layout[newY][newX] !== 1) {
      ghost.x = newX;
      ghost.y = newY;
    }

    // Ghost collision
    if (ghost.x === pacmanPosition.x && ghost.y === pacmanPosition.y) {
      if (pacmanPowerMode) {
        // Eat ghost
        ghost.x = 1;
        ghost.y = 1;
        score += 5;
        scoreDisplay.textContent = `Score: ${score}`;
      } else {
        endGame('Game Over!');
      }
    }
  });

  createBoard();
}

function checkGameOver() {
  if (layout.flat().filter((cell) => cell === 2 || cell === 4).length === 0) {
    endGame('You Win!');
  }
}

function endGame(message) {
  isGameOver = true;
  messageDisplay.textContent = message;
  restartButton.style.display = 'inline-block';
}

function restartGame() {
  score = 0;
  isGameOver = false;
  pacmanPowerMode = false;
  pacmanPosition = { x: 1, y: 1 };
  ghosts = [
    { x: 1, y: 2, direction: 'down' },
    { x: 7, y: 1, direction: 'up' },
  ];
  layout = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1, 2, 2, 2, 4, 1],
    [1, 3, 1, 2, 1, 2, 1, 1, 2, 1],
    [1, 2, 1, 2, 2, 2, 1, 2, 2, 1],
    [1, 2, 1, 1, 1, 2, 1, 1, 2, 1],
    [1, 2, 2, 2, 1, 4, 2, 2, 2, 1],
    [1, 2, 1, 2, 1, 1, 1, 2, 1, 1],
    [1, 3, 1, 2, 2, 2, 2, 2, 1, 1],
    [1, 2, 2, 2, 1, 2, 2, 2, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  ];

  scoreDisplay.textContent = `Score: ${score}`;
  messageDisplay.textContent = '';
  restartButton.style.display = 'none';
  createBoard();
}

document.addEventListener('keydown', (event) => {
  movePacman(event.key);
});

restartButton.addEventListener('click', restartGame);

setInterval(moveGhosts, 1000);
createBoard();
