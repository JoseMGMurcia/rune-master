export class DiceRoll {
  public dice: number;
  public sides: number;
  public modifier: number;

  constructor(dice: number, sides: number, modifier = 0) {
    this.dice = dice;
    this.sides = sides;
    this.modifier = modifier;
  }

  public roll(): number {
    let result = 0;
    for (let i = 0; i < this.dice; i++) {
      result += Math.floor(Math.random() * this.sides) + 1;
    }
    result += this.modifier;
    return result;
  }

  public static toString(roll: DiceRoll | undefined): string {
    if (roll && roll.dice === 0) {return `${roll.modifier}`;}
    else if (!roll) {return '';}
    const modifier = roll.modifier ? `+${roll.modifier}` : '';
    const sign = roll.modifier > 0 ? '+' : roll.modifier < 0 ? '-' : '';
    return `${roll.dice}D${roll.sides}${sign}${modifier}`;
  }
}
