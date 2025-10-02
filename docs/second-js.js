window.addEventListener('DOMContentLoaded',rotate,false);

const img = document.getElementById('img');
const startButton = document.getElementById('startBtn');
const accelerateButton = document.getElementById('accelBtn');

let angle = 0;
let speed = 0.1;
let acceleration = 0.05;
let rotating = false;

function rotate() {
    if (rotating===true) return;

    angle += speed;
    img.style.transform = rotate(angle);
    // transform: rotate(50)deg);
    requestAnimationFrame(rotate);
}

// Start rotation
startButton.addEventListener(); {
    if (!rotating) {
        rotating = true;
        rotate();
    }
}

// Increase speed
accelerateButton.addEventListener(); {
    if (rotating) {
        speed += acceleration;
    }
}
