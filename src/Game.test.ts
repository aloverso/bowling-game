import { Game } from './Game'

describe('Bowling Game', () => {
  it('starts with score 0', () => {
    expect(new Game().score()).toEqual(0)
  })

  it('updates the score with the value of a roll', () => {
    const theGame = new Game()
    theGame.roll(3);
    expect(theGame.score()).toEqual(3)
  });


  it('counts the next 2 rolls for a strike', () => {
    const theGame = new Game()
    theGame.roll(10);
    theGame.roll(2)
    theGame.roll(3)
    expect(theGame.score()).toEqual(20)
  })

  it('counts two strikes in a row correctly', () => {
    const theGame = new Game()
    theGame.roll(10);
    theGame.roll(10)
    theGame.roll(3)
    theGame.roll(2)
    expect(theGame.score()).toEqual(43)
  })

  // it('max number rollable is 10', () => {
  //   const theGame = new Game()

  //   expect(theGame.roll(11)).toThrowError(new Error("Error: roll out of bounds"))
  // });

})