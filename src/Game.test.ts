import { Game } from "./Game";

describe("Bowling Game", () => {
  it("starts with score 0", () => {
    expect(new Game().score()).toEqual(0);
  });

  it("has ten frames", () => {
    expect(new Game().totalFrames).toEqual(10);
  });

  it("increments the current frame once per two rolls", () => {
    const game = new Game();

    expect(game.currentFrame).toEqual(0);

    game.roll(0);

    expect(game.currentFrame).not.toEqual(1);

    game.roll(0);

    expect(game.currentFrame).toEqual(1);
  });

  it("increments the current frame if the first roll of a frame is 10 pins", () => {
    const game = new Game();
    expect(game.currentFrame).toEqual(0);

    game.roll(10);
    expect(game.currentFrame).toEqual(1);
  });

  it("increments the current frame if the first roll of a frame is 10 pins", () => {
    const game = new Game();
    expect(game.currentFrame).toEqual(0);

    game.roll(0);
    expect(game.currentFrame).toEqual(0.5);

    game.roll(10);
    expect(game.currentFrame).toEqual(1);
  });

  it("increments the score for the frame", () => {
    const game = new Game();
    const rollValue: number = 6;

    game.roll(rollValue);
    game.roll(10 - rollValue);
    expect(game.score()).toEqual(10);
  });

  it("adds bonus to score if a spare is rolled", () => {
    const game = new Game();
    expect(game.score()).toEqual(0);

    const rollValue = 6;
    game.roll(rollValue);
    expect(game.score()).toEqual(6);

    game.roll(10 - rollValue);
    expect(game.score()).toEqual(10);

    const nextRoll = 2;
    game.roll(nextRoll);
    expect(game.score()).toEqual(10 + nextRoll + nextRoll);
  });
});
