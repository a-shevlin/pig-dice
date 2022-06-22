import Game from './../src/game.js';
import Player from './../src/player.js';
import Die from './../src/die.js';

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

  test('return true if game has ended', () => {
    // last turn is 10 so 11 means game has ended
    expect(reusableGame.endOfGame(11)).toEqual(true);
  })

  test('increments turn and adds currently rolled numbers to total points of the current active player and changes current active player to 2nd argument', () => {
    const player01 = new Player('Jonathan', 0);
    const player02 = new Player('Garrett', 0);
    player01.currentTotal = [2, 4, 2];
    reusableGame.addPlayer(player01);
    reusableGame.addPlayer(player02);
    reusableGame.hold(player01, player02);
    expect(reusableGame.getActivePlayer()).toEqual(player02);
    expect(player01.totalPoints).toEqual(8);
    expect(reusableGame.turnNumber).toEqual(2);
  });

  // each round, every player gets a turn
  test('rolls for player object that\'s passed in and passes to next player if 1 is rolled. Returns true if player rolled 1 and round has not ended. Returns false if round has ended', () => {
    const die = new Die(6);
    const player01 = new Player('Jonathan', 0);
    const player02 = new Player('Garrett', 0);
    reusableGame.addPlayer(player01);
    reusableGame.addPlayer(player02);
    const rolledOne = reusableGame.roll(die, player01);
    if (Number.isInteger(rolledOne)) {
      expect(rolledOne).toBeLessThan(7);
      expect(rolledOne).toBeGreaterThan(1);
    } else if (rolledOne) {
      expect(reusableGame.turnNumber).toEqual(2);
      expect(player01.totalPoints).toEqual(0);
    }
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