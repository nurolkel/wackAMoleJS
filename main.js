const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeDisplay = document.getElementById('time-left');
const scoreDisplay = document.getElementById('score');


console.log(scoreDisplay);
console.log(timeDisplay);

let score = 0;
let hitPosition;
let timer = 60;
let timerId;

function randomeSqaures() {
    squares.forEach(element => {
        element.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mouseup', () => {
        if (square.id === hitPosition) {
            score = score + 1;
            scoreDisplay.textContent = score;
            hitPosition = null;
        }
    })
})

function moveMole() {
    timerId = setInterval(randomeSqaures,500)
};

moveMole();

function countDown() {
    timer--;

    timeDisplay.textContent = timer;

    if (timer === 0) {
        clearInterval(countDownTimer)
        clearInterval(timerId);
        alert('The game is over, your score is ' + score)
    }
}

let countDownTimer = setInterval(countDown,1000)

