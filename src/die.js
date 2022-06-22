export default function Die(numberOfSides) {
  this.numberOfSides = numberOfSides;
}

// return a number from 1 to numberOfSides
Die.prototype.roll = function () {
  return Math.floor(Math.random() * this.numberOfSides + 1);
};
