    let boxes = document.querySelectorAll(".box");

let turn = "X";
let isGameOver = false;

// Initialize the game
initializeGame();

function initializeGame() {
    boxes.forEach(e => {
        e.innerHTML = ""; // Clear box content
        e.style.color = "#fff"; // Default color for empty boxes
        e.removeAttribute('data-turn'); // Remove any existing data-turn attribute
        e.style.backgroundColor = ""; // Reset background color for the box
    });
    updateTurnBox(); // Set initial turn box color
}

// Event listener for each box
boxes.forEach(e => {
    e.addEventListener("click", () => {
        if (!isGameOver && e.innerHTML === "") {
            e.innerHTML = turn; // Set the current player's mark
            e.setAttribute('data-turn', turn); // Set data-turn attribute to track X or O
            e.style.color = turn === "X" ? "blue" : "red"; // Set text color for X and O
            checkWin(); // Check for a win
            checkDraw(); // Check for a draw
            changeTurn(); // Change the turn
        }
    });
});

function changeTurn() {
    turn = (turn === "X") ? "O" : "X"; // Toggle turn
    updateTurnBox(); // Update turn box color
}

// Update the turn box colors based on the current player
function updateTurnBox() {
    const turnBoxes = document.querySelectorAll('.turn-box');
    if (turn === "X") {
        turnBoxes[0].style.backgroundColor = "#007BFF"; // Blue for X
        turnBoxes[1].style.backgroundColor = "#FFB3B3"; // Light red for O
    } else {
        turnBoxes[0].style.backgroundColor = "#D0E8FF"; // Light blue for X
        turnBoxes[1].style.backgroundColor = "#FF4500"; // Red for O
    }
}

function checkWin() {
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < winConditions.length; i++) {
        let v0 = boxes[winConditions[i][0]].innerHTML;
        let v1 = boxes[winConditions[i][1]].innerHTML;
        let v2 = boxes[winConditions[i][2]].innerHTML;

        if (v0 != "" && v0 === v1 && v0 === v2) {
            isGameOver = true; // Set game over flag
            document.querySelector("#results").innerHTML = turn + " wins!";
            document.querySelector("#play-again").style.display = "inline"; // Show play again button

            // Highlight winning boxes
            for (let j = 0; j < 3; j++) {
                boxes[winConditions[i][j]].style.backgroundColor = turn === "X" ? "#08D9D6" : "#FF4500"; // Set background based on the winning player
                boxes[winConditions[i][j]].style.color = "#000"; // Change text color to black for visibility
            }
        }
    }
}

function checkDraw() {
    if (!isGameOver) {
        let isDraw = true;
        boxes.forEach(e => {
            if (e.innerHTML === "") isDraw = false; // Check for empty boxes
        });

        if (isDraw) {
            isGameOver = true; // Set game over flag
            document.querySelector("#results").innerHTML = "Draw";
            document.querySelector("#play-again").style.display = "inline"; // Show play again button
        }
    }
}

// Event listener for the play again button
document.querySelector("#play-again").addEventListener("click", () => {
    isGameOver = false; // Reset game over flag
    turn = "X"; // Reset turn to X
    document.querySelector(".bg").style.left = "0"; // Reset background position
    document.querySelector("#results").innerHTML = ""; // Clear results
    document.querySelector("#play-again").style.display = "none"; // Hide play again button

    // Reset turn box colors
    const turnBoxes = document.querySelectorAll('.turn-box');
    turnBoxes.forEach(box => {
        box.style.backgroundColor = ""; // Reset box color
    });

    initializeGame(); // Reset game state
});
