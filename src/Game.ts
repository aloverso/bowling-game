export class Game {
  scoreValue:number ;
  uncalculatedStrikeRollsLeft: number;
  

  constructor() {
    this.scoreValue = 0;
    this.uncalculatedStrikeRollsLeft = 0;
  }  

  roll (pins: number): void {
    // if (pins > 10) {
    //   throw new Error("Error: roll out of bounds")
    // }
    
    if(this.uncalculatedStrikeRollsLeft > 0){
      this.scoreValue += (pins * 2)
      this.uncalculatedStrikeRollsLeft--;
    }
    else {
      this.scoreValue += pins
    }
    
    if(pins == 10){
      this.uncalculatedStrikeRollsLeft  = 2;
    }
  }

  score (): number {
    return this.scoreValue

  }
}