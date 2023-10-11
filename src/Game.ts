export class Game {
  currentFrame: number;
  playerScore: number;
  firstRun: boolean;
  frames: Frame[] = [];

  constructor() {
    this.playerScore = 0;
    this.currentFrame = 0;
    for (let i = 0; i < 10; i++) {
      this.frames.push(new Frame());
    }
    this.firstRun = true;
  }

  roll(pins: number): void {
    this.playerScore += pins;
    if (!!this.firstRun) {
      this.firstRun = false;
    } else {
      this.firstRun = true;
      this.currentFrame += 1;
    }
  }

  score(): number {
    return this.playerScore;
  }
}

export class Frame {
  rolls: number;

  constructor() {
    this.rolls = 2;
  }
}
