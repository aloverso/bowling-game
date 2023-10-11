import { Game } from './Game'

describe('Bowling Game', () => {
  let game;
  beforeEach(() => {
    game = new Game()
  })
  it('starts with score 0', () => {
    expect(game.score()).toEqual(0)
  })
  it("cannot have a negative score", () => {
    game.roll(0);
    expect(game.score()).not.toBeLessThan(0);
  });
  it("should have a score equal the number of pins knocked down after one roll", () => {
    game.roll(7);
    expect(game.score()).toEqual(7);
  });
  it('should add two rolls together', () => {
    game.roll(6);
    game.roll(3);
    expect(game.score()).toEqual(9);
  });
  it('If you got a spare, the third score will be 10 + 2*(third)', () => {
    // frame 1
    game.roll(6);
    game.roll(4);

    // frame 2
    game.roll(8);
    expect(game.score()).toEqual(26);
    game.roll(2);

    // frame 3
    game.roll(3);
    expect(game.score()).toEqual(34);
  });
})