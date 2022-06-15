// Business Logic

function Die(numberOfSides) {
  this.numberOfSides = numberOfSides;
}

Die.prototype.roll = function () {
  return Math.floor(Math.random() * this.numberOfSides + 1);
};
function Player(name, total) {
  this.name = name;
  this.currentTotal = [];
  this.totalPoints = total;
}
// Add score to total
Player.prototype.sumOfCurrentTurn = function () {
  for (let i = 0; i < this.currentTotal.length; i++) {
    this.totalPoints += this.currentTotal[i];
  }
  return (this.currentTotal = []);
};

// Add score to turn total
// if rolled 1 then
Player.prototype.eachRoll = function () {
  let number = die.roll();
  if (number !== 1) {
    this.currentTotal.push(number);
  } else {
    return (this.currentTotal = []);
  }
};

function Game(activePlayer) {
  this.activePlayer = activePlayer;
}

/*
Game {
  Who is active player
  gameEnd: true/false
}

methods
  Start (reset)
    Resets players’ scores
  Check if game is over
  Roll for player 1 / 2
    Check for if rolled 1
  End game (?)

extended
  be able to change number of players playing
*/
const numberOfSides = 6;
let die = new Die(numberOfSides);
let player1 = new Player('Claire', 0);
let game = new Game(1);
player1.eachRoll();
player1.eachRoll();
player1.sumOfCurrentTurn();
console.log(player1);

// User Interface Logic
