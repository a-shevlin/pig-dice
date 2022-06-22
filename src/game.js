export default function Game(turnNumber, maxTurnNumber) {
  this.turnNumber = turnNumber;
  this.maxTurnNumber = maxTurnNumber;
  this.allPlayers = [];
}

// return player object of turn owner
Game.prototype.getActivePlayer = function () {
  const turnNumber = this.turnNumber;
  const numberOfPlayers = this.allPlayers.length;

  // calculate who's turn it is by looking at turn number and number of players
  // we assume turn number starts at 1
  const playerIndex = Math.abs((turnNumber % numberOfPlayers) - 1);
  return this.allPlayers[playerIndex];
};

// attempts to roll for the rollingPlayer
Game.prototype.roll = function (die, rollingPlayer) {
  const turnNumber = this.turnNumber;
  if (!this.endOfGame(turnNumber)) {
    const allPlayers = this.allPlayers;
    // currentGame is set to the object this method was called on
    // this is to make the code more readable to humans
    const currentGame = this;
    const numberOfPlayers = this.allPlayers.length;
    const playerIndex = Math.abs((turnNumber % numberOfPlayers) - 1);
    let currentPlayer = this.allPlayers[playerIndex];
    // compare currentPlayer's name with rollingPlayer's name to see if it's rollingPlayer's turn
    if (currentPlayer.name === rollingPlayer.name) {
      // roll for currentPlayer
      currentPlayer.eachRoll(die);
      // check if currentPlayer just rolled 1
      if (currentPlayer.currentTotal.length === 0) {
        // get the nextPlayer's index in our game
        let nextPlayerIndex = playerIndex + 1;
        // check if nextPlayer is not the last player in allPlayers
        if (nextPlayerIndex < allPlayers.length) {
          // switch players
          currentGame.hold(
            allPlayers[playerIndex],
            allPlayers[nextPlayerIndex]
          );
          return true;
        } else {
          // round is over and we set the next player to first player in allPlayers
          currentGame.hold(allPlayers[playerIndex], allPlayers[0]);
        }
      }
    } else {
      // if someone tries to roll outside their turn
      console.log("it's not " + rollingPlayer.name + "'s turn");
    }
  } else {
    console.log('Reached the end of the game');
  }
};

// accepts 2 player objects and changes active player to the 2nd player obj as long as the game is not over
Game.prototype.hold = function (currPlayer, nextPlayer) {
  if (!this.endOfGame(this.turnNumber)) {
    this.activePlayer = nextPlayer;
    this.turnNumber++;
    console.log('Current Turn: ' + this.turnNumber);
    currPlayer.sumOfCurrentTurn();
  }
};

// add player to gameObj
Game.prototype.addPlayer = function (player) {
  this.allPlayers.push(player);
};

// check if currentTurn is the last turn of current game
Game.prototype.endOfGame = function (currentTurn) {
  if (currentTurn <= this.maxTurnNumber) {
    return false;
  }
  return true;
};
