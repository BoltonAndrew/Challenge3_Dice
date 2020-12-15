const score = document.getElementById("score");
const dice = document.getElementById("dice");
const button = document.getElementById("roll");
const player = document.getElementById("player");

button.addEventListener("click", () => {
    button.innerHTML = "roll";
    player.innerHTML = "Player 1";
    let x = Math.floor(Math.random() * 6) + 1;
    let y = parseInt(score.innerHTML);
    dice.src = `./img/dice${x}.png`;
    
    if (x === 1) {
        player.innerHTML = "You Lose!";
        score.innerHTML = 0;
        button.innerHTML = "Play Again?";
    }else if (score.innerHTML < 20) {
        y += x;
        score.innerHTML = y
    }
    if (score.innerHTML >= 20) {
        player.innerHTML = "You Win!";
        button.innerHTML = "Play Again?";
    }
})
