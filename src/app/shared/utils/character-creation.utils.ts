import { TranslateService } from "@ngx-translate/core";
import { Character, CombatSkill, Location, Skill, hitpointsRatioEnum, WeaponTypeEnum, Weapon, WeaponType } from "../models/character.model";
import { NUMBERS } from "../constants/number.constants";
import { WeaponNameEnum, WeaponNameType, createWeapon } from "./equip.factory";
import { getTotal } from "./dices.utils";

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
}
export const setRandomHumanStats = (pj: Character): void => {
  pj.stats.STR.value = getTotal(['3d6']);
  pj.stats.DEX.value = getTotal(['3d6']);
  pj.stats.CON.value = getTotal(['3d6']);
  pj.stats.INT.value = getTotal(['2d6','+6']);
  pj.stats.SIZ.value = getTotal(['2d6','+6']);
  pj.stats.POW.value = getTotal(['3d6']);
  pj.stats.CHA.value = getTotal(['3d6']);
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
}

const addHumanoidLocs = (pj: Character, translate: TranslateService) => {
  const locations =  translate.instant('PJ.LOCATION');
  pj.locations = [];
  pj.locations.push(new Location(locations.RIGHT_LEG, hitpointsRatioEnum.X33));
  pj.locations.push(new Location(locations.LEFT_LEG, hitpointsRatioEnum.X33));
  pj.locations.push(new Location(locations.ABDOMEN, hitpointsRatioEnum.X33));
  pj.locations.push(new Location(locations.CHEST, hitpointsRatioEnum.X40));
  pj.locations.push(new Location(locations.RIGHT_ARM, hitpointsRatioEnum.X25));
  pj.locations.push(new Location(locations.LEFT_ARM, hitpointsRatioEnum.X25));
  pj.locations.push(new Location(locations.HEAD, hitpointsRatioEnum.X33));
};

export const getUniqueID = (name: string) => {
  return name + '_' + new Date().getTime();
};

export const addWeapon = (
  pj: Character,
  type: WeaponType,
  name: WeaponNameType,
  translate: TranslateService): void => {
    const weapon = createWeapon(type, name, translate);
    pj.weapons.push(weapon);
    if(!pj.skills.ATTACK.some(s => s.weaponType === weapon.weaponType)) {
      const types = translate.instant('PJ.WEAPON_TYPES');
      pj.skills.ATTACK.push(new CombatSkill(types['type'], weapon.attackBS , weapon.weaponType));
    }
    if(!pj.skills.DEFENSE.some(s => s.weaponType === weapon.weaponType)) {
      const types = translate.instant('PJ.WEAPON_TYPES');
      pj.skills.DEFENSE.push(new CombatSkill(types['type'], weapon.parryBS , weapon.weaponType));
    }
  };
