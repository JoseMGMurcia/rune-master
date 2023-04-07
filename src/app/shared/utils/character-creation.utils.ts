import { TranslateService } from "@ngx-translate/core";
import { Character, Location, Skill, hitpointsRatioEnum, weaponTypeEnum } from "../models/character.model";
import { NUMBERS } from "../constants/number.constants";
import { WeaponNameEnum, createWeapon } from "./weapon.factory";

export const setInitialHumanCharacter = (pj: Character, translate: TranslateService): Character => {
  const agiSkills =  translate.instant('PJ.SKILL_NAME.AGILITY');
  pj.skills.AGILITY.push(new Skill(agiSkills.THROW, NUMBERS.N_25));
  pj.skills.AGILITY.push(new Skill(agiSkills.CLIMB, NUMBERS.N_40));
  pj.skills.AGILITY.push(new Skill(agiSkills.SWIM, NUMBERS.N_15));
  pj.skills.AGILITY.push(new Skill(agiSkills.DODGE, NUMBERS.N_5));
  pj.skills.AGILITY.push(new Skill(agiSkills.JUMP, NUMBERS.N_25));
  pj.skills.AGILITY.push(new Skill(agiSkills.RIDE, NUMBERS.N_10));
  pj.skills.AGILITY.push(new Skill(agiSkills.DANCE, NUMBERS.N_10));
  pj.skills.AGILITY.push(new Skill(agiSkills.ROW, NUMBERS.N_5));

  const conSkills =  translate.instant('PJ.SKILL_NAME.COMUNICATION');
  pj.skills.COMUNICATION.push(new Skill(conSkills.SPEAK_LANGUAGE, NUMBERS.N_30, translate.instant('PJ.SELF_LANGUAJE')));
  pj.skills.COMUNICATION.push(new Skill(conSkills.ACT, NUMBERS.N_0));
  pj.skills.COMUNICATION.push(new Skill(conSkills.SING, NUMBERS.N_5));
  pj.skills.COMUNICATION.push(new Skill(conSkills.FLUID_SPEAK, NUMBERS.N_5));
  pj.skills.COMUNICATION.push(new Skill(conSkills.ORATORY, NUMBERS.N_5));

  const knowSkills =  translate.instant('PJ.SKILL_NAME.KNOWLEDGE');
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
  pj.skills.AWARENESS.push(new Skill(perSkills.TOUCH, NUMBERS.N_10));
  pj.skills.AWARENESS.push(new Skill(perSkills.LISTEN, NUMBERS.N_25));
  pj.skills.AWARENESS.push(new Skill(perSkills.SCAN, NUMBERS.N_25));
  pj.skills.AWARENESS.push(new Skill(perSkills.FIND, NUMBERS.N_25));
  pj.skills.AWARENESS.push(new Skill(perSkills.TRACK, NUMBERS.N_5));
  pj.skills.AWARENESS.push(new Skill(perSkills.SMELL, NUMBERS.N_5));
  pj.skills.AWARENESS.push(new Skill(perSkills.TASTE, NUMBERS.N_5));

  const manSkills =  translate.instant('PJ.SKILL_NAME.MANIPULATION');
  pj.skills.MANIPULATION.push(new Skill(manSkills.CONCEAL, NUMBERS.N_5));
  pj.skills.MANIPULATION.push(new Skill(manSkills.INVENT, NUMBERS.N_5));
  pj.skills.MANIPULATION.push(new Skill(manSkills.DRIVE, NUMBERS.N_5));
  pj.skills.MANIPULATION.push(new Skill(manSkills.SLEIGHT_OF_HAND, NUMBERS.N_5));
  pj.skills.MANIPULATION.push(new Skill(manSkills.PLAY_INSTRUMENT, NUMBERS.N_0));

  const steSkills =  translate.instant('PJ.SKILL_NAME.STEALTH');
  pj.skills.STEALTH.push(new Skill(steSkills.HIDE, NUMBERS.N_10));
  pj.skills.STEALTH.push(new Skill(steSkills.MOVE_SILENTLY, NUMBERS.N_10));

  const magSkills =  translate.instant('PJ.SKILL_NAME.MAGICAL');
  pj.skills.MAGICAL.push(new Skill(magSkills.CEREMONY, NUMBERS.N_5));
  pj.skills.MAGICAL.push(new Skill(magSkills.ENCHANTMENT, NUMBERS.N_0));
  pj.skills.MAGICAL.push(new Skill(magSkills.INVOKE, NUMBERS.N_0));
  pj.skills.MAGICAL.push(new Skill(magSkills.DURATION, NUMBERS.N_0));
  pj.skills.MAGICAL.push(new Skill(magSkills.INTENSITY, NUMBERS.N_0));
  pj.skills.MAGICAL.push(new Skill(magSkills.RANGE, NUMBERS.N_0));
  pj.skills.MAGICAL.push(new Skill(magSkills.MULTISPELL, NUMBERS.N_0));

  const weapSkills =  translate.instant('PJ.SKILL_NAME.WEAPONS');
  pj.skills.ATTACK.push(new Skill(weapSkills.NATURALS.FIST, NUMBERS.N_25));
  pj.skills.ATTACK.push(new Skill(weapSkills.NATURALS.KICK, NUMBERS.N_15));
  pj.skills.ATTACK.push(new Skill(weapSkills.MELEE.DAGGER, NUMBERS.N_15));

  pj.skills.DEFENSE.push(new Skill(weapSkills.NATURALS.FIST, NUMBERS.N_25));
  pj.skills.DEFENSE.push(new Skill(weapSkills.NATURALS.KICK, NUMBERS.N_15));
  pj.skills.DEFENSE.push(new Skill(weapSkills.MELEE.DAGGER, NUMBERS.N_15));

  addHumanoidLocs(pj, translate);

  const fist = createWeapon(weaponTypeEnum.FIST, WeaponNameEnum.FIST, translate);
  const kick = createWeapon(weaponTypeEnum.KICK, WeaponNameEnum.KICK, translate);

  pj.weapons.push(fist);
  pj.weapons.push(kick);

  return pj;
}

const addHumanoidLocs = (pj: Character, translate: TranslateService) => {
  const locations =  translate.instant('PJ.LOCATION');
  pj.locations.push(new Location(locations.RIGHT_LEG, hitpointsRatioEnum.X33));
  pj.locations.push(new Location(locations.LEFT_LEG, hitpointsRatioEnum.X33));
  pj.locations.push(new Location(locations.ABDOMEN, hitpointsRatioEnum.X33));
  pj.locations.push(new Location(locations.CHEST, hitpointsRatioEnum.X40));
  pj.locations.push(new Location(locations.RIGHT_ARM, hitpointsRatioEnum.X25));
  pj.locations.push(new Location(locations.LEFT_ARM, hitpointsRatioEnum.X25));
  pj.locations.push(new Location(locations.HEAD, hitpointsRatioEnum.X33));
};

