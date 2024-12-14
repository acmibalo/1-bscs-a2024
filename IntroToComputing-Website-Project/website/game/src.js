const playerDot = document.querySelector('.playerDot');
const maze = document.querySelector('.maze');
const walls = document.querySelectorAll('.wall'); // select all walls
const endpoint = document.querySelector('.end');
const stepSize = 2;

//start pos
let posX = 10;
let posY = 10;

//jumpscare
const jumpscareImage = document.createElement('img');
jumpscareImage.src = 'shit/scare.jpg'; // The scare
jumpscareImage.style.position = 'fixed';
jumpscareImage.style.top = '0';
jumpscareImage.style.left = '0';
jumpscareImage.style.width = '100vw'; // Full width
jumpscareImage.style.height = '100vh'; // Full height
jumpscareImage.style.objectFit = 'cover'; // Ensure it covers the screen
jumpscareImage.style.display = 'none'; // Initially hidden
jumpscareImage.style.zIndex = '1000';
document.body.appendChild(jumpscareImage);

const jumpscareAudio = new Audio('shit/spook.mp3'); // Audio jumpscare

//collision detection
function isColliding(rect1, rect2) {
    return (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
    );
}

// apparently supposed to define the handle thingy as a function idk how that works but that's there
function handleMovement(e) {
    let newX = posX;
    let newY = posY;

    // movemint (idk how to set up mouse movement so here you go, also I tried omnidirectional movement [northeast, northwest, etc..] but can't figure out how to make it work so ye)
    if (e.key === 'ArrowUp') newY -= stepSize;
    if (e.key === 'ArrowDown') newY += stepSize;
    if (e.key === 'ArrowLeft') newX -= stepSize;
    if (e.key === 'ArrowRight') newX += stepSize;

    // stay within the box lil boi
    if (newX >= 0 && newX <= maze.offsetWidth - playerDot.offsetWidth &&
        newY >= 0 && newY <= maze.offsetHeight - playerDot.offsetHeight) {
        posX = newX;
        posY = newY;
        playerDot.style.left = posX + 'px';
        playerDot.style.top = posY + 'px';

        // check if player molested a wall
        const playerRect = playerDot.getBoundingClientRect();
        for (let wall of walls) {
            const wallRect = wall.getBoundingClientRect();
            if (isColliding(playerRect, wallRect)) {
                //commence operation: make the player shit themselves
                jumpscareImage.style.display = 'block';
                jumpscareAudio.play();

                // reset le player position
                posX = 10;
                posY = 10;
                playerDot.style.left = posX + 'px';
                playerDot.style.top = posY + 'px';

                setTimeout(() => {
                    jumpscareImage.style.display = 'none';
                }, 5800); // How long the scare stays on screen
                break;
            }
        }

        // check if le dot reaches the endpoint
        const endpointRect = endpoint.getBoundingClientRect();
        if (isColliding(playerRect, endpointRect)) {
            // Trigger Rickroll
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');

            // Optional: Stop movement
            document.removeEventListener('keydown', handleMovement); // disable movemint 
        }
    }
}

//keydown event listener (like the other handler shit idk what this does either)
document.addEventListener('keydown', handleMovement);

