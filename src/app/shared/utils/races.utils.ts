import { TranslateService } from '@ngx-translate/core';
import { NUMBERS } from '../constants/number.constants';
import { Character, Location, Skill, WeaponTypeEnum, armorWeightRatioEnum, hitpointsRatioEnum } from '../models/character.model';
import { addNaturalArmor, addWeapon, editSkill } from './character-creation.utils';
import { WeaponNameEnum } from './equip.factory';
import { getTotal } from './dices.utils';
import { RaceTypeEnum } from '../models/races.model';

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