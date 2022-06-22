/* eslint-disable no-undef */
import Die from './../src/die.js';

describe('Die', () => {
  let reusableDie;

  beforeEach(() => {
    reusableDie = new Die(20);
  });

  test('should create a die with 20 sides', () => {
    reusableDie = new Die(20);
    expect(reusableDie.numberOfSides).toEqual(20);
  });

  test('should output a number between 1 and 20', () => {
    expect(reusableDie.roll()).toBeLessThan(21);
  });
});
