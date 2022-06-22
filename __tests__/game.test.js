import Game from './../src/game.js';
import Player from './../src/player.js';

describe('Game', () => {
  let reusableGame;

  beforeEach(() => {
    reusableGame = new Game(1, 10);
  });

  test('should create a game object turn starting at 1 and ending at 10', () => {
    expect(reusableGame.turnNumber).toEqual(1);
    expect(reusableGame.maxTurnNumber).toEqual(10);
  });

  test('should be able to add a player', () => {
    const player = new Player('Jonathan', 0);
    reusableGame.addPlayer(player);
    expect(reusableGame.allPlayers[0]).toEqual(player);
  });

  test('should return first player as active player', () => {
    const player01 = new Player('Jonathan', 0);
    const player02 = new Player('Garrett', 0);
    reusableGame.addPlayer(player01);
    reusableGame.addPlayer(player02);
    expect(reusableGame.getActivePlayer()).toEqual(player01);
  });
});

/*
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


Description for Game.prototype.endOfGame()

Test1: 
Code: endOfGame(currentTurn)
Expected Output: 
*/