import { TranslateService } from '@ngx-translate/core';
import { NUMBERS } from '../constants/number.constants';
import { Character, DamageTypeEnum, Location, Skill, Weapon, WeaponTypeEnum, armorWeightRatioEnum, hitpointsRatioEnum } from '../models/character.model';
import { addNaturalArmor, addWeapon, editSkill } from './character-creation.utils';
import { WeaponNameEnum } from './equip.factory';
import { getTotal } from './dices.utils';
import { RaceTypeEnum } from '../models/races.model';
import { DiceRoll } from '../models/dices.model';

export const setRandomHumanStats = (pj: Character): void => {
  pj.stats.STR.value = getTotal(['3d6']);
  pj.stats.CON.value = getTotal(['3d6']);
  pj.stats.INT.value = getTotal(['2d6','+6']);
  pj.stats.SIZ.value = getTotal(['2d6','+6']);
  pj.stats.POW.value = getTotal(['3d6']);
  pj.stats.DEX.value = getTotal(['3d6']);
  pj.stats.CHA.value = getTotal(['3d6']);
};

export const setRandomMorocathStats = (pj: Character): void => {
  pj.stats.STR.value = getTotal(['3d6', '+6']);
  pj.stats.CON.value = getTotal(['3d6', '+6']);
  pj.stats.INT.value = getTotal(['2d6','+6']);
  pj.stats.SIZ.value = getTotal(['2d6','+6']);
  pj.stats.POW.value = getTotal(['3d6']);
  pj.stats.DEX.value = getTotal(['2d4', '+3']);
  pj.stats.CHA.value = getTotal(['3d6']);
};

export const setRandomDuckStats = (pj: Character): void => {
  pj.stats.STR.value = getTotal(['2d6', '+1']);
  pj.stats.CON.value = getTotal(['2d6', '+6']);
  pj.stats.INT.value = getTotal(['2d6','+6']);
  pj.stats.SIZ.value = getTotal(['1d6','+2']);
  pj.stats.POW.value = getTotal(['3d6']);
  pj.stats.DEX.value = getTotal(['2d6', '+6']);
  pj.stats.CHA.value = getTotal(['2d6']);
};

export const setRandomNewLingStats = (pj: Character): void => {
  pj.stats.STR.value = getTotal(['3d6']);
  pj.stats.CON.value = getTotal(['3d6']);
  pj.stats.INT.value = getTotal(['2d6','+6']);
  pj.stats.SIZ.value = getTotal(['2d6']);
  pj.stats.POW.value = getTotal(['3d6']);
  pj.stats.DEX.value = getTotal(['2d6', '+6']);
  pj.stats.CHA.value = getTotal(['3d6']);
};

export const setRandomAgimoriStats = (pj: Character): void => {
  pj.stats.STR.value = getTotal(['3d6','+6']);
  pj.stats.CON.value = getTotal(['1D4', '+14']);
  pj.stats.INT.value = getTotal(['3d6']);
  pj.stats.SIZ.value = getTotal(['3d6','+6']);
  pj.stats.POW.value = getTotal(['3d6']);
  pj.stats.DEX.value = getTotal(['3d6']);
  pj.stats.CHA.value = getTotal(['3d6']);
};

export const setRandomTuskRiderStats = (pj: Character): void => {
  pj.stats.STR.value = getTotal(['2d6','+6']);
  pj.stats.CON.value = getTotal(['2d6','+6']);
  pj.stats.INT.value = getTotal(['2d6','+6']);
  pj.stats.SIZ.value = getTotal(['2d6','+6']);
  pj.stats.POW.value = getTotal(['3d6']);
  pj.stats.DEX.value = getTotal(['3d6']);
  pj.stats.CHA.value = getTotal(['1d6']);
};

export const setRandomBrooStats = (pj: Character): void => {
  pj.stats.STR.value = getTotal(['2d6','+6']);
  pj.stats.CON.value = getTotal(['1d6','+12']);
  pj.stats.INT.value = getTotal(['1d6','+12']);
  pj.stats.SIZ.value = getTotal(['2d6','+6']);
  pj.stats.POW.value = getTotal(['3d6']);
  pj.stats.DEX.value = getTotal(['3d6']);
  pj.stats.CHA.value = getTotal(['2d6']);
};

export const setRandomDragonStats = (pj: Character): void => {
  pj.stats.STR.value = getTotal(['20d6']);
  pj.stats.CON.value = getTotal(['10d6']);
  pj.stats.INT.value = getTotal(['10']);
  pj.stats.SIZ.value = getTotal(['20d6']);
  pj.stats.POW.value = getTotal(['4d6','+6']);
  pj.stats.DEX.value = getTotal(['3d6']);
  pj.stats.CHA.value = NUMBERS.N_0;
};

export const setInitialHumanCharacter = (pj: Character, translate: TranslateService): Character => {
  const agiSkills =  translate.instant('PJ.SKILL_NAME.AGILITY');
  pj.skills.AGILITY = [];
  pj.skills.AGILITY.push(new Skill(agiSkills.THROW, NUMBERS.N_25));
  pj.skills.AGILITY.push(new Skill(agiSkills.CLIMB, NUMBERS.N_40));
  pj.skills.AGILITY.push(new Skill(agiSkills.SWIM, NUMBERS.N_15));
  pj.skills.AGILITY.push(new Skill(agiSkills.DODGE, NUMBERS.N_5));
  pj.skills.AGILITY.push(new Skill(agiSkills.JUMP, NUMBERS.N_25));
  pj.skills.AGILITY.push(new Skill(agiSkills.RIDE, NUMBERS.N_10));
  pj.skills.AGILITY.push(new Skill(agiSkills.DANCE, NUMBERS.N_10));
  pj.skills.AGILITY.push(new Skill(agiSkills.ROW, NUMBERS.N_5));

  const conSkills =  translate.instant('PJ.SKILL_NAME.COMUNICATION');
  pj.skills.COMUNICATION = [];
  pj.skills.COMUNICATION.push(new Skill(conSkills.SPEAK_LANGUAGE, NUMBERS.N_30, translate.instant('PJ.SELF_LANGUAJE')));
  pj.skills.COMUNICATION.push(new Skill(conSkills.ACT, NUMBERS.N_0));
  pj.skills.COMUNICATION.push(new Skill(conSkills.SING, NUMBERS.N_5));
  pj.skills.COMUNICATION.push(new Skill(conSkills.FLUID_SPEAK, NUMBERS.N_5));
  pj.skills.COMUNICATION.push(new Skill(conSkills.ORATORY, NUMBERS.N_5));

  const knowSkills =  translate.instant('PJ.SKILL_NAME.KNOWLEDGE');
  pj.skills.KNOWLEDGE = [];
  pj.skills.KNOWLEDGE.push(new Skill(knowSkills.READ_WRITE, NUMBERS.N_0, translate.instant('PJ.SELF_LANGUAJE')));
  pj.skills.KNOWLEDGE.push(new Skill(knowSkills.APRAISE, NUMBERS.N_5));
  pj.skills.KNOWLEDGE.push(new Skill(knowSkills.CRAFT, NUMBERS.N_10));
  pj.skills.KNOWLEDGE.push(new Skill(knowSkills.FIRST_AID, NUMBERS.N_10));
  pj.skills.KNOWLEDGE.push(new Skill(knowSkills.MARTIAL_ARTS, NUMBERS.N_0));
  pj.skills.KNOWLEDGE.push(new Skill(knowSkills.NAVIGATION, NUMBERS.N_0));
  pj.skills.KNOWLEDGE.push(new Skill(knowSkills.TREAT_POISON, NUMBERS.N_5));
  pj.skills.KNOWLEDGE.push(new Skill(knowSkills.TREAT_DISEASE, NUMBERS.N_5));
  pj.skills.KNOWLEDGE.push(new Skill(knowSkills.ANIMAL_LORE, NUMBERS.N_5));
  pj.skills.KNOWLEDGE.push(new Skill(knowSkills.CULTURE, NUMBERS.N_5));
  pj.skills.KNOWLEDGE.push(new Skill(knowSkills.MINERAL_LORE, NUMBERS.N_5));
  pj.skills.KNOWLEDGE.push(new Skill(knowSkills.PLANT_LORE, NUMBERS.N_5));
  pj.skills.KNOWLEDGE.push(new Skill(knowSkills.WORLD_LORE, NUMBERS.N_5));

  const perSkills =  translate.instant('PJ.SKILL_NAME.AWARENESS');
  pj.skills.AWARENESS = [];
  pj.skills.AWARENESS.push(new Skill(perSkills.TOUCH, NUMBERS.N_10));
  pj.skills.AWARENESS.push(new Skill(perSkills.LISTEN, NUMBERS.N_25));
  pj.skills.AWARENESS.push(new Skill(perSkills.SCAN, NUMBERS.N_25));
  pj.skills.AWARENESS.push(new Skill(perSkills.FIND, NUMBERS.N_25));
  pj.skills.AWARENESS.push(new Skill(perSkills.TRACK, NUMBERS.N_5));
  pj.skills.AWARENESS.push(new Skill(perSkills.SMELL, NUMBERS.N_5));
  pj.skills.AWARENESS.push(new Skill(perSkills.TASTE, NUMBERS.N_5));

  const manSkills =  translate.instant('PJ.SKILL_NAME.MANIPULATION');
  pj.skills.MANIPULATION = [];
  pj.skills.MANIPULATION.push(new Skill(manSkills.CONCEAL, NUMBERS.N_5));
  pj.skills.MANIPULATION.push(new Skill(manSkills.INVENT, NUMBERS.N_5));
  pj.skills.MANIPULATION.push(new Skill(manSkills.DRIVE, NUMBERS.N_5));
  pj.skills.MANIPULATION.push(new Skill(manSkills.SLEIGHT_OF_HAND, NUMBERS.N_5));
  pj.skills.MANIPULATION.push(new Skill(manSkills.PLAY_INSTRUMENT, NUMBERS.N_0));

  const steSkills =  translate.instant('PJ.SKILL_NAME.STEALTH');
  pj.skills.STEALTH = [];
  pj.skills.STEALTH.push(new Skill(steSkills.HIDE, NUMBERS.N_10));
  pj.skills.STEALTH.push(new Skill(steSkills.MOVE_SILENTLY, NUMBERS.N_10));

  const magSkills =  translate.instant('PJ.SKILL_NAME.MAGICAL');
  pj.skills.MAGICAL = [];
  pj.skills.MAGICAL.push(new Skill(magSkills.CEREMONY, NUMBERS.N_5));
  pj.skills.MAGICAL.push(new Skill(magSkills.ENCHANTMENT, NUMBERS.N_0));
  pj.skills.MAGICAL.push(new Skill(magSkills.INVOKE, NUMBERS.N_0));
  pj.skills.MAGICAL.push(new Skill(magSkills.DURATION, NUMBERS.N_0));
  pj.skills.MAGICAL.push(new Skill(magSkills.INTENSITY, NUMBERS.N_0));
  pj.skills.MAGICAL.push(new Skill(magSkills.RANGE, NUMBERS.N_0));
  pj.skills.MAGICAL.push(new Skill(magSkills.MULTISPELL, NUMBERS.N_0));

  pj.skills.ATTACK = [];
  pj.skills.DEFENSE = [];
  pj.weapons = [];

  addWeapon(pj, WeaponTypeEnum.FIST, WeaponNameEnum.FIST, translate);
  addWeapon(pj, WeaponTypeEnum.KICK, WeaponNameEnum.KICK, translate);
  addWeapon(pj, WeaponTypeEnum.BRAWL, WeaponNameEnum.BRAWL, translate);

  addHumanoidLocs(pj, translate);

  return pj;
};


export const transformToMorocath = (pj: Character, translate: TranslateService): Character => {
  pj.race = translate.instant('PJ.RACES_TYPE.MOROCATH');
  pj.raceID = RaceTypeEnum.MOROCATH;

  const agiSkills =  translate.instant('PJ.SKILL_NAME.AGILITY');
  pj.skills.AGILITY = [];
  pj.skills.AGILITY.push(new Skill(agiSkills.THROW, NUMBERS.N_0));
  pj.skills.AGILITY.push(new Skill(agiSkills.CLIMB, NUMBERS.N_5));
  pj.skills.AGILITY.push(new Skill(agiSkills.SWIM, NUMBERS.N_35));
  pj.skills.AGILITY.push(new Skill(agiSkills.DODGE, NUMBERS.N_20));
  pj.skills.AGILITY.push(new Skill(agiSkills.JUMP, NUMBERS.N_30));
  pj.skills.AGILITY.push(new Skill(agiSkills.RIDE, NUMBERS.N_0));
  pj.skills.AGILITY.push(new Skill(agiSkills.DANCE, NUMBERS.N_10));
  pj.skills.AGILITY.push(new Skill(agiSkills.ROW, NUMBERS.N_0));

  const knowSkills =  translate.instant('PJ.SKILL_NAME.KNOWLEDGE');
  editSkill( new Skill(knowSkills.MARTIAL_ARTS, NUMBERS.N_10) ,pj.skills.KNOWLEDGE );

  const manSkills =  translate.instant('PJ.SKILL_NAME.MANIPULATION');
  pj.skills.MANIPULATION = [];
  pj.skills.MANIPULATION.push(new Skill(manSkills.CONCEAL, NUMBERS.N_0));
  pj.skills.MANIPULATION.push(new Skill(manSkills.INVENT, NUMBERS.N_0));
  pj.skills.MANIPULATION.push(new Skill(manSkills.DRIVE, NUMBERS.N_0));
  pj.skills.MANIPULATION.push(new Skill(manSkills.SLEIGHT_OF_HAND, NUMBERS.N_0));
  pj.skills.MANIPULATION.push(new Skill(manSkills.PLAY_INSTRUMENT, NUMBERS.N_0));

  const perSkills =  translate.instant('PJ.SKILL_NAME.AWARENESS');
  editSkill( new Skill(perSkills.TRACK, NUMBERS.N_25) ,pj.skills.AWARENESS );

  const steSkills =  translate.instant('PJ.SKILL_NAME.STEALTH');
  editSkill( new Skill(steSkills.HIDE, NUMBERS.N_20) ,pj.skills.STEALTH );
  editSkill( new Skill(steSkills.MOVE_SILENTLY, NUMBERS.N_20) ,pj.skills.STEALTH );

  pj.skills.ATTACK = [];
  pj.skills.DEFENSE = [];
  pj.weapons = [];

  addWeapon(pj, WeaponTypeEnum.CLAW, WeaponNameEnum.CLAW, translate, NUMBERS.N_25, NUMBERS.N_0);
  addWeapon(pj, WeaponTypeEnum.KICK, WeaponNameEnum.KICK, translate);

  pj.movement = NUMBERS.N_4;

  addNaturalArmor(pj, NUMBERS.N_4);
  return pj;
};

export const transformToDuck = (pj: Character, translate: TranslateService): Character => {
  pj.race = translate.instant('PJ.RACES_TYPE.DUCK');
  pj.raceID = RaceTypeEnum.DUCK;

  const agiSkills =  translate.instant('PJ.SKILL_NAME.AGILITY');
  pj.skills.AGILITY = [];
  editSkill( new Skill(agiSkills.SWIM, NUMBERS.N_80) ,pj.skills.AGILITY );
  editSkill( new Skill(agiSkills.DODGE, NUMBERS.N_30) ,pj.skills.AGILITY );
  editSkill( new Skill(agiSkills.ROW, NUMBERS.N_25) ,pj.skills.AGILITY );
  editSkill( new Skill(agiSkills.CLIMB, NUMBERS.N_15) ,pj.skills.AGILITY );
  editSkill( new Skill(agiSkills.JUMP, NUMBERS.N_15) ,pj.skills.AGILITY );
  editSkill( new Skill(agiSkills.RIDE, NUMBERS.N_0) ,pj.skills.AGILITY );

  const conSkills =  translate.instant('PJ.SKILL_NAME.COMUNICATION');
  editSkill( new Skill(conSkills.SING, NUMBERS.N_0) ,pj.skills.COMUNICATION );
  editSkill( new Skill(conSkills.FLUID_SPEAK, NUMBERS.N_25) ,pj.skills.COMUNICATION );

  pj.movement = NUMBERS.N_2;

  return pj;
};

export const transformToNewLing = (pj: Character, translate: TranslateService): Character => {
  pj.race = translate.instant('PJ.RACES_TYPE.NEWLING');
  pj.raceID = RaceTypeEnum.NEWLING;
  pj.movement = NUMBERS.N_2;

  pj.age = NUMBERS.N_3;

  const agiSkills =  translate.instant('PJ.SKILL_NAME.AGILITY');
  editSkill( new Skill(agiSkills.SWIM, NUMBERS.N_80) ,pj.skills.AGILITY );
  editSkill( new Skill(agiSkills.DODGE, NUMBERS.N_30) ,pj.skills.AGILITY );
  editSkill( new Skill(agiSkills.ROW, NUMBERS.N_20) ,pj.skills.AGILITY );

  const conSkills =  translate.instant('PJ.SKILL_NAME.COMUNICATION');
  editSkill( new Skill(conSkills.SPEAK_LANGUAGE, NUMBERS.N_15, translate.instant('PJ.SKILL_NAME.AGILITY.SPEAK_LOCAL_HUMAN')) ,pj.skills.COMUNICATION );

  const knowSkills =  translate.instant('PJ.SKILL_NAME.KNOWLEDGE');
  editSkill( new Skill(knowSkills.NAVIGATION, NUMBERS.N_5) ,pj.skills.KNOWLEDGE );

  const perSkills =  translate.instant('PJ.SKILL_NAME.AWARENESS');
  editSkill( new Skill(perSkills.SCAN, NUMBERS.N_30) ,pj.skills.AWARENESS );
  editSkill( new Skill(perSkills.TRACK, NUMBERS.N_30) ,pj.skills.AWARENESS );
  
  const steSkills =  translate.instant('PJ.SKILL_NAME.STEALTH');
  editSkill( new Skill(steSkills.HIDE, NUMBERS.N_50) ,pj.skills.STEALTH );

  pj.locations = [new Location(translate.instant('PJ.LOCATION.TAIL'), hitpointsRatioEnum.X25), ...pj.locations];
 
  return pj;
};

export const transformAgimori = (pj: Character, translate: TranslateService): Character => {
  pj.race = translate.instant('PJ.RACES_TYPE.AGIMORI');
  pj.raceID = RaceTypeEnum.AGIMORI;
  pj.movement = NUMBERS.N_4;
  addNaturalArmor(pj, NUMBERS.N_2);

  return pj;
};

export const transformTuskRider = (pj: Character, translate: TranslateService): Character => {
  pj.race = translate.instant('PJ.RACES_TYPE.TUSK_RIDER');
  pj.raceID = RaceTypeEnum.TUSK_RIDER;

  const perSkills =  translate.instant('PJ.SKILL_NAME.AWARENESS');
  editSkill( new Skill(perSkills.FIND, NUMBERS.N_15) ,pj.skills.AWARENESS );
  editSkill( new Skill(perSkills.SCAN, NUMBERS.N_40) ,pj.skills.AWARENESS );
  editSkill( new Skill(perSkills.TRACK, NUMBERS.N_40) ,pj.skills.AWARENESS );

  editSkill( new Skill(perSkills.LISTEN, NUMBERS.N_15) ,pj.skills.AWARENESS );

  const agiSkills =  translate.instant('PJ.SKILL_NAME.AGILITY');
  editSkill( new Skill(agiSkills.RIDE, NUMBERS.N_75) ,pj.skills.AGILITY );

  const manSkills =  translate.instant('PJ.SKILL_NAME.MANIPULATION');
  pj.skills.MANIPULATION.push(new Skill(manSkills.CONCEAL, NUMBERS.N_40));

  const conSkills =  translate.instant('PJ.SKILL_NAME.COMUNICATION');
  editSkill( new Skill(conSkills.SPEAK_LANGUAGE, NUMBERS.N_15, translate.instant('PJ.SKILL_NAME.AGILITY.SPEAK_LOCAL_HUMAN')) ,pj.skills.COMUNICATION );
  
  return pj;

};


export const transformToBroo = (pj: Character, translate: TranslateService): Character => {
  pj.race = translate.instant('PJ.RACES_TYPE.BROO');
  pj.raceID = RaceTypeEnum.BROO;
  pj.age = NUMBERS.N_15;
  pj.movement = NUMBERS.N_4;
  addNaturalArmor(pj, NUMBERS.N_3);

  const agiSkills =  translate.instant('PJ.SKILL_NAME.AGILITY');
  editSkill( new Skill(agiSkills.JUMP , NUMBERS.N_30) ,pj.skills.AGILITY );
  editSkill( new Skill(agiSkills.ROW, NUMBERS.N_30) ,pj.skills.AGILITY );
  editSkill( new Skill(agiSkills.SWIM, NUMBERS.N_5) ,pj.skills.AGILITY );

  const manSkills =  translate.instant('PJ.SKILL_NAME.MANIPULATION');
  editSkill(new Skill(manSkills.CONCEAL, NUMBERS.N_25), pj.skills.MANIPULATION);

  const perSkills =  translate.instant('PJ.SKILL_NAME.AWARENESS');
  editSkill( new Skill(perSkills.TRACK, NUMBERS.N_25) ,pj.skills.AWARENESS );
 
  return pj;
};

export const transformToDragon = (pj: Character, translate: TranslateService): Character => {
  pj.race = translate.instant('PJ.RACES_TYPE.DRAGON');
  pj.raceID = RaceTypeEnum.DRAGON;
  pj.age = NUMBERS.N_50;

  const agiSkills =  translate.instant('PJ.SKILL_NAME.AGILITY');
  editSkill( new Skill(agiSkills.RIDE, NUMBERS.N_75) ,pj.skills.AGILITY );


  const perSkills =  translate.instant('PJ.SKILL_NAME.AWARENESS');
  editSkill( new Skill(perSkills.LISTEN, NUMBERS.N_50) ,pj.skills.AWARENESS );
  editSkill( new Skill(perSkills.FIND, NUMBERS.N_50) ,pj.skills.AWARENESS );

  const locations =  translate.instant('PJ.LOCATION');
  pj.locations = [
    new Location(locations.TAIL, hitpointsRatioEnum.X25),
    new Location(locations.RIGHT_BACK_LEG, hitpointsRatioEnum.X33),
    new Location(locations.LEFT_BACK_LEG, hitpointsRatioEnum.X33),
    new Location(locations.BACK_QUARTER, hitpointsRatioEnum.X40),
    new Location(locations.FRONT_QUARTER, hitpointsRatioEnum.X40),
    new Location(locations.RIGHT_WING, hitpointsRatioEnum.X25),
    new Location(locations.LEFT_WING, hitpointsRatioEnum.X25),
    new Location(locations.RIGHT_FRONT_LEG, hitpointsRatioEnum.X33),
    new Location(locations.LEFT_FRONT_LEG, hitpointsRatioEnum.X33),
    new Location(locations.HEAD, hitpointsRatioEnum.X33)
  ];
  addNaturalArmor(pj, NUMBERS.N_24);

  pj.skills.ATTACK = [];
  pj.skills.DEFENSE = [];
  pj.weapons = [];
 
  const literals = translate.instant('PJ.WEAPON_NAME');
  const firebreath = new Weapon(literals.FIREBREATHING, new DiceRoll(4,6), DamageTypeEnum.FIRE, 0, true, 0, 0 , '', false, 0, 0, false, WeaponTypeEnum.FIREBREATHING, 0, 0, new DiceRoll(4,6), 60, 5);
  firebreath.visible = false;
  firebreath.natural = true;
  addWeapon(pj, WeaponTypeEnum.FIREBREATHING, WeaponNameEnum.FIREBREATHING, translate, firebreath.attackBS, firebreath.parryBS, firebreath);
  const bite = new Weapon(literals.DRAGON_BITE, new DiceRoll(3,6), DamageTypeEnum.PIERCING, 0, false, 0, 0 , '', false, 0, 0, false, WeaponTypeEnum.FIREBREATHING, 0, 0, new DiceRoll(3,6), 25, 25);
  bite.visible = false;
  bite.natural = true;
  addWeapon(pj, WeaponTypeEnum.BITE, WeaponNameEnum.BITE, translate, bite.attackBS, bite.parryBS, bite);
  const claw = new Weapon(literals.DRAGON_CLAW, new DiceRoll(1,6), DamageTypeEnum.PIERCING, 0, false, 0, 0 , '', false, 0, 0, false, WeaponTypeEnum.FIREBREATHING, 0, 0, new DiceRoll(1,6), 25, 25);
  claw.visible = false;
  claw.natural = true;
  addWeapon(pj, WeaponTypeEnum.CLAW, WeaponNameEnum.CLAW, translate, claw.attackBS, claw.parryBS, claw);
  const tail = new Weapon(literals.DRAGON_TAIL, new DiceRoll(1,6), DamageTypeEnum.BLUNT, 0, false, 0, 0 , '', false, 0, 0, false, WeaponTypeEnum.FIREBREATHING, 0, 0, new DiceRoll(1,6), 25, 25);
  tail.visible = false;
  tail.natural = true;
  addWeapon(pj, WeaponTypeEnum.TAIL, WeaponNameEnum.TAIL, translate, tail.attackBS, tail.parryBS, tail);

  return pj;
};

const addHumanoidLocs = (pj: Character, translate: TranslateService) => {
  const locations =  translate.instant('PJ.LOCATION');
  pj.locations = [];
  const rightLeg = new Location(locations.RIGHT_LEG, hitpointsRatioEnum.X33);
  rightLeg.armorWeightRario = armorWeightRatioEnum.x2;
  pj.locations.push(rightLeg);
  const leftLeg = new Location(locations.LEFT_LEG, hitpointsRatioEnum.X33);
  leftLeg.armorWeightRario = armorWeightRatioEnum.x2;
  pj.locations.push(leftLeg);
  pj.locations.push(new Location(locations.ABDOMEN, hitpointsRatioEnum.X33));
  const chest = new Location(locations.CHEST, hitpointsRatioEnum.X40);
  pj.locations.push(chest);
  pj.locations.push(new Location(locations.RIGHT_ARM, hitpointsRatioEnum.X25));
  pj.locations.push(new Location(locations.LEFT_ARM, hitpointsRatioEnum.X25));
  pj.locations.push(new Location(locations.HEAD, hitpointsRatioEnum.X33));
};