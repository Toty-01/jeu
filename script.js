// Player name
var player1 = "Player 1";
var player2 = "Player 2";

// Function to change the player name
function editNames() {
    player1 = prompt("Change Player1 name");
    player2 = prompt("Change player2 name");

    document.querySelector("h2.Player1").innerHTML = player1;
    document.querySelector("h2.Player2").innerHTML = player2;
}
// Function to roll dice
function rollTheDice() {
  setTimeout(function () {
      var randomNumber = Math.floor(Math.random() * 6) + 1;

      document.querySelector(".img-dice").setAttribute("src",
          "./img/dice" + randomNumber + ".png");
  }, 100);
}
