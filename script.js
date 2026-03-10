const pet = document.getElementById('pet-container');
let posX = 100;
let speed = 2;
let direction = 1; // 1: Kanan, -1: Kiri

function updateMovement() {
    const states = ['idle', 'walking', 'walking', 'idle'];
    const currentState = states[Math.floor(Math.random() * states.length)];
    
    pet.className = currentState;

    if (currentState === 'walking') {
        // Tentukan arah jalan
        if (Math.random() > 0.5) {
            direction *= -1;
        }
    }

    // Set flip gambar ikut arah
    if (direction === -1) {
        pet.classList.add('face-left');
    } else {
        pet.classList.remove('face-left');
    }
}

// Lojik pergerakan robot di skrin
function moveRobot() {
    if (pet.classList.contains('walking')) {
        posX += speed * direction;
        
        // Elakkan keluar dari skrin
        if (posX > window.innerWidth - 80 || posX < 0) {
            direction *= -1;
            pet.classList.toggle('face-left');
        }
        pet.style.left = posX + 'px';
    }
    requestAnimationFrame(moveRobot);
}

// Bila klik robot
pet.addEventListener('click', () => {
    pet.className = 'clicked';
    setTimeout(() => {
        updateMovement();
    }, 1000);
});

// Tukar mood robot setiap 3 saat
setInterval(updateMovement, 3000);

// Mula gerakkan robot
moveRobot();