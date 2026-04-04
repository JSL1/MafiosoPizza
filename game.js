const board = document.getElementById("gameboard");
const scoretxt = document.getElementById("score");
const resetButton = document.getElementById("reset");
const resetButton2 = document.getElementById("reset2");

let monster = document.createElement('img');
monster.setAttribute('src', 'images/monster.png');
monster.style.position = 'relative';

function setMonster() {
    monster.style.left = (Math.floor(Math.random() * (512 - 32)) + 32) + 'px';
    monster.style.top = (Math.floor(Math.random() * (480 - 32)) + 32) + 'px';
}

board.appendChild(monster);
setMonster();
let score = 0;
let speedOffset = 0;

const intervalId = setInterval(() => {
  setMonster();
}, 1500 - (speedOffset * 50));

monster.addEventListener('click', (e) => {
    setMonster();
    score++;
    speedOffset++;
    scoretxt.innerHTML = "Score: " + score;
});

resetButton.addEventListener('click', (e) => {
    resetScore();
});

resetButton2.addEventListener('click', (e) => {
    resetSpeed();
});

function resetScore() {
    score = 0; 
    scoretxt.innerHTML = "Score: " + score;
}

function resetSpeed() {
    speedOffset = 0;
}

