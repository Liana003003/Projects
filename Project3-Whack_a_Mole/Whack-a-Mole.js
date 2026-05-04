const holes = document.querySelectorAll(".hole");
const startButton = document.getElementById("startButton");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

let score = 0;
let timeLeft = 60;
let gameInterval;
let moleTimeout;

// Start game
startButton.addEventListener("click", startGame);

function startGame() {
    score = 0;
    timeLeft = 60;
    scoreDisplay.textContent = "Score: 0";
    timerDisplay.textContent = "Time: 60s";

    startButton.disabled = true;

    gameInterval = setInterval(updateTimer, 1000);
    showMole();
}

function clearMoles() {
    holes.forEach(hole => hole.classList.remove("mole"));
}

// Timer
function updateTimer() {
    timeLeft--;
    timerDisplay.textContent = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
        endGame();
    }
}

// Show mole randomly
function showMole() {
    const randomHole = holes[Math.floor(Math.random() * holes.length)];

    randomHole.classList.add("mole");

    moleTimeout = setTimeout(() => {
        randomHole.classList.remove("mole");
        showMole(); // next mole
    }, 800);
}

// Hit detection
holes.forEach(hole => {
    hole.addEventListener("click", () => {
        if (hole.classList.contains("mole")) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            hole.classList.remove("mole");
        }
    });
});

// End game
function endGame() {
    clearInterval(gameInterval);
    clearTimeout(moleTimeout);

    clearMoles(); // <-- FIX HERE

    startButton.disabled = false;
    alert(`Game Over! Your score: ${score}`);
}