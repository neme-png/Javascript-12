function diceGame(){
let rolls=parseInt(prompt("How many times do i have to roll the dices?"),10)



function rollDices(times) {
    let total = 0;
    for (let i = 0; i < times; i++) {
        total += Math.floor(Math.random() * (6 - 1) + 1)
    }
    return total;
}



let playerScore1 = rollDices(rolls);
let playerScore2 = rollDices(rolls);

console.log(`Player 1 scored ${playerScore1}`);
console.log(`Player 2 scored ${playerScore2}`);

if (playerScore1 > playerScore2) {
    console.log(`Player 1 is THE WINNER!!!`);
    
}if (playerScore1 < playerScore2) {
    console.log(`Player 2 is THE WINNER!!!`);
     
}else console.log(`Its a TIE!!!`);



} 
diceGame();