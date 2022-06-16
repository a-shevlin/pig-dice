# Pig Dice

#### By Alex Shevlin, Claire Thorington, Seung Lee

#### A website where you can play a pig dice game with another person

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery

## [GitHub Pages Link](https://a-shevlin.github.io/pig-dice)

## Description

This is a website that allows two players to play pig dice game. The website indicates whose turn it is and the round the game is in. On the player's turn, they can either roll or hold by clicking on the button on their side. If roll is clicked, the number rolled will be displayed unless the number is 1. The player can click roll as many times as they want until 1 is rolled or they click hold. If 1 is rolled then the player's turn will end and go to the next player's turn. If player clicks hold, it will add all the rolls thrown so far and add it to the total.

## Setup/Installation Requirements

1. Open Git Bash if on Windows and terminal if on Mac
2. Run the command

    ``Git clone https://github.com/leark/pig-dice``

3. Go inside pig-dice directory
4. Open index.html

## Known Bugs

* _dice overlap onto roll button if too many_

## Test 

```
Description for Die()

Test1: "Create a die with x sides"
Code: new Die(x)
Expected Output: { numberOfSides: x };

Description for Die.prototype.roll

Test1: "Get a random number from the die object"
Code: die.roll()
Expected Output: a number between 1 and 6

Description for Player()

Test1: "Create a player object with name and starting score"
Code: new Player('Claire', 0);
Expected Output: { name: 'Claire', currentTotal: [], totalPoints: 0 }

Description for Player.prototype.eachRoll

Test1: "Add current roll to currentTotal and return array of current rolls"
Code: sumOfEachRoll()
Expected Output: [number]

Test2: "If rolled number is 1 then return empty array"
Code: sumOfEachRoll()
Expected Output: []

Description for Player.prototype.sumOfCurrentTurn

Test1: "Add currentTotal array into totalPoints and empty the currentTotal"
Code: sumOfCurrentTurn()
Expected Output: Player Object {
  name: 'Claire', 
  currentTotal: [], 
  totalPoints: (x + y + z) 
}

Description for Game()

Test1: "Create game object that keeps track of active player"
Code: new Game('Claire')
Expected Output: { activePlayer: 'Claire' }

Description for Game.prototype.roll

Test1: "Roll a number for playerObj"
Code: roll(playerObj)
Expected Output: 

Description for Game.prototype.hold()

Test1: "Switch from current player to next player"
Code: gameObj.hold(player2, player1);
Expected Output: Becomes next player's turn
gameObj {
  turnNumber: x,
  maxTurnNumber: y,
  allPlayers: [],
  activePlayer: player1
}


Description for Game.prototype.addPlayer()

Test1: 
Code: addPlayer(playerObj)
Expected Output: 

Description for Game.prototype.endOfGame()

Test1: 
Code: endOfGame(currentTurn)
Expected Output: 

```

## License

[GNU](/LICENSE-GNU)

Copyright (c) 2022 Seung Lee