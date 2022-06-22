export default function Player(name, total) {
  this.name = name;
  this.currentTotal = [0];
  this.totalPoints = total;
}

// Add rolls from current turn to total
Player.prototype.sumOfCurrentTurn = function () {
  for (let i = 0; i < this.currentTotal.length; i++) {
    this.totalPoints += this.currentTotal[i];
  }
  return this.clearCurrentTotal();
};

Player.prototype.eachRoll = function (die) {
  let number = die.roll();

  console.log('You rolled: ' + number);
  if (number !== 1) {
    this.currentTotal.push(number);
  } else {
    console.log('Oh no you rolled 1 :(');
    this.clearCurrentTotal();
  }
  return number;
};

Player.prototype.clearCurrentTotal = function () {
  this.currentTotal = [];
};
