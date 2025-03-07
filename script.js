const balloon = document.getElementById('balloon');
const pumpButton = document.getElementById('pumpButton');
let balloonSize = 50;
let isFlying = false;
let flyInterval;

// Function to inflate the balloon
pumpButton.addEventListener('click', () => {
  if (balloonSize < 200) {
    balloonSize += 10;
    balloon.style.width = `${balloonSize}px`;
    balloon.style.height = `${balloonSize * 1.4}px`;
  }

  // Start flying when the balloon is fully inflated
  if (balloonSize >= 200 && !isFlying) {
    isFlying = true;
    startFlying();
  }
});

// Function to make the balloon fly in random directions
function startFlying() {
  flyInterval = setInterval(() => {
    const x = Math.random() * (window.innerWidth - balloonSize);
    const y = Math.random() * (window.innerHeight - balloonSize);
    balloon.style.left = `${x}px`;
    balloon.style.top = `${y}px`;
  }, 1000);
}

// Function to burst the balloon
balloon.addEventListener('click', () => {
  if (isFlying) {
    clearInterval(flyInterval);
    balloon.style.display = 'none';
    alert('Balloon Bursted!');
  }
});