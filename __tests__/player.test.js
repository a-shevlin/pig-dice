import Player from './../src/player.js';

describe('Player', () => {
  let reusablePlayer;

  beforeEach(() => {
    reusablePlayer = new Player("Garrett", 0);
  });

  test('should create a player object with name and starting score', () => {
    expect(reusablePlayer.name).toEqual("Garrett");
    expect(reusablePlayer.totalPoints).toEqual(0);
  });

  // test('should output a number between 1 and 20', () => {
  //   expect(reusableDie.roll()).toBeLessThan(21);
  // });
});

// Test1: "Create a player object with name and starting score"
// Code: new Player('Claire', 0);
// Expected Output: { name: 'Claire', currentTotal: [], totalPoints: 0 }