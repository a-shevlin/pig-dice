// Business Logic

function Die(numberOfSides) {
  this.numberOfSides = numberOfSides;
}

// return a number from 1 to numberOfSides
Die.prototype.roll = function () {
  return Math.floor(Math.random() * this.numberOfSides + 1);
};
function Player(name, total) {
  this.name = name;
  this.currentTotal = [];
  this.totalPoints = total;
}
// Add rolls from current turn to total
Player.prototype.sumOfCurrentTurn = function () {
  for (let i = 0; i < this.currentTotal.length; i++) {
    this.totalPoints += this.currentTotal[i];
  }
  return (this.currentTotal = []);
};

Player.prototype.eachRoll = function () {
  let number = die.roll();

  console.log(number);
  if (number !== 1) {
    this.currentTotal.push(number);
  } else {
    return (this.currentTotal = []);
  }
};

function Game(turnNumber, maxTurnNumber) {
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

Game.prototype.roll = function (rollingPlayer) {
  const turnNumber = this.turnNumber;
  if (!this.endOfGame(turnNumber)) {
    const allPlayers = this.allPlayers;
    // currentGame is set to the object this method was called on
    const currentGame = this;
    const numberOfPlayers = this.allPlayers.length;
    const playerIndex = Math.abs((turnNumber % numberOfPlayers) - 1);
    let currentPlayer = this.allPlayers[playerIndex];
    // compare currentPlayer's name with rollingPlayer's name
    if (currentPlayer.name === rollingPlayer.name) {
      currentPlayer.eachRoll();
      // check if currentPlayer just rolled 1
      if (currentPlayer.currentTotal.length === 0) {
        let nextPlayerIndex = playerIndex + 1;
        // check if nextPlayer is not the last player in allPlayers
        if (nextPlayerIndex < allPlayers.length) {
          currentGame.hold(
            allPlayers[playerIndex],
            allPlayers[nextPlayerIndex]
          );
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

const numberOfSides = 6;
const die = new Die(numberOfSides);

// User Interface Logic

$(document).ready(function () {
  let player1 = new Player('Claire', 0);
  let player2 = new Player('Alex', 10);
  // let player3 = new Player('Seung', 0);

  // initializing game
  const lastTurn = 10;
  let gameOne = new Game(1, lastTurn);
  gameOne.addPlayer(player1);
  gameOne.addPlayer(player2);

  $('#name1').text(player1.name);
  $('#name2').text(player2.name);
  updateRoundNumber(gameOne);
  updateCurrentPlayer(gameOne);

  // when player1 clicks roll
  $('#roll1').click(function (event) {
    event.preventDefault();
    gameOne.roll(player1);
    $('#currentTotal1').text(player1.currentTotal);
    updateRoundNumber(gameOne);
    updateCurrentPlayer(gameOne);
  });

  // when player2 clicks roll
  $('#roll2').click(function (event) {
    event.preventDefault();
    gameOne.roll(player2);
    $('#currentTotal2').text(player2.currentTotal);
    updateRoundNumber(gameOne);
    updateCurrentPlayer(gameOne);
  });

  // when player1 clicks hold
  $('#hold1').click(function (event) {
    event.preventDefault();
    gameOne.hold(player1, player2);
    $('#totalPoints1').text(player1.totalPoints);
    $('#currentTotal1').text('');
    $('#roll1').prop('disabled', true);
    $('#roll2').removeAttr('disabled');
    updateRoundNumber(gameOne);
    updateCurrentPlayer(gameOne);
  });
  // when player2 clicks hold
  $('#hold2').click(function (event) {
    event.preventDefault();
    gameOne.hold(player2, player1);
    $('#totalPoints2').text(player2.totalPoints);
    $('#currentTotal2').text('');
    $('#roll2').prop('disabled', true);
    $('#roll1').removeAttr('disabled');
    updateRoundNumber(gameOne);
    updateCurrentPlayer(gameOne);
  });
});

function updateRoundNumber(gameObj) {
  let roundNumber = Math.round(gameObj.turnNumber / 2);
  $('#currentRoundNumber').text(roundNumber);
}

function updateCurrentPlayer(gameObj) {
  $('#currentPlayer').text(gameObj.getActivePlayer().name);
}

/*

button roll
button hold

$('#roll').click(function() {
  gameOne.roll();
})

$('#hold').click(function() {
  gameOne.hold(player);
  ('#hold')addAttr('disabled')
})

turn(variable)
  if(variable) {
    roll
  } else if (variable) {
    hold
  }

*/

// constructor makes objects
// objects can use methods that belong to the constructor that it was made from

// construcotr Die has roll method
// any object made with Die constructor can use the roll method

// constructor Player has sumOfCurrentTurn and eachRoll methods
// any object made with Player can use the above methods

/*
Game {
  Who is active player
  gameEnd: true/false

  this.players = [{'Claire'}, {'Alex'}]
}

methods
  Start (reset)
    Resets players’ scores
  Check if game is over
  Roll for player 1 / 2
      game.roll()
      -> rolls the die
      -> adds the rolled number to active player's score
    
  End game (?)

extended
  be able to change number of players playing
*/

// we need to check if playerObj is the active player
// if playerObj is active
//    then roll
// if not
//    not roll

// turn 12
// 12 % 2 == 0
// 11 % 2 == 1
/*
 index            0      1     2     
allPlayers = { Claire, Alex }
 length           1      2       

Turn 2
playerIndex = 1;
let nextPlayerIndex = playerIndex + 1; -> 2
if (nextPlayerIndex < this.allPlayers.length) {
  // switch to nextPlayer 
} else {
  // switch to first player
  nextPlayerIndex = 0;
}

turn 1 
allPlayers[0] <- Claire
allPlayers[1] <- Alex
turn 2 
allPlayers[1]
allPlayers[2] <- Seung
turn 3 
allPlayers[2]

turn 4 
allPlayers[0]


allPlayers[4 - 1]
  1 % 3 = 0 - 1
    allPlayers[0]
  2 % 3 = 1
    allPlayers[1]
  3 % 3 = 2
    allPlayers[2]
  
*/
