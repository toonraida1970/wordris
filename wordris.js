
let canvas, ctx;
let gameRunning = false;

function startGame() {
    document.getElementById("titleScreen").style.display = "none";
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 600;
    gameRunning = true;
    drawInitialScreen();
    requestAnimationFrame(gameLoop);
}

function drawInitialScreen() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "20px Arial";
    ctx.fillText("Wordris Starting...", 50, 100);
}

function gameLoop() {
    if (!gameRunning) return;
    // Placeholder game loop logic
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#222";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#0f0";
    ctx.fillText("Game Loop Running", 50, 100);
    requestAnimationFrame(gameLoop);
}

// Basic keyboard controls
document.addEventListener("keydown", function(e) {
    if (!gameRunning) return;
    switch (e.key) {
        case "ArrowLeft":
            console.log("Move Left");
            break;
        case "ArrowRight":
            console.log("Move Right");
            break;
        case "ArrowDown":
            console.log("Move Down");
            break;
        case "ArrowUp":
            console.log("Rotate");
            break;
    }
});
