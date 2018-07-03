var arr, total, activePlayer, scores, currentScore, playerScore, randomNumber, gamePlaying, winnerText;
function init() {
    scores = [0, 0];
    total = 0;
    arr = [];
    activePlayer = 0;
    winnerText = 1;
    currentScore = 0;
    playerScore = 0;
    randomNumber = 0;
}
init()
gamePlaying = true;

rollDice = document.querySelector(".roll-dice");
diceRandomNumber = document.querySelector(".dice-random-number");
img = document.querySelector(".dice-random-number img");
p1active = document.querySelector(".p1active span");
p2active = document.querySelector(".p2active span");
// currentScore = document.querySelector(".current-score" + activePlayer);
holdBtn = document.querySelector(".hold-btn");
newGame = document.querySelector(".new-game");
playerScore0 = document.querySelector(".player-score0");
playerScore1 = document.querySelector(".player-score1");
currentScore1 = document.querySelector(".current-score1")
currentScore0 = document.querySelector(".current-score0")
winnerTextMsg = document.querySelector(".winner-text")
close = document.querySelector(".close");
gamesRulesText = document.querySelector(".games-rules-text");
gameRule = document.querySelector(".game-rule");
wholeBox = document.querySelector(".whole-box-bg-color");

gameRule.onclick = function(){
    wholeBox.style.opacity = "0.3"
    gamesRulesText.style.display = "block"
}

close.onclick = function(){
    gamesRulesText.style.display = "none"
    wholeBox.style.opacity = "1"
}


function newbtnClick() {
    init();
    p1active.classList.add("active");
    p2active.classList.remove("active");
    playerScore0.innerHTML = 0;
    playerScore1.innerHTML = 0;
    playerScore0.style.color = "#333";
    playerScore1.style.color = "#333";
    img.style.display = "none";
    currentScore1.innerHTML = 0;
    currentScore0.innerHTML = 0;
    winnerTextMsg.innerHTML = ""
    holdBtn.onclick = function () {
        holdbtnFunc()
        nextPlayer();
    }
    rollDice.onclick = function () {
        rolldiceFunc()
    }
}

function newBtnFunc() {
    newGame.onclick = function () {
        // if(scores[activePlayer] >= 10){
        //     gamePlaying = !gamePlaying;
        // }
        if (gamePlaying = true) {
            newbtnClick()
        } else {
            newbtnClick()
        }

    }

}
newBtnFunc();

function totalCurrentScore() {
    for (var i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    return total;
}

function currentScoreValue() {
    currentScore.innerHTML = totalCurrentScore();
}

function rolldiceFunc() {
    if (gamePlaying) {
        randomNumber = Math.floor(Math.random() * 6) + 1;
        img.setAttribute("src", "images/dice-" + randomNumber + ".png");
        img.style.display = "block";
        arr.push(randomNumber);
        total = 0;
        if (randomNumber !== 1) {
            currentScore = document.querySelector(".current-score" + activePlayer);
            currentScoreValue();
        } else {
            nextPlayer();

        }
    }
}

rollDice.onclick = function () {
    rolldiceFunc()
}

holdBtn.onclick = function () {
    holdbtnFunc()
    nextPlayer();
}

function holdbtnFunc() {
    randomNumber.innerHTML = 0;
    scores[activePlayer] = scores[activePlayer] + total;
    playerScore = document.querySelector(".player-score" + activePlayer);
    playerScore.innerHTML = scores[activePlayer];

    if (scores[activePlayer] >= 100) {
        p1active.classList.toggle("active");
        p2active.classList.toggle("active");
        playerScore.style.color = "#236ed0";
        playerScore = document.querySelector(".player-score" + activePlayer);    
        winnerTextMsg.innerHTML = "Winner Player" + " " + winnerText + "!";
        holdBtn.onclick = function () {}
        gamePlaying = !gamePlaying;
    }

}

function nextPlayer() {
    p1active.classList.toggle("active");
    p2active.classList.toggle("active");
    arr = [];
    currentScore.innerHTML = 0;
    img.style.display = "none"
    total = 0;
    //ternary operator    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    winnerText === 1 ? winnerText = 2 : winnerText = 1;
    
}

