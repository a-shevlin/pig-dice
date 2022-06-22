import Player from './../src/player.js';
import Die from './../src/die.js';

describe('Player', () => {
  let reusablePlayer;

  beforeEach(() => {
    reusablePlayer = new Player("Garrett", 0);
  });

  test('should create a player object with name and starting score', () => {
    expect(reusablePlayer.name).toEqual("Garrett");
    expect(reusablePlayer.totalPoints).toEqual(0);
  });

  test('should clear currentTotal if 1 is rolled', () => {
    const die = new Die(6);
    const rolledNumber = reusablePlayer.eachRoll(die);
    // run eachRoll on reusablePlayer and then store the number rolled and compare it to currentTotal of reusablePlayer

    if (rolledNumber === 1) {
      // expect empty currentTotal
      expect(reusablePlayer.currentTotal).toEqual([]);
    } else {
      // expect currentTotal to have the rolledNumber
      expect(reusablePlayer.currentTotal[reusablePlayer.currentTotal.length - 1]).toEqual(rolledNumber);
    }
  });

  test('should add current roll to currentTotal', () => {
    const die = new Die(6);
    const rolledNumber = reusablePlayer.eachRoll(die);

    if (rolledNumber !== 1) {
      expect(reusablePlayer.currentTotal[reusablePlayer.currentTotal.length - 1]).toEqual(rolledNumber);
    } else {
      expect(reusablePlayer.currentTotal).toEqual([]);
    }
  });

  test('should add currentTotal array into totalPoints', () => {
    reusablePlayer.currentTotal = [3, 4, 5];
    reusablePlayer.sumOfCurrentTurn();
    expect(reusablePlayer.totalPoints).toEqual(12)
  });
  
  test('should clear currentTotal to be empty array', () => {
    reusablePlayer.currentTotal = [3, 4, 5];
    reusablePlayer.clearCurrentTotal();
    expect(reusablePlayer.currentTotal).toEqual([]);
  });
});
