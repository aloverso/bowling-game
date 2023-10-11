import retryTimes = jest.retryTimes;

export class Game {
  currentScore: number;
  rollCount: number
  frameScore: number
  prevSpare: boolean

  constructor() {
    this.currentScore = 0;
    this.rollCount = 0
    this.frameScore = 0
    this.prevSpare = false
  }

  roll (pins: number): void {
    this.rollCount += 1;
    this.frameScore += pins
    if (this.rollCount % 2 === 0 ) {

      if (this.frameScore === 10) {
        this.prevSpare = true;
      }
      this.frameScore = 0
    }

    this.currentScore += this.frameScore;
  }

  score (): number {
    return this.currentScore
  }
}