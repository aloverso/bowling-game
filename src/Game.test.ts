import { Game } from './Game'

describe('Bowling Game', () => {
  let game;

  beforeEach(() => {
    game = new Game()
  })

  it('starts with score 0', () => {
    expect(game.score()).toEqual(0)
  })

  it('adds the pins from a roll to the score', () => {
    game.roll(2)
    expect(game.score()).toEqual(2)
    game.roll(3)
    expect(game.score()).toEqual(5)
  })

  it('includes the next roll when rolling a spare', () => {
    game.roll(4)
    game.roll(6)
    game.roll(5)
    expect(game.score()).toEqual(20)
  })

  it('does not include the next roll when not rolling a spare', () => {
    game.roll(4)
    game.roll(5)
    game.roll(5)
    expect(game.score()).toEqual(14)
  })
})