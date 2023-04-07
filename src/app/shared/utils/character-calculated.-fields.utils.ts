import { NUMBERS } from "../constants/number.constants";
import { Character, Location } from "../models/character.model";
import { DiceRoll } from "../models/dices.model";

export const getHp = (pj: Character): number =>
  Math.ceil((pj.stats.CON.value + pj.stats.SIZ.value) / NUMBERS.N_2) + pj.bonusHP;

export const getFP = (pj: Character): number =>
  pj.stats.CON.value + pj.stats.STR.value + pj.bonusFP;

export const getMP = (pj: Character): number =>
  pj.stats.POW.value + pj.bonugMP;

export const getDMGMod = (pj: Character): DiceRoll => {
  const target = pj.stats.STR.value + pj.stats.SIZ.value;
  if (target < NUMBERS.N_13) {
    return new DiceRoll(- NUMBERS.N_1, NUMBERS.N_4);
  } else if (target < NUMBERS.N_25) {
    return new DiceRoll(NUMBERS.N_0, NUMBERS.N_4,);
  } else if (target < NUMBERS.N_33) {
    return new DiceRoll(NUMBERS.N_1, NUMBERS.N_4);
  } else if (target < NUMBERS.N_41) {
    return new DiceRoll(NUMBERS.N_1, NUMBERS.N_6);
  } else if (target < NUMBERS.N_57) {
    return new DiceRoll(NUMBERS.N_2, NUMBERS.N_6);
  } else {
    const times = Math.ceil((target - NUMBERS.N_56) / NUMBERS.N_16);
    return new DiceRoll(times + NUMBERS.N_2, NUMBERS.N_6);
  }
}

export const getCAR = (pj: Character, inCombat = true): number => {
  let CAR = NUMBERS.N_0;
  const allEquip = [
    ...pj.equipment,
    ...pj.weapons,
    ...pj.armor
  ];
  allEquip.forEach((item) => {
     CAR+= !inCombat ? item.weight : item.inCombat ? item.weight : NUMBERS.N_0;
  });
  //TODO Armor CAR penalty when double hard armor in same location

  return CAR;
}

export const getMRDES = (pj: Character): number => {
  const dex = pj.stats.DEX.value;
  if (dex < NUMBERS.N_10) {
    return NUMBERS.N_4;
  } else if (dex < NUMBERS.N_16) {
    return NUMBERS.N_3;
  } else if (dex < NUMBERS.N_20) {
    return NUMBERS.N_2;
  } else {
    return NUMBERS.N_1;
  }
}

export const getMRSIZ = (pj: Character): number => {
  const siz = pj.stats.SIZ.value;
  if (siz < NUMBERS.N_10) {
    return NUMBERS.N_3;
  } else if (siz < NUMBERS.N_16) {
    return NUMBERS.N_2;
  } else if (siz < NUMBERS.N_20) {
    return NUMBERS.N_1;
  } else {
    return NUMBERS.N_0;
  }
}

const getMod = (primary: number[], secondary: number[], negative: number[]): number => {
  let value = NUMBERS.N_0;
  for (const i of primary) {
    value += i - NUMBERS.N_10;
  }
  for (const i of secondary) {
    const maxValue = i > NUMBERS.N_30 ? NUMBERS.N_30 : i;
    if (maxValue > NUMBERS.N_10) {
      value += Math.ceil((maxValue - NUMBERS.N_10) / NUMBERS.N_2);
    }else {
      value += Math.floor((maxValue - NUMBERS.N_10) / NUMBERS.N_2);
    }
  }
  for (const i of negative) {
    value -= i - NUMBERS.N_10;
  }
  return value;
}

export const getAgiMod = (pj: Character): number => {
  const primary = [ pj.stats.DEX.value ];
  const secondary = [ pj.stats.STR.value ];
  const negative = [ pj.stats.SIZ.value ];
  return getMod(primary, secondary, negative);
}

export const getComMod = (pj: Character): number => {
  const primary = [ pj.stats.INT.value ];
  const secondary = [ pj.stats.POW.value, pj.stats.CHA.value ];
  return getMod(primary, secondary, []);
}

export const getKnoMod = (pj: Character): number => {
  const primary = [ pj.stats.INT.value ];
  return getMod(primary, [], []);
}

export const getMagMod = (pj: Character): number => {
  const primary = [ pj.stats.INT.value, pj.stats.POW.value ];
  const secondary = [ pj.stats.DEX.value];
  return getMod(primary, secondary, []);
}

export const getManMod = (pj: Character): number => {
  const primary = [ pj.stats.INT.value, pj.stats.DEX.value ];
  const secondary = [ pj.stats.STR.value];
  return getMod(primary, secondary, []);
}

export const getPerMod = (pj: Character): number => {
  const primary = [pj.stats.INT.value];
  const secondary = [ pj.stats.POW.value, pj.stats.CON.value ];
  return getMod(primary, secondary, []);
}

export const getSteMod = (pj: Character): number => {
  const primary = [pj.stats.DEX.value];
  const negative = [ pj.stats.POW.value, pj.stats.SIZ.value ];
  return getMod(primary, [], negative);
}

export const getFreeINTPoints = (pj: Character): number => {
  let points = pj.stats.INT.value;
  pj.spells.SPIRITUAL.forEach((spell) => {
    points -= spell.memorized  ? spell.points : NUMBERS.N_0;
  });
  pj.spells.SORCERY.forEach((spell) => {
    points -= spell.memorized  ? NUMBERS.N_1 : NUMBERS.N_0;
  });
  return points;
}

export const getHpByLocation = (pj: Character, loc: Location): number => {
  const hp = getHp(pj) + pj.bonusHP;
  const hpRatio = loc.hitpointsRatio;
  const locHP  =  Math.ceil((hp*hpRatio));
  return  locHP;
}

export const getArmorByLocation = (pj: Character, loc: Location): number => {
  let armor = NUMBERS.N_0;
  pj.armor.forEach((item) => {
    if (item.locations.some((l) => l === loc.name)) {
      armor += item.armorPoints;
    }
  });
  return armor + (loc.bonusAP ? loc.bonusAP : NUMBERS.N_0);
}

export const getArmorTypeByLocation = (pj: Character, loc: Location): string => {
  const armorsInLoc: string[] = [];
  pj.armor.forEach((item) => {
    if (item.locations.some((l) => l === loc.name)) {
      armorsInLoc.push(item.name);
    }
  });
  return  armorsInLoc.toString();
}

export const getWeaponList = (pj: Character): string[] => {
  const weapons: string[] = [];
  pj.skills.ATTACK.forEach((skill) => {
    weapons.push(skill.name);
  });
  pj.skills.DEFENSE.forEach((skill) => {
    weapons.push(skill.name);
  });


  return Array.from(new Set(weapons));
}

