BASE_DIR = "assets/img/";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function message(message, color) {
    document.querySelector("#winAnnounce").style.color = color;
    document.querySelector("#winAnnounce").textContent = message;

}

let diceOne = 0;
let diceTwo = 0;

function checkWinner(){
    if (diceOne === diceTwo) {
        message("Match Draw", "white");
    }
    else if (diceOne > diceTwo) {
        message("Player 1 Wins!", "green");
        
    }
    else {
        message("Player 2 Wins!", "green");
    }
    diceOne = diceTwo = 0;
}

async function rollDice(diceNode) {
    
    if (diceNode === 1) {
        if (diceOne !==0){
            message("Let the other guy play!", "red")
        }

        else {

            const dice = document.querySelector("#diceOne");
            for (let i = 0; i < 15; i++) {
                
                dice.style.backgroundImage = "url(\"" + BASE_DIR + (Math.floor(Math.random()*6)+1) + ".png\")";
                await sleep(10);
            }
            diceOne = Math.floor(Math.random()*6)+1;
            dice.style.backgroundImage = "url(\"" + BASE_DIR + diceOne + ".png\")";
            if (diceTwo !== 0) {
                checkWinner();
            }
        }
    }
    else {
        if (diceTwo !== 0) {
            message("Let the other guy play!", "red");
        }
        else {

            const dice = document.querySelector("#diceTwo");
            for (let i = 0; i < 15; i++) {
                
                dice.style.backgroundImage = "url(\"" + BASE_DIR + (Math.floor(Math.random()*6)+1) + ".png\")";
                await sleep(10);
            }
            diceTwo = Math.floor(Math.random()*6)+1;
            dice.style.backgroundImage = "url(\"" + BASE_DIR + diceTwo + ".png\")";
            if (diceOne !== 0) {
                checkWinner();
            }
        }
    }
}