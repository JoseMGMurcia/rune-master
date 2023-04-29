import { TranslateService } from "@ngx-translate/core";
import { DamageTypeEnum, Weapon, WeaponType, WeaponTypeEnum } from "../models/character.model";
import { DiceRoll } from "../models/dices.model";

export type WeaponNameType =
  WeaponNameEnum.FIST |
  WeaponNameEnum.KICK |
  WeaponNameEnum.CLAW |
  WeaponNameEnum.BRAWL |
  WeaponNameEnum.HORN |
  WeaponNameEnum.COMBAT_AXE |
  WeaponNameEnum.HAND_AXE |
  WeaponNameEnum.DAGGER |
  WeaponNameEnum.CHAIN_AND_BALL |
  WeaponNameEnum.TRIPPLE_CHAIN |
  WeaponNameEnum.MILITARY |
  WeaponNameEnum.WARHAMMER |
  WeaponNameEnum.GREAT_HAMMER |
  WeaponNameEnum.HEAVY_MACE |
  WeaponNameEnum.LIGHT_MACE |
  WeaponNameEnum.WOOD_CLUB |
  WeaponNameEnum.CROOK |
  WeaponNameEnum.WAR_CLUB |
  WeaponNameEnum.RAPIER |
  WeaponNameEnum.GLADIUS |
  WeaponNameEnum.BUCKER |
  WeaponNameEnum.DIANE |
  WeaponNameEnum.HERALD |
  WeaponNameEnum.LARGE_RECTANGULAR |
  WeaponNameEnum.JABELIN |
  WeaponNameEnum.CABALRY_SPEAR |
  WeaponNameEnum.SHORT_SPEAR |
  WeaponNameEnum.LONG_SPEAR |
  WeaponNameEnum.BASTARD_SWORD |
  WeaponNameEnum.BROAD_SWORD |
  WeaponNameEnum.SCIMITAR |
  WeaponNameEnum.DOUBLE_FISTED_SWORD |
  WeaponNameEnum.SHORT_BOW |
  WeaponNameEnum.COMPOSITE_BOW |
  WeaponNameEnum.HEAVY_CROSSBOW |
  WeaponNameEnum.LIGHT_CROSSBOW |
  WeaponNameEnum.SLING |
  WeaponNameEnum.THROWING_AXE |
  WeaponNameEnum.THROWING_KNIFE |
  WeaponNameEnum.THROWING_STONE |
  WeaponNameEnum.HALDBERD |
  WeaponNameEnum.DANISH_AXE |
  WeaponNameEnum.KNIFE |
  WeaponNameEnum.MAIN_GAUCHE |
  WeaponNameEnum.SAI |
  WeaponNameEnum.HEAVY_CESTUS |
  WeaponNameEnum.LIGHT_CESTUS |
  WeaponNameEnum.FIGHT_CLAW |
  WeaponNameEnum.GRAIN_MACE |
  WeaponNameEnum.WORK_CLUB |
  WeaponNameEnum.TROLL_CLUB |
  WeaponNameEnum.KUKRI |
  WeaponNameEnum.COMMET |
  WeaponNameEnum.ROUND_SHIELD |
  WeaponNameEnum.PILUM |
  WeaponNameEnum.NAGINATA |
  WeaponNameEnum.PIQUE |
  WeaponNameEnum.HOE |
  WeaponNameEnum.SICKLE |
  WeaponNameEnum.SCYTHE |
  WeaponNameEnum.SHOVEL |
  WeaponNameEnum.ATLATL |
  WeaponNameEnum.LONGBOW |
  WeaponNameEnum.MEDIUM_CROSSBOW |
  WeaponNameEnum.REPEATING_CROSSBOW |
  WeaponNameEnum.ROCK_LAUNCHER |
  WeaponNameEnum.BLOWGUN |
  WeaponNameEnum.CROOK_SLING |
  WeaponNameEnum.BOLAS |
  WeaponNameEnum.WAR_BOOMERANG |
  WeaponNameEnum.HUNTING_BOOMERANG |
  WeaponNameEnum.DART |
  WeaponNameEnum.SHURIKEN |
  WeaponNameEnum.ROPE_LACE |
  WeaponNameEnum.POLE_LACE |
  WeaponNameEnum.WHIP |
  WeaponNameEnum.GREAT_AXE |
  WeaponNameEnum.STAFF |
  WeaponNameEnum.JABELIN;

export enum WeaponNameEnum {
  FIST = "FIST",
  KICK = "KICK",
  CLAW = "CLAW",
  BRAWL = "BRAWL",
  HORN = "HORN",
  COMBAT_AXE = "COMBAT_AXE",
  HAND_AXE = "HAND_AXE",
  GREAT_AXE = "GREAT_AXE",
  DAGGER = "DAGGER",
  CHAIN_AND_BALL = "CHAIN_AND_BALL",
  TRIPPLE_CHAIN = "TRIPPLE_CHAIN",
  MILITARY = "MILITARY",
  WARHAMMER = "WARHAMMER",
  GREAT_HAMMER = "GREAT_HAMMER",
  HEAVY_MACE = "HEAVY_MACE",
  LIGHT_MACE = "LIGHT_MACE",
  WOOD_CLUB = "WOOD_CLUB",
  CROOK = "CROOK",
  WAR_CLUB = "WAR_CLUB",
  RAPIER = "RAPIER",
  GLADIUS = "GLADIUS",
  BUCKER = "BUCKER",
  DIANE = "DIANE",
  HERALD = "HERALD",
  LARGE_RECTANGULAR = "LARGE_RECTANGULAR",
  JABELIN = "JABELIN",
  CABALRY_SPEAR = "CABALRY_SPEAR",
  SHORT_SPEAR = "SHORT_SPEAR",
  LONG_SPEAR = "LONG_SPEAR",
  BASTARD_SWORD = "BASTARD_SWORD",
  BROAD_SWORD = "BROAD_SWORD",
  SCIMITAR = "SCIMITAR",
  DOUBLE_FISTED_SWORD = "DOUBLE_FISTED_SWORD",
  SHORT_BOW = "SHORT_BOW",
  COMPOSITE_BOW = "COMPOSITE_BOW",
  HEAVY_CROSSBOW = "HEAVY_CROSSBOW",
  LIGHT_CROSSBOW = "LIGHT_CROSSBOW",
  SLING = "SLING",
  THROWING_AXE = "THROWING_AXE",
  THROWING_KNIFE = "THROWING_KNIFE",
  THROWING_STONE = "THROWING_STONE",
  HALDBERD = "HALDBERD",
  DANISH_AXE = "DANISH_AXE",
  KNIFE = "KNIFE",
  MAIN_GAUCHE = "MAIN_GAUCHE",
  SAI = "SAI",
  HEAVY_CESTUS = "HEAVY_CESTUS",
  LIGHT_CESTUS = "LIGHT_CESTUS",
  FIGHT_CLAW = "FIGHT_CLAW",
  GRAIN_MACE = "GRAIN_MACE",
  WORK_CLUB = "WORK_CLUB",
  TROLL_CLUB = "TROLL_CLUB",
  KUKRI = "KUKRI",
  COMMET = "COMMET",
  ROUND_SHIELD = "ROUND_SHIELD",
  PILUM = "PILUM",
  NAGINATA = "NAGINATA",
  PIQUE = "PIQUE",
  HOE = "HOE",
  SICKLE = "SICKLE",
  SCYTHE = "SCYTHE",
  SHOVEL = "SHOVEL",
  ATLATL = "ATLATL",
  LONGBOW = "LONGBOW",
  MEDIUM_CROSSBOW = "MEDIUM_CROSSBOW",
  REPEATING_CROSSBOW = "REPEATING_CROSSBOW",
  ROCK_LAUNCHER = "ROCK_LAUNCHER",
  BLOWGUN = "BLOWGUN",
  CROOK_SLING = "CROOK_SLING",
  BOLAS = "BOLAS",
  WAR_BOOMERANG = "WAR_BOOMERANG",
  HUNTING_BOOMERANG = "HUNTING_BOOMERANG",
  DART = "DART",
  SHURIKEN  = "SHURIKEN",
  ROPE_LACE = "ROPE_LACE",
  POLE_LACE = "POLE_LACE",
  WHIP = "WHIP",
  STAFF = "STAFF",
}


export const createWeapon = (type: WeaponType, name: WeaponNameType, translate: TranslateService): Weapon => {
  const literal = translate.instant( `PJ.WEAPON_NAME.${name}` );
  if(type === WeaponTypeEnum.AXE1H) {
    //                                                                        CAR, Ranged, - - -    ,2H,    PA,MR,SHield
    if (name === WeaponNameEnum.COMBAT_AXE) {
     return new Weapon(literal, new DiceRoll(1,8,2), DamageTypeEnum.SLASHING, 1,   false, 0, 0 , '', false, 8, 2, false, WeaponTypeEnum.AXE1H, 13, 9, new DiceRoll(1,8,2), 10, 10);
    } else if (name === WeaponNameEnum.HAND_AXE) {
     return new Weapon(literal, new DiceRoll(1,6,1), DamageTypeEnum.SLASHING, 0.5, false, 0, 0 , '', false, 6, 1, false, WeaponTypeEnum.AXE1H, 7, 9, new DiceRoll(1,6,1), 10, 10);
    }
  } else if (type === WeaponTypeEnum.AXE2H) {
    if (name === WeaponNameEnum.COMBAT_AXE) {
     return new Weapon(literal, new DiceRoll(1,8,2), DamageTypeEnum.SLASHING, 1,   false, 0, 0 , '', true, 8, 2, false, WeaponTypeEnum.AXE2H, 9, 9);
    } else if (name === WeaponNameEnum.GREAT_AXE) {
     return new Weapon(literal, new DiceRoll(2,6,2), DamageTypeEnum.SLASHING, 2,   false, 0, 0 , '', true, 10, 1, false, WeaponTypeEnum.AXE2H, 11, 9);
    } else if (name === WeaponNameEnum.HALDBERD) {
     return new Weapon(literal, new DiceRoll(3,6),   DamageTypeEnum.SLASHING, 3,   false, 0, 0 , '', true, 10, 1, false, WeaponTypeEnum.AXE2H, 13, 9, new DiceRoll(4,6));
    } else if (name === WeaponNameEnum.DANISH_AXE) {
     return new Weapon(literal, new DiceRoll(3,6),   DamageTypeEnum.SLASHING, 2.5, false, 0, 0 , '', true, 10, 1, false, WeaponTypeEnum.AXE2H, 11, 9);
    }
  } else if (type === WeaponTypeEnum.DAGGER) {
    if (name === WeaponNameEnum.DAGGER) {
     return new Weapon(literal, new DiceRoll(1,4,2),   DamageTypeEnum.PIERCING, 0.5, false, 0, 0 , '', false, 6, 3, false, WeaponTypeEnum.DAGGER, 0, 0, new DiceRoll(2,4,4), 15, 15);
    } else if (name === WeaponNameEnum.KNIFE) {
     return new Weapon(literal, new DiceRoll(1,3,1),   DamageTypeEnum.PIERCING, 0.2, false, 0, 0 , '', false, 4, 3, false, WeaponTypeEnum.DAGGER, 0, 0, new DiceRoll(2,3,2), 15, 15);
    } else if (name === WeaponNameEnum.MAIN_GAUCHE) {
     return new Weapon(literal, new DiceRoll(1,4,2),   DamageTypeEnum.PIERCING, 0.5, false, 0, 0 , '', false, 10, 3, false, WeaponTypeEnum.DAGGER, 0, 9, new DiceRoll(2,4,4), 15, 15);
    } else if (name === WeaponNameEnum.SAI) {
     return new Weapon(literal, new DiceRoll(1,6),     DamageTypeEnum.PIERCING, 1,   false, 0, 0 , '', false, 10, 2, false, WeaponTypeEnum.DAGGER, 0, 11, new DiceRoll(2,6), 15, 15);
    }
  } else if (type === WeaponTypeEnum.FIST) {
    if (name === WeaponNameEnum.FIST) {
      const weapon = new Weapon(literal, new DiceRoll(1,3),     DamageTypeEnum.BLUNT, 0, false, 0, 0 , '', false, 3, 3, false, WeaponTypeEnum.FIST, 0, 0, new DiceRoll(1,3), 25, 25);
      weapon.visible = false;
      return weapon;
    } else if (name === WeaponNameEnum.HEAVY_CESTUS) {
     return new Weapon(literal, new DiceRoll(1,3,2),   DamageTypeEnum.BLUNT, 1.5, false, 0, 0 , '', false, 8, 3, false, WeaponTypeEnum.FIST, 11, 0, new DiceRoll(1,3,2), 25, 25);
    } else if (name === WeaponNameEnum.LIGHT_CESTUS) {
     return new Weapon(literal, new DiceRoll(1,3,1),   DamageTypeEnum.BLUNT, 1, false, 0, 0 , '', false, 4, 3, false, WeaponTypeEnum.FIST, 7, 0, new DiceRoll(1,3,1), 25, 25);
    } else if (name === WeaponNameEnum.FIGHT_CLAW) {
     return new Weapon(literal, new DiceRoll(1,4,1),   DamageTypeEnum.SLASHING, 0.1, false, 0, 0 , '', false, 3, 3, false, WeaponTypeEnum.FIST, 7, 9, new DiceRoll(1,4,1), 25, 25);
    }
  } else if (type === WeaponTypeEnum.PEASANT_MACE1M) {
    if (name === WeaponNameEnum.BOLAS) {
     return new Weapon(literal, new DiceRoll(1,10,1),  DamageTypeEnum.BLUNT, 2, false, 0, 0 , '', false, 8, 2, false, WeaponTypeEnum.PEASANT_MACE1M, 11, 7, new DiceRoll(1,10,1), 5, 5);
    } else if (name === WeaponNameEnum.TRIPPLE_CHAIN) {
     return new Weapon(literal, new DiceRoll(1,6,2),   DamageTypeEnum.BLUNT, 2, false, 0, 0 , '', false, 10, 2, false, WeaponTypeEnum.PEASANT_MACE1M, 7, 9, new DiceRoll(1,6,2), 5, 5);
    } else if (name === WeaponNameEnum.GRAIN_MACE) {
     return new Weapon(literal, new DiceRoll(1,6),   DamageTypeEnum.BLUNT, 1, false, 0, 0 , '', false, 10, 2, false, WeaponTypeEnum.PEASANT_MACE1M, 9, 0, new DiceRoll(1,6), 5, 5);
    }
  } else if (type === WeaponTypeEnum.PEASANT_MACE2M) {
    if (name === WeaponNameEnum.MILITARY) {
     return new Weapon(literal, new DiceRoll(2,6,2),  DamageTypeEnum.BLUNT, 2, false, 0, 0 , '', true, 10, 1, false, WeaponTypeEnum.PEASANT_MACE2M, 9, 0, new DiceRoll(2,6,2), 5, 5);
    }
        //                                                                  CAR, Ranged, - - -        ,2H,   PA,MR,SHield
  } else if (type === WeaponTypeEnum.HAMMER1H) {
    if (name === WeaponNameEnum.WARHAMMER) {
     return new Weapon(literal, new DiceRoll(1,6,2),  DamageTypeEnum.PIERCING, 2, false, 0, 0 , '', false, 8, 2, false, WeaponTypeEnum.PEASANT_MACE2M, 11, 9, new DiceRoll(2,6,4), 10, 10);
    }
  } else if (type === WeaponTypeEnum.HAMMER2H) {
    if (name === WeaponNameEnum.GREAT_HAMMER) {
     return new Weapon(literal, new DiceRoll(2,6,2),  DamageTypeEnum.PIERCING, 2.5, false, 0, 0 , '', true, 10, 1, false, WeaponTypeEnum.HAMMER2H, 9, 9, new DiceRoll(4,6,4), 5, 5);
    }
  } else if (type === WeaponTypeEnum.MACE1H) {
    if (name === WeaponNameEnum.HEAVY_MACE) {
     return new Weapon(literal, new DiceRoll(1,10),  DamageTypeEnum.BLUNT, 2.5, false, 0, 0 , '', false, 10, 2, false, WeaponTypeEnum.MACE1H, 13, 7, new DiceRoll(1,10), 15, 15);
    } else if (name === WeaponNameEnum.LIGHT_MACE) {
     return new Weapon(literal, new DiceRoll(1,8),  DamageTypeEnum.BLUNT, 1, false, 0, 0 , '', false, 6, 2, false, WeaponTypeEnum.MACE1H, 7, 7, new DiceRoll(1,8), 15, 15);
    } else if (name === WeaponNameEnum.WOOD_CLUB) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.BLUNT, 1, false, 0, 0 , '', false, 4, 2, false, WeaponTypeEnum.MACE1H, 0, 7, new DiceRoll(1,6), 15, 15);
    } else if (name === WeaponNameEnum.STAFF) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.BLUNT, 0.5, false, 0, 0 , '', false, 5, 2, false, WeaponTypeEnum.MACE1H, 7, 9, new DiceRoll(1,6), 15, 15);
    }
  } else if (type === WeaponTypeEnum.MACE2H) {
    if (name === WeaponNameEnum.HEAVY_MACE) {
     return new Weapon(literal, new DiceRoll(1,10),  DamageTypeEnum.BLUNT, 2.5, false, 0, 0 , '', true, 10, 2, false, WeaponTypeEnum.MACE2H, 9, 7, new DiceRoll(1,10), 10, 10);
    } else if (name === WeaponNameEnum.WAR_CLUB) {
     return new Weapon(literal, new DiceRoll(1,10,2),  DamageTypeEnum.BLUNT, 2.5, false, 0, 0 , '', true, 12, 1, false, WeaponTypeEnum.MACE2H, 11, 7, new DiceRoll(1,10,2), 10, 10);
    } else if (name === WeaponNameEnum.CROOK) {
     return new Weapon(literal, new DiceRoll(1,8),  DamageTypeEnum.BLUNT, 1.5, false, 0, 0 , '', true, 8, 2, false, WeaponTypeEnum.MACE2H, 9, 9 , new DiceRoll(1,8), 10, 10);
    } else if (name === WeaponNameEnum.WORK_CLUB) {
     return new Weapon(literal, new DiceRoll(2,6,2),  DamageTypeEnum.BLUNT, 4, false, 0, 0 , '', true, 12, 2, false, WeaponTypeEnum.MACE2H, 13, 7, new DiceRoll(2,6,2), 10, 10);
    } else if (name === WeaponNameEnum.TROLL_CLUB) {
     return new Weapon(literal, new DiceRoll(2,8),  DamageTypeEnum.BLUNT, 5.5, false, 0, 0 , '', true, 16, 1, false, WeaponTypeEnum.MACE2H, 17, 7, new DiceRoll(2,8), 10, 10);
    }
  } else if (type === WeaponTypeEnum.RAPIER) {
    if (name === WeaponNameEnum.RAPIER) {
     return new Weapon(literal, new DiceRoll(1,6,1),  DamageTypeEnum.PIERCING, 1, false, 0, 0 , '', false, 8, 2, false, WeaponTypeEnum.RAPIER, 7, 13, new DiceRoll(3,6,3), 5, 5);
    }
  } else if (type === WeaponTypeEnum.SHORT_SWORD) {
    if (name === WeaponNameEnum.GLADIUS) {
     return new Weapon(literal, new DiceRoll(1,6,1),  DamageTypeEnum.PIERCING, 1, false, 0, 0 , '', false, 10, 2, false, WeaponTypeEnum.SHORT_SWORD, 0, 0, new DiceRoll(2,6,2), 10, 10);
    } else if (name === WeaponNameEnum.KUKRI) {
     return new Weapon(literal, new DiceRoll(1,4,3),  DamageTypeEnum.SLASHING, 0.5, false, 0, 0 , '', false, 8, 3, false, WeaponTypeEnum.SHORT_SWORD, 0, 11, new DiceRoll(1,4,3), 10, 10);
    }
  } else if (type === WeaponTypeEnum.SHIELD) {
    if (name === WeaponNameEnum.BUCKER) {
     return new Weapon(literal, new DiceRoll(1,4),  DamageTypeEnum.BLUNT, 1, false, 0, 0 , '', false, 8, 3, true, WeaponTypeEnum.SHIELD, 0, 9, new DiceRoll(1,4), 5, 15);
    } else if (name === WeaponNameEnum.HERALD || name === WeaponNameEnum.DIANE) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.BLUNT, 3, false, 0, 0 , '', false, 12, 3, true, WeaponTypeEnum.SHIELD, 9, 0, new DiceRoll(1,6), 5, 15);
    } else if (name === WeaponNameEnum.LARGE_RECTANGULAR) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.BLUNT, 7, false, 0, 0 , '', false, 18, 3, true, WeaponTypeEnum.SHIELD, 12, 0, new DiceRoll(1,6), 5, 15);
    } else if (name === WeaponNameEnum.COMMET) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.BLUNT, 5, false, 0, 0 , '', false, 16, 3, true, WeaponTypeEnum.SHIELD, 11, 0, new DiceRoll(1,6), 5, 15);
    }
  } else if (type === WeaponTypeEnum.SPEAR1H) {
    if (name === WeaponNameEnum.PILUM) {
     return new Weapon(literal, new DiceRoll(1,6,1),  DamageTypeEnum.PIERCING, 2, false, 0, 0 , '', false, 10, 2, false, WeaponTypeEnum.SPEAR1H, 9, 7, new DiceRoll(2,6,2), 5, 5);
    } else if (name === WeaponNameEnum.JABELIN) {
     return new Weapon(literal, new DiceRoll(1,6,1),  DamageTypeEnum.PIERCING, 2, false, 0, 0 , '', false, 8, 2, false, WeaponTypeEnum.SPEAR1H, 7, 7, new DiceRoll(2,6,2), 5, 5);
    } else if (name === WeaponNameEnum.CABALRY_SPEAR) {
     return new Weapon(literal, new DiceRoll(1,10,1),  DamageTypeEnum.PIERCING, 3.5, false, 0, 0 , '', false, 10, 0, false, WeaponTypeEnum.SPEAR1H, 7, 7, new DiceRoll(2,10,2), 5, 5);
    } else if (name === WeaponNameEnum.SHORT_SPEAR) {
     return new Weapon(literal, new DiceRoll(1,8,1),  DamageTypeEnum.PIERCING, 2, false, 0, 0 , '', false, 10, 2, false, WeaponTypeEnum.SPEAR1H, 7, 7, new DiceRoll(2,8,2), 5, 5);
    }
  } else if (type === WeaponTypeEnum.SPEAR2H) {
    if (name === WeaponNameEnum.SHORT_SPEAR) {
     return new Weapon(literal, new DiceRoll(1,8,1),  DamageTypeEnum.PIERCING, 2, false, 0, 0 , '', true, 10, 2, false, WeaponTypeEnum.SPEAR2H, 0, 7, new DiceRoll(2,8,2), 15, 15);
    } else if (name === WeaponNameEnum.LONG_SPEAR) {
     return new Weapon(literal, new DiceRoll(1,10,1),  DamageTypeEnum.PIERCING, 2, false, 0, 0 , '', true, 10, 1, false, WeaponTypeEnum.SPEAR2H, 9, 7, new DiceRoll(2,10,2), 15, 15);
    } else if (name === WeaponNameEnum.NAGINATA) {
     return new Weapon(literal, new DiceRoll(2,6,2),  DamageTypeEnum.PIERCING, 2, false, 0, 0 , '', true, 10, 1, false, WeaponTypeEnum.SPEAR2H, 9, 7, new DiceRoll(2,6,2), 5, 5);
    } else if (name === WeaponNameEnum.PIQUE) {
     return new Weapon(literal, new DiceRoll(2,6,2),  DamageTypeEnum.PIERCING, 3.5, false, 0, 0 , '', true, 12, 0, false, WeaponTypeEnum.SPEAR2H, 11, 7, new DiceRoll(4,6,4), 15, 15);
    }
  } else if (type === WeaponTypeEnum.SWORD1H) {
    if (name === WeaponNameEnum.BASTARD_SWORD) {
     return new Weapon(literal, new DiceRoll(1,10,1),  DamageTypeEnum.SLASHING, 2, false, 0, 0 , '', false, 12, 2, false, WeaponTypeEnum.SWORD1H, 13, 9, new DiceRoll(1,10,1), 10, 10);
    } else if (name === WeaponNameEnum.BROAD_SWORD) {
     return new Weapon(literal, new DiceRoll(1,8,1),  DamageTypeEnum.PIERCING, 1.5, false, 0, 0 , '', false, 10, 2, false, WeaponTypeEnum.SWORD1H, 9, 7, new DiceRoll(2,8,2), 10, 10);
    } else if (name === WeaponNameEnum.SCIMITAR) {
     return new Weapon(literal, new DiceRoll(1,6,2),  DamageTypeEnum.PIERCING, 1.5, false, 0, 0 , '', false, 10, 2, false, WeaponTypeEnum.SWORD1H, 7, 11, new DiceRoll(2,6,4), 10, 10);
    }
  } else if (type === WeaponTypeEnum.SWORD2H) {
    if (name === WeaponNameEnum.BASTARD_SWORD) {
     return new Weapon(literal, new DiceRoll(1,10,1),  DamageTypeEnum.SLASHING, 2, false, 0, 0 , '', true, 12, 2, false, WeaponTypeEnum.SWORD2H, 9, 9, new DiceRoll(1,10,1), 5, 5);
    } else if (name === WeaponNameEnum.DOUBLE_FISTED_SWORD) {
     return new Weapon(literal, new DiceRoll(2,8),  DamageTypeEnum.SLASHING, 3.5, false, 0, 0 , '', true, 12, 1, false, WeaponTypeEnum.SWORD2H, 11, 13, new DiceRoll(2,8), 15, 15);
    }
  } else if (type === WeaponTypeEnum.TOOL_HOE) {
    if (name === WeaponNameEnum.HOE) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.SLASHING, 2, false, 0, 0 , '', true, 8, 1, false, WeaponTypeEnum.TOOL_HOE, 7, 7, new DiceRoll(1,6), 10, 10);
    }
  } else if (type === WeaponTypeEnum.TOOL_SCYTHE) {
    if (name === WeaponNameEnum.SCYTHE) {
     return new Weapon(literal, new DiceRoll(2,6),  DamageTypeEnum.SLASHING, 2.5, false, 0, 0 , '', false, 8, 1, false, WeaponTypeEnum.TOOL_SCYTHE, 11, 9, new DiceRoll(2,6), 10, 10);
    }
  } else if (type === WeaponTypeEnum.TOOL_SICKLE) {
    if (name === WeaponNameEnum.SICKLE) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.SLASHING, 2.5, false, 0, 0 , '', false, 6, 3, false, WeaponTypeEnum.TOOL_SICKLE, 0, 0, new DiceRoll(1,6), 5, 5);
    }
  } else if (type === WeaponTypeEnum.TOOL_SHOVEL) {
    if (name === WeaponNameEnum.SHOVEL) {
     return new Weapon(literal, new DiceRoll(1,6,2),  DamageTypeEnum.SLASHING, 1.5, false, 0, 0 , '', true, 8, 2, false, WeaponTypeEnum.TOOL_SHOVEL, 7, 7, new DiceRoll(1,6,2), 5, 5);
    }
  } else if (type === WeaponTypeEnum.KICK) {
    if (name === WeaponNameEnum.KICK) {
     const weapon = new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.BLUNT, 0, false, 0, 0 , '', false, 3, 3, false, WeaponTypeEnum.KICK, 0, 0, new DiceRoll(1,6), 15, 15);
     weapon.visible = false;
     return weapon;    }
  } else if (type === WeaponTypeEnum.BRAWL) {
    if (name === WeaponNameEnum.BRAWL) {
    const weapon =  new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.BLUNT, 0, false, 0, 0 , '', false, 3, 3, false, WeaponTypeEnum.BRAWL, 0, 0, new DiceRoll(1,6), 25, 25);
     weapon.visible = false;25
     return weapon;    }
  } else if (type === WeaponTypeEnum.HORN) {
    if (name === WeaponNameEnum.HORN) {
    const weapon =  new Weapon(literal, new DiceRoll(1,4),  DamageTypeEnum.BLUNT, 0, false, 0, 0 , '', false, 3, 3, false, WeaponTypeEnum.HORN, 0, 0, new DiceRoll(1,4), 15, 15);
     weapon.visible = false;
     return weapon;    }
  } else if (type === WeaponTypeEnum.SHORT_BOW) {
    if (name === WeaponNameEnum.SHORT_BOW) {
     return new Weapon(literal, new DiceRoll(1,6,1),  DamageTypeEnum.PIERCING, 0.5, true, 90, 120 , '1/MR', true, 0, 5, false, WeaponTypeEnum.SHORT_BOW, 9, 9, new DiceRoll(2,6,2), 5, 5);
    }
  } else if (type === WeaponTypeEnum.COMPOSITE_BOW) {
    if (name === WeaponNameEnum.COMPOSITE_BOW) {
     return new Weapon(literal, new DiceRoll(1,8,1),  DamageTypeEnum.PIERCING, 0.5, true, 120, 225 , '1/MR', true, 0, 7, false, WeaponTypeEnum.COMPOSITE_BOW, 13, 9, new DiceRoll(2,8,2), 5, 5);
    }
  } else if (type === WeaponTypeEnum.LONGBOW) {
    if (name === WeaponNameEnum.LONGBOW) {
     return new Weapon(literal, new DiceRoll(1,8,1),  DamageTypeEnum.PIERCING, 0.5, true, 90, 275 , '1/MR', true, 0, 6, false, WeaponTypeEnum.LONGBOW, 11, 9, new DiceRoll(2,8,2), 5, 5);
    }
  } else if (type === WeaponTypeEnum.ATLATL) {
    //ATLATL mus be used with jabelins
    if (name === WeaponNameEnum.ATLATL) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.PIERCING, 0.5, true, 10, 20 , '1/AC', true, 0, 6, false, WeaponTypeEnum.ATLATL, 7, 9, new DiceRoll(1,6), 5, 5);
    }
  } else if (type === WeaponTypeEnum.HEAVY_CROSSBOW) {
    if (name === WeaponNameEnum.HEAVY_CROSSBOW) {
     return new Weapon(literal, new DiceRoll(2,6,2),  DamageTypeEnum.PIERCING, 8, true, 55, 300 , '1/3AC', true, 0, 10, false, WeaponTypeEnum.HEAVY_CROSSBOW, 13, 7, new DiceRoll(4,6,4), 25, 5);
    }
  } else if (type === WeaponTypeEnum.LIGHT_CROSSBOW) {
    if (name === WeaponNameEnum.LIGHT_CROSSBOW) {
     return new Weapon(literal, new DiceRoll(1,6,2),  DamageTypeEnum.PIERCING, 3.4, true, 40, 225 , '1/3AC', true, 0, 6, false, WeaponTypeEnum.LIGHT_CROSSBOW, 9, 7, new DiceRoll(2,6,4), 25, 5);
    }
  } else if (type === WeaponTypeEnum.MEDIUM_CROSSBOW) {
    if (name === WeaponNameEnum.MEDIUM_CROSSBOW) {
     return new Weapon(literal, new DiceRoll(2,4,2),  DamageTypeEnum.PIERCING, 4.8, true, 50, 270 , '1/2AC', true, 0, 8, false, WeaponTypeEnum.MEDIUM_CROSSBOW, 11, 7, new DiceRoll(4,4,4), 25, 5);
    }
  } else if (type === WeaponTypeEnum.REPEATING_CROSSBOW) {
    if (name === WeaponNameEnum.REPEATING_CROSSBOW) {
     return new Weapon(literal, new DiceRoll(1,6,2),  DamageTypeEnum.PIERCING, 3.2, true, 60, 170 , '1/MR', true, 0, 6, false, WeaponTypeEnum.REPEATING_CROSSBOW, 9, 7, new DiceRoll(2,6,4), 25, 5);
    }
  } else if (type === WeaponTypeEnum.ROCK_LAUNCHER) {
    if (name === WeaponNameEnum.ROCK_LAUNCHER) {
     return new Weapon(literal, new DiceRoll(1,6,2),  DamageTypeEnum.PIERCING, 3.4, true, 60, 170 , '1/AC', true, 0, 6, false, WeaponTypeEnum.ROCK_LAUNCHER, 11, 7, new DiceRoll(2,6,4), 10, 5);
    }
  } else if (type === WeaponTypeEnum.BLOWGUN) {
    if (name === WeaponNameEnum.BLOWGUN) {
     return new Weapon(literal, new DiceRoll(1,3),  DamageTypeEnum.PIERCING, 0.5, true, 30, 30 , '1/AC', true, 0, 4, false, WeaponTypeEnum.BLOWGUN, 0, 11, new DiceRoll(2,3), 10, 5);
    }
  } else if (type === WeaponTypeEnum.SLING) {
    if (name === WeaponNameEnum.SLING) {
     return new Weapon(literal, new DiceRoll(1,8),  DamageTypeEnum.PIERCING, 0.1, true, 100, 100 , '1/AC', true, 0, 0, false, WeaponTypeEnum.SLING, 0, 11, new DiceRoll(2,8), 5, 5);
    }
  } else if (type === WeaponTypeEnum.CROOK_SLING) {
    if (name === WeaponNameEnum.CROOK_SLING) {
     return new Weapon(literal, new DiceRoll(1,10),  DamageTypeEnum.PIERCING, 0.5, true, 120, 120 , '1/AC', true, 0, 10, false, WeaponTypeEnum.CROOK_SLING, 9, 11, new DiceRoll(2,10), 10, 5);
    }
  } else if (type === WeaponTypeEnum.JABELIN) {
    if (name === WeaponNameEnum.JABELIN) {
     return new Weapon(literal, new DiceRoll(1,8),  DamageTypeEnum.PIERCING, 1.5, true, 20, 50 , '1/MR', true, 0, 8, false, WeaponTypeEnum.JABELIN, 9, 9, new DiceRoll(2,8), 10, 5);
    }
  } else if (type === WeaponTypeEnum.THROWING_AXE) {
    if (name === WeaponNameEnum.THROWING_AXE) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.PIERCING, 0.5, true, 20, 20 , '1/MR', true, 0, 6, false, WeaponTypeEnum.THROWING_AXE, 9, 11, new DiceRoll(1,6), 10, 5);
    }
  } else if (type === WeaponTypeEnum.THROWING_KNIFE) {
    if (name === WeaponNameEnum.THROWING_KNIFE) {
     return new Weapon(literal, new DiceRoll(1,4),  DamageTypeEnum.PIERCING, 0.2, true, 20, 20 , '1/MR', true, 0, 4, false, WeaponTypeEnum.THROWING_KNIFE, 0, 11, new DiceRoll(2,4), 5, 5);
    }
  } else if (type === WeaponTypeEnum.THROWING_ROCK) {
    if (name === WeaponNameEnum.THROWING_STONE) {
     return new Weapon(literal, new DiceRoll(1,3),  DamageTypeEnum.PIERCING, 0.5, true, 20, 20 , '1/MR', true, 0, 0, false, WeaponTypeEnum.THROWING_ROCK, 0, 0, new DiceRoll(2,3), 15, 5);
    }
  } else if (type === WeaponTypeEnum.BOLAS) {
    if (name === WeaponNameEnum.BOLAS) {
     return new Weapon(literal, new DiceRoll(1,4),  DamageTypeEnum.PIERCING, 3, true, 15, 25 , '1/AC', true, 0, 0, false, WeaponTypeEnum.BOLAS, 9, 13, new DiceRoll(1,4), 5, 5);
    }
  } else if (type === WeaponTypeEnum.WAR_BOOMERANG) {
    if (name === WeaponNameEnum.WAR_BOOMERANG) {
     return new Weapon(literal, new DiceRoll(1,8),  DamageTypeEnum.PIERCING, 1, true, 30, 50 , '1/AC', true, 0, 6, false, WeaponTypeEnum.WAR_BOOMERANG, 13, 9, new DiceRoll(1,8), 10, 5);
    }
  } else if (type === WeaponTypeEnum.HUNTING_BOOMERANG) {
    if (name === WeaponNameEnum.HUNTING_BOOMERANG) {
     return new Weapon(literal, new DiceRoll(1,4),  DamageTypeEnum.PIERCING, 1, true, 30, 50 , '1/MR', true, 0, 3, false, WeaponTypeEnum.HUNTING_BOOMERANG, 9, 11, new DiceRoll(1,4), 5, 5);
    }
  } else if (type === WeaponTypeEnum.DART) {
    if (name === WeaponNameEnum.DART) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.PIERCING, 0.5, true, 20, 30 , '1/MR', true, 0, 4, false, WeaponTypeEnum.DART, 0, 9, new DiceRoll(2,6), 10, 5);
    }
  } else if (type === WeaponTypeEnum.SHURIKEN) {
    if (name === WeaponNameEnum.SHURIKEN) {
     return new Weapon(literal, new DiceRoll(1,3),  DamageTypeEnum.PIERCING, 0.1, true, 20, 30 , '1/MR', true, 0, 4, false, WeaponTypeEnum.SHURIKEN, 0, 13, new DiceRoll(2,3), 5, 5);
    }
  } else if (type === WeaponTypeEnum.ROPE_LACE) {
    if (name === WeaponNameEnum.ROPE_LACE) {
     return new Weapon(literal, new DiceRoll(0,0),  DamageTypeEnum.PIERCING, 1, true, 10, 10 , '1/5AC', true, 0, 0, false, WeaponTypeEnum.ROPE_LACE, 9, 13, new DiceRoll(0,0), 5, 5);
    }
  } else if (type === WeaponTypeEnum.POLE_LACE) {
    if (name === WeaponNameEnum.POLE_LACE) {
     return new Weapon(literal, new DiceRoll(0,0),  DamageTypeEnum.PIERCING, 3, true, 3, 3 , '1/AC', true, 0, 4, false, WeaponTypeEnum.POLE_LACE, 9, 9, new DiceRoll(0,0), 20, 5);
    }
  } else if (type === WeaponTypeEnum.WHIP) {
    if (name === WeaponNameEnum.WHIP) {
     return new Weapon(literal, new DiceRoll(1,4),  DamageTypeEnum.PIERCING, 3, true, 5, 5 , '1/AC', true, 0, 6, false, WeaponTypeEnum.WHIP, 9, 9, new DiceRoll(1,4), 10, 5);
    }
  }
  return new Weapon('No weapon', new DiceRoll(0,0),  DamageTypeEnum.PIERCING, 0, true, 0, 0 , '', true, 0, 0, false, WeaponTypeEnum.FIST, 0, 0, new DiceRoll(0,0), 5, 5);
}

export const getWweaponNameListByType = (type: WeaponTypeEnum): WeaponNameEnum[] => {
const weaponNameList: WeaponNameEnum[] = [];
if (type === WeaponTypeEnum.AXE1H) {
  return [WeaponNameEnum.COMBAT_AXE, WeaponNameEnum.HAND_AXE];
} else if (type === WeaponTypeEnum.AXE2H) {
  return [WeaponNameEnum.COMBAT_AXE, WeaponNameEnum.GREAT_AXE, WeaponNameEnum.HALDBERD, WeaponNameEnum.DANISH_AXE];
} else if (type === WeaponTypeEnum.DAGGER) {
  return [WeaponNameEnum.DAGGER, WeaponNameEnum.KNIFE, WeaponNameEnum.MAIN_GAUCHE, WeaponNameEnum.SAI];
} else if (type === WeaponTypeEnum.PEASANT_MACE1M) {
  return[WeaponNameEnum.BOLAS, WeaponNameEnum.TRIPPLE_CHAIN, WeaponNameEnum.GRAIN_MACE];
} else if (type === WeaponTypeEnum.PEASANT_MACE2M) {
  return[WeaponNameEnum.MILITARY];
} else if (type === WeaponTypeEnum.HAMMER1H) {
  return[WeaponNameEnum.WARHAMMER];
} else if (type === WeaponTypeEnum.HAMMER2H) {
  return[WeaponNameEnum.GREAT_HAMMER];
} else if (type === WeaponTypeEnum.RAPIER) {
  return[WeaponNameEnum.RAPIER];
} else if (type === WeaponTypeEnum.SHORT_SWORD) {
  return[WeaponNameEnum.GLADIUS, WeaponNameEnum.KUKRI];
} else if (type === WeaponTypeEnum.SHIELD) {
  return[WeaponNameEnum.BUCKER, WeaponNameEnum.ROUND_SHIELD, WeaponNameEnum.HERALD, WeaponNameEnum.COMMET, WeaponNameEnum.LARGE_RECTANGULAR];
} else if (type === WeaponTypeEnum.SPEAR1H) {
  return[WeaponNameEnum.JABELIN, WeaponNameEnum.CABALRY_SPEAR, WeaponNameEnum.SHORT_SPEAR];
} else if (type === WeaponTypeEnum.SPEAR2H) {
  return[WeaponNameEnum.LONG_SPEAR, WeaponNameEnum.NAGINATA, WeaponNameEnum.PIQUE];
} else if (type === WeaponTypeEnum.SWORD1H) {
  return[WeaponNameEnum.BASTARD_SWORD, WeaponNameEnum.BROAD_SWORD, WeaponNameEnum.SCIMITAR];
} else if (type === WeaponTypeEnum.SWORD2H) {
  return[WeaponNameEnum.BASTARD_SWORD, WeaponNameEnum.DOUBLE_FISTED_SWORD];
} else if (type === WeaponTypeEnum.SHORT_BOW) {
  return[WeaponNameEnum.SHORT_BOW];
} else if (type === WeaponTypeEnum.LONGBOW) {
  return[WeaponNameEnum.LONGBOW];
} else if (type === WeaponTypeEnum.COMPOSITE_BOW) {
  return[WeaponNameEnum.COMPOSITE_BOW];
} else if (type === WeaponTypeEnum.LIGHT_CROSSBOW) {
  return[WeaponNameEnum.LIGHT_CROSSBOW];
} else if (type === WeaponTypeEnum.MEDIUM_CROSSBOW) {
  return[WeaponNameEnum.MEDIUM_CROSSBOW];
} else if (type === WeaponTypeEnum.HEAVY_CROSSBOW) {
  return[WeaponNameEnum.HEAVY_CROSSBOW];
} else if (type === WeaponTypeEnum.REPEATING_CROSSBOW) {
  return[WeaponNameEnum.REPEATING_CROSSBOW];
} else if (type === WeaponTypeEnum.CROOK_SLING) {
  return[WeaponNameEnum.CROOK_SLING];
} else if (type === WeaponTypeEnum.SLING) {
  return[WeaponNameEnum.SLING];
} else if (type === WeaponTypeEnum.THROWING_AXE) {
  return[WeaponNameEnum.THROWING_AXE];
} else if (type === WeaponTypeEnum.THROWING_KNIFE) {
  return[WeaponNameEnum.THROWING_KNIFE];
} else if (type === WeaponTypeEnum.THROWING_ROCK) {
  return[WeaponNameEnum.THROWING_STONE];
} else if (type === WeaponTypeEnum.FIST) {
  return[WeaponNameEnum.FIST, WeaponNameEnum.HEAVY_CESTUS, WeaponNameEnum.LIGHT_CESTUS, WeaponNameEnum.FIGHT_CLAW ];
} else if (type === WeaponTypeEnum.MACE1H) {
  return[WeaponNameEnum.HEAVY_MACE, WeaponNameEnum.LIGHT_MACE, WeaponNameEnum.WOOD_CLUB, WeaponNameEnum.STAFF];
} else if (type === WeaponTypeEnum.MACE2H) {
  return[WeaponNameEnum.HEAVY_MACE, WeaponNameEnum.WAR_CLUB, WeaponNameEnum.CROOK, WeaponNameEnum.WORK_CLUB, WeaponNameEnum.TROLL_CLUB];
} else if (type === WeaponTypeEnum.ATLATL) {
  return[WeaponNameEnum.ATLATL];
} else if (type === WeaponTypeEnum.ROCK_LAUNCHER) {
  return[WeaponNameEnum.ROCK_LAUNCHER];
} else if (type === WeaponTypeEnum.BLOWGUN) {
  return[WeaponNameEnum.BLOWGUN];
} else if (type === WeaponTypeEnum.BOLAS) {
  return[WeaponNameEnum.BOLAS];
} else if (type === WeaponTypeEnum.WAR_BOOMERANG) {
  return[WeaponNameEnum.WAR_BOOMERANG];
} else if (type === WeaponTypeEnum.HUNTING_BOOMERANG) {
  return[WeaponNameEnum.HUNTING_BOOMERANG];
} else if (type === WeaponTypeEnum.JABELIN) {
  return[WeaponNameEnum.JABELIN];
} else if (type === WeaponTypeEnum.DART) {
  return[WeaponNameEnum.DART];
} else if (type === WeaponTypeEnum.SHURIKEN) {
  return[WeaponNameEnum.SHURIKEN];
} else if (type === WeaponTypeEnum.ROPE_LACE) {
  return[WeaponNameEnum.ROPE_LACE];
} else if (type === WeaponTypeEnum.POLE_LACE) {
  return[WeaponNameEnum.POLE_LACE];
} else if (type === WeaponTypeEnum.WHIP) {
  return[WeaponNameEnum.WHIP];
} else if (type === WeaponTypeEnum.KICK) {
  return[WeaponNameEnum.KICK];
} else if (type === WeaponTypeEnum.CLAW) {
  return[WeaponNameEnum.CLAW];
} else if (type === WeaponTypeEnum.BRAWL) {
  return[WeaponNameEnum.BRAWL];
} else if (type === WeaponTypeEnum.HORN) {
  return[WeaponNameEnum.HORN];
} else if (type === WeaponTypeEnum.TOOL_HOE) {
  return[WeaponNameEnum.HOE];
} else if (type === WeaponTypeEnum.TOOL_SCYTHE) {
  return[WeaponNameEnum.SCYTHE];
} else if (type === WeaponTypeEnum.TOOL_SICKLE) {
  return[WeaponNameEnum.SICKLE];
} else if (type === WeaponTypeEnum.TOOL_SHOVEL) {
  return[WeaponNameEnum.SHOVEL];
}
return weaponNameList;
}
