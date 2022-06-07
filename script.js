// Initialisation des variables
let playerNumber, activePlayer, scores, diceScore, inGame, currentScores;

var player1 = "Player 1";
var player2 = "Player 2";

// Function to change the player name
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");
   
    document.querySelector("h2.Player1").innerHTML = player1;
    document.querySelector("h2.Player2").innerHTML = player2;
}
// RAZ
function newGame() {
  scores = [0, 0];
  currentScores = [0, 0];
  activePlayer = 0;
  diceScore = 0;
  inGame = true;
  playerNumber = [1, 2];

  document.getElementById('img-result').src = './img/dice1.png';
  document.getElementById('score-player-1').textContent = 0;
  document.getElementById('score-player-2').textContent = 0;
  document.getElementById('dice-result-1').textContent = 0;
  document.getElementById('dice-result-2').textContent = 0;
  document.getElementById('select-player-1').style.color = 'white';
  document.getElementById('select-player-2').style.color = 'black';
}
