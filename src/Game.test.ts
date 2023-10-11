import { Game } from "./Game";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

describe("Bowling Game", () => {
  it("starts with score 0", () => {
    expect(new Game().score()).toEqual(0);
  });

  it("should have 10 frames", () => {
    const game = new Game();
    expect(game.frames.length).toEqual(10);
  });

  it("starts at frame 0", () => {
    const game = new Game();
    expect(game.currentFrame).toEqual(0);
  });

  it("every 2 rolls the frame should advance", () => {
    const game = new Game();
    const firstRoll = getRandomInt(11);
    game.roll(firstRoll);
    expect(game.currentFrame).toEqual(0);
    game.roll(getRandomInt(11 - firstRoll));
    expect(game.currentFrame).toEqual(1);

    const thirdRoll = getRandomInt(11);
    game.roll(thirdRoll);
    game.roll(getRandomInt(11 - thirdRoll));
    expect(game.currentFrame).toEqual(2);
  });

  describe("when player has no pending strikes or spares", () => {
    it("adds the number of pins knocked over to the score", () => {
      const game = new Game();
      game.roll(3);
      expect(game.score()).toEqual(3);
    });
  });

  describe("Frames", () => {
    it("frames 1-9 should have 2 rolls", () => {
      const game = new Game();
      const frame = game.frames[getRandomInt(9)];
      expect(frame.rolls).toEqual(2);
    });
  });
});
