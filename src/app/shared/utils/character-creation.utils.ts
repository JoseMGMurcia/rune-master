import { TranslateService } from '@ngx-translate/core';
import { Character, CombatSkill, Location, Skill, WeaponType, Armor, Weapon } from '../models/character.model';
import { NUMBERS } from '../constants/number.constants';
import { WeaponNameType, createWeapon } from './equip.factory';
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

  pj.weapons = pj.weapons.map((weapon: Weapon) => {
    weapon.tempAP = NUMBERS.N_0;
    return weapon;
  });
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

export const addNaturalArmor = (pj: Character, armor: number): void  =>{
  pj.locations = pj.locations.map((loc: Location) => {
    const location = new Location(loc.name, loc.hitpointsRatio, armor);
    location.armorWeightRario = loc.armorWeightRario; 
    return location;
  });
};


export const editSkill = (skill: Skill, skills: Skill[]): void => {
  const index = skills.findIndex(s => s.name === skill.name);
  if(index >= NUMBERS.N_0){
    skills[index] = skill;
  } else {
    skills.push(skill);
  }
};