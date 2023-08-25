import { TranslateService } from '@ngx-translate/core';
import { Character, CombatSkill, Location, Skill, WeaponType, Armor, Weapon, Results } from '../models/character.model';
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
    weapon.showDetail = false;
    weapon.useSustitutiveDMG = false;
    weapon.increasedIntensity = 0;
    weapon.dullBladeIntensity = 0;
    weapon.sustitutiveDamage = {...weapon.damage, roll: weapon.damage.roll};
    weapon.sustitutiveSpecialDamage = {...weapon.specialDamage, roll: weapon.specialDamage.roll};
    return weapon;
  });
  pj.swShowResults = false;
  pj.results = new Results();
};

export const getUniqueID = (name: string) => {
  return name + '_' + new Date().getTime();
};

export const cloneCharacter = (pj: Character): Character => {
  const clone = JSON.parse(JSON.stringify(pj));
  clone.id = getUniqueID(clone.name);
  clone.name = clone.id;
  return clone;
}

export const addWeapon = ( pj: Character, type: WeaponType, name: WeaponNameType, translate: TranslateService, attack = NUMBERS.N_5, defence = NUMBERS.N_5, weapon: Weapon | undefined = undefined): void => {
  const weap = weapon ? weapon : createWeapon(type, name, translate);
  weap.inCombat = true;
  if(!pj.weapons.some(w => w.name === weap.name && w.weaponType === weap.weaponType)){
    pj.weapons.push(weap);
  }
  if(!pj.skills.ATTACK.some(s => s.weaponType === weap.weaponType)) {
    const types = translate.instant('PJ.WEAPON_TYPES');
    pj.skills.ATTACK.push(new CombatSkill(types['type'], weap.attackBS > attack ? weap.attackBS : attack, weap.weaponType));
  }
  if(!pj.skills.DEFENSE.some(s => s.weaponType === weap.weaponType)) {
    const types = translate.instant('PJ.WEAPON_TYPES');
    pj.skills.DEFENSE.push(new CombatSkill(types['type'], weap.parryBS > defence ? weap.parryBS : defence, weap.weaponType));
  }
};

export const removeWeapon = ( pj: Character, weapon: Weapon): void => {
  pj.weapons = pj.weapons.filter(w => w.name !== weapon.name);
    const isSkillStillused = pj.weapons.some(w => w.weaponType === weapon.weaponType);
    if(!isSkillStillused) {
      pj.skills.ATTACK = pj.skills.ATTACK.filter(s => s.weaponType !== weapon.weaponType);
      pj.skills.DEFENSE = pj.skills.DEFENSE.filter(s => s.weaponType !== weapon.weaponType);
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
