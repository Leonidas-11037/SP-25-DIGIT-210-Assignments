window.addEventListener('DOMContentLoaded',init,false);
/*  ebb: For continuous rotation, try the CSS properties for keyframe animation
 * (or other CSS properties). See https://www.w3schools.com/css/css3_animations.asp 
 * 
 * You could even pair this with the classList toggle in JS: 
 * On click, use classList to add a "on" class to the img.
 * JavaScript function triggers the classList toggle "on" and makes this:
 * <img class="rotatable on">
 * In your CSS, define the keyframes animation for rotation when you have img.rotatable.on { }
 *  */
 
let angle = 5;
let speed = .1;
let acceleration = 5;
let rotating = false;

function init() {
    const startButton = document.getElementById('startBtn');
    const accelerateButton = document.getElementById('accelBtn');
    startButton.addEventListener('click', turn, false);
   accelerateButton.addEventListener('click', accelerate, false);
    
}


function turn() {
const img = document.getElementById('img');

  /*if (rotating===true) return;*/
  if (rotating==false) {
        rotating = true;
        turn();
    }
    angle += speed;
    console.log('angle is ' + angle)
    img.style.transform = 'rotate(' + angle + 'deg)';
    /*   accelerate(); */
    // transform: rotate(50)deg);
    // requestAnimationFrame(turn);
}


function accelerate() {// Increase speed
{
    if (rotating==true) {
        speed += acceleration;
    }
}
}