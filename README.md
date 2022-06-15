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

Description for 

Test1: 
Code: 
Expected Output: 

Description for 

Test1: 
Code: 
Expected Output: 

```


# Pig Dice

#### By Alex Shevlin, Claire Thorington, Seung Lee

#### A website where you can play a pig dice game with another person

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery

## [GitHub Pages Link](https://leark.github.io/pig-dice)

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

[GNU](/LICENSE-GNU)

Copyright (c) 2022 Seung Lee