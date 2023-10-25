export class Game {
  runningScore: number;
  frame: number;
  ballOfFrame: number;
  frameScore: number;
  prevSpare: boolean

  constructor() {
    this.runningScore = 0
  }

  roll (pins: number): void {
    this.setFrame();
    if (this.ballOfFrame === 0 && this.prevSpare === true) {
      this.frameScore += pins*2
      this.prevSpare = false
    }
    this.frameScore += pins;
    if (this.ballOfFrame === 1 && this.frameScore === 10) {
      this.prevSpare = true
    }
    this.runningScore += pins;
  }

  isSpare (): void {
    if (this.ballOfFrame == 1 && this.frameScore == 10){
      this.prevSpare = true
    }
    else {
      this.prevSpare = false
    }
  }

  setFrame (): void {
    if (this.ballOfFrame === 0) {
      this.ballOfFrame += 1;
    } else {
      this.ballOfFrame = 0;
      this.frame += 1;
      this.frameScore = 0;
    }
  }

  score (): number {
    return this.runningScore
  }
}