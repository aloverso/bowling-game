import { Game } from './Game'

describe('Bowling Game', () => {
  it('starts with score 0', () => {
    expect(new Game().score()).toEqual(0)
  })
})