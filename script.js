let score;
let timer;
let hitrn;

// const mainHeight = document.querySelector("#main").offsetHeight;
// const mainwidth = document.querySelector("#main").offsetWidth -30;
// const ptopheight = document.querySelector("#ptop").offsetHeight;
// const bubbleSize = 60;

// const pbtmHeight = (mainHeight - ptopheight) -30;
// const bubbleEachRow = Math.floor((mainwidth/bubbleSize));
// const totalRows = Math.floor((pbtmHeight/bubbleSize));
// maxBubbles = bubbleEachRow*totalRows;



// Functions to control game
// Start game with initial values 
function playGame(){
    timer = 60;
    score = 0;
    document.querySelector("#score").textContent = score;
    generatebubble();
    generateHit();
    runTimer();
}

// Create bubbles
function generatebubble() {
    let clutter = "";

    for (i = 1; i <= 119; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble"><span class="hidden-number">${rn}</span></div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

// Control game timer
function runTimer() {
    var timerInterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else {
            clearInterval(timerInterval);
            let gameOverMenu = `<div class="over-menu">
            <h1>Game Over!!</h1>
            <h2 class=".score">Your Score - <span>${score}</span></h2>
            <button id="play-again">Play again</button>
            </div>`;
            document.querySelector("#pbtm").innerHTML = gameOverMenu;
            document.querySelector("#play-again").addEventListener("click", function () {
                // location.reload();
                playGame();
            })

        }
    }, 1000);

}

// Generate random number as target
function generateHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hitrn;
}

// Control score value
function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

// Initial display
let startMenu = `<button id="start-game">Start Game</button>`;
document.querySelector("#pbtm").innerHTML = startMenu;

// Start button event listener
document.querySelector("#start-game").addEventListener("click", function () {
    playGame();
})

// Event listener to get bubble clicked and control the bubble clicked
document.querySelector("#pbtm").addEventListener("click", function (dets) {
    let clickedNum = Number(dets.target.textContent);
    if (clickedNum === hitrn) {
        increaseScore();
        generatebubble();
        generateHit();
    }

    let number = dets.target.querySelector("span");
    if (number.classList.contains("hidden-number")) {
        number.classList.remove("hidden-number");
    }

})

