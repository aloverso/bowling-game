export class Game {
  totalFrames: number;
  currentFrame: number;
  currentScore: number;
  frameScore: number;
  applySpareBonus: boolean;

  constructor() {
    this.totalFrames = 10;
    this.currentFrame = 0;
    this.currentScore = 0;
    this.frameScore = 0;
  }

  roll(pins: number): void {
    this.currentScore += pins;
    if (this.applySpareBonus) {
      this.currentScore += pins;
      this.applySpareBonus = false;
    }

    const isFirstRoll = this.currentFrame == Math.floor(this.currentFrame);
    if (isFirstRoll && pins === 10) {
      this.currentFrame++;
      this.frameScore = pins;
    } else if (!isFirstRoll && pins + this.frameScore === 10) {
      this.applySpareBonus = true;
    } else {
      this.currentFrame += 0.5;
    }

    if (!isFirstRoll) {
      this.frameScore = 0;
    }
  }

  score(): number {
    return this.currentScore;
  }
}
