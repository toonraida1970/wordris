// Wordris Game Logic
let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');
let nextCanvas = document.getElementById('nextCanvas');
let nextCtx = nextCanvas.getContext('2d');
let scoreDisplay = document.getElementById('score');
let titleScreen = document.getElementById('title-screen');
let pauseScreen = document.getElementById('pause-screen');

function startGame() {
  titleScreen.style.display = 'none';
  // Initialize game
  draw();
}

function resumeGame() {
  pauseScreen.style.display = 'none';
}

function draw() {
  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0f0';
  ctx.font = '20px sans-serif';
  ctx.fillText('Wordris Game', 50, 50);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    pauseScreen.style.display = 'flex';
  }
});
