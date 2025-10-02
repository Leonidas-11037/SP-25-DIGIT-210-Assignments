window.addEventListener('DOMContentLoaded',init,false);

const img = document.getElementById('img');
const startButton = document.getElementById('startBtn');
const accelerateButton = document.getElementById('accelBtn');

let angle = 0;
let speed = 0.1;
let acceleration = 0.05;
let rotating = false;

function rotate() {
    if (!rotating) return;

    angle += speed;
    img.style.transform = `rotate(${angle}deg)`;

    requestAnimationFrame(rotate);
}

// Start rotation on first button click
startButton.addEventListener('click', () => {
    if (!rotating) {
        rotating = true;
        rotate();
    }
});

// Increase speed on second button click
accelerateButton.addEventListener('click', () => {
    if (rotating) {
        speed += acceleration;
    }
});
