import { TranslateService } from '@ngx-translate/core';
import { Character, CombatSkill, Location, Skill, hitpointsRatioEnum, WeaponTypeEnum, WeaponType, Armor, armorWeightRatioEnum } from '../models/character.model';
import { NUMBERS } from '../constants/number.constants';
import { WeaponNameEnum, WeaponNameType, createWeapon } from './equip.factory';
import { getTotal } from './dices.utils';
import { ArmorType } from '../constants/equip/armor.const';

export const resetTemporals = (pj: Character): void => {
  pj.tempHPMod = NUMBERS.N_0;
  pj.tempFPMod = NUMBERS.N_0;
  pj.tempMPMod = NUMBERS.N_0;
  pj.tempAPMod = NUMBERS.N_0;
  pj.locations = pj.locations.map((loc: Location) => {
    loc.bonusHP = NUMBERS.N_0;
    loc.bonusAP = NUMBERS.N_0;
    return loc;
  });
  pj.stats.STR.tempMod = NUMBERS.N_0;
  pj.stats.DEX.tempMod = NUMBERS.N_0;
  pj.stats.CON.tempMod = NUMBERS.N_0;
  pj.stats.INT.tempMod = NUMBERS.N_0;
  pj.stats.SIZ.tempMod = NUMBERS.N_0;
  pj.stats.POW.tempMod = NUMBERS.N_0;
  pj.stats.CHA.tempMod = NUMBERS.N_0;
};

export const setRandomHumanStats = (pj: Character): void => {
  pj.stats.STR.value = getTotal(['3d6']);
  pj.stats.DEX.value = getTotal(['3d6']);
  pj.stats.CON.value = getTotal(['3d6']);
  pj.stats.INT.value = getTotal(['2d6','+6']);
  pj.stats.SIZ.value = getTotal(['2d6','+6']);
  pj.stats.POW.value = getTotal(['3d6']);
  pj.stats.CHA.value = getTotal(['3d6']);
};

export const setRandomMorocathStats = (pj: Character): void => {
  pj.stats.STR.value = getTotal(['3d6', '+6']);
  pj.stats.DEX.value = getTotal(['2d4', '+3']);
  pj.stats.CON.value = getTotal(['3d6', '+6']);
  pj.stats.INT.value = getTotal(['2d6','+6']);
  pj.stats.SIZ.value = getTotal(['2d6','+6']);
  pj.stats.POW.value = getTotal(['3d6']);
  pj.stats.CHA.value = getTotal(['3d6']);

  pj.locations = pj.locations.map((loc: Location) => {
    const location = new Location(loc.name, loc.hitpointsRatio, NUMBERS.N_4);
    location.armorWeightRario = loc.armorWeightRario;
    
    return location;
  });
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
  chest.armorWeightRario = armorWeightRatioEnum.x2;
  pj.locations.push(chest);
  pj.locations.push(new Location(locations.RIGHT_ARM, hitpointsRatioEnum.X25));
  pj.locations.push(new Location(locations.LEFT_ARM, hitpointsRatioEnum.X25));
  pj.locations.push(new Location(locations.HEAD, hitpointsRatioEnum.X33));
};

export const getUniqueID = (name: string) => {
  return name + '_' + new Date().getTime();
};

export const addWeapon = ( pj: Character, type: WeaponType, name: WeaponNameType, translate: TranslateService, attack = NUMBERS.N_5, defence = NUMBERS.N_5): void => {
  const weapon = createWeapon(type, name, translate);
  weapon.inCombat = true;
  if(!pj.weapons.some(w => w.name === weapon.name && w.weaponType === weapon.weaponType)){
    pj.weapons.push(weapon);
  }
  if(!pj.skills.ATTACK.some(s => s.weaponType === weapon.weaponType)) {
    const types = translate.instant('PJ.WEAPON_TYPES');
    pj.skills.ATTACK.push(new CombatSkill(types['type'], weapon.attackBS > attack ? weapon.attackBS : attack, weapon.weaponType));
  }
  if(!pj.skills.DEFENSE.some(s => s.weaponType === weapon.weaponType)) {
    const types = translate.instant('PJ.WEAPON_TYPES');
    pj.skills.DEFENSE.push(new CombatSkill(types['type'], weapon.parryBS > defence ? weapon.parryBS : defence, weapon.weaponType));
  }
};

export const addArmor = ( pj: Character, type: ArmorType, locations: string[], translate: TranslateService): void => {
  const armorName = translate.instant('PJ.ARMOR_TYPES.' + type.name);
  const armor = new Armor(armorName, type.armor, locations);

  const sizeTypeIndex = Math.floor((pj.stats.SIZ.value - NUMBERS.N_5) / NUMBERS.N_5);
  console.log('sizeTypeIndex', sizeTypeIndex);
  let weight = NUMBERS.N_0;
  const basicWeight = type.weights[sizeTypeIndex] / NUMBERS.N_10;
  locations.forEach(locName => {
    const loc = pj.locations.find(loc => loc.name === locName);
    if(loc){
      weight += loc.armorWeightRario*basicWeight;
    }
  });
  armor.weight = weight;
  armor.inCombat = true;
  pj.armor.push(armor);
};
