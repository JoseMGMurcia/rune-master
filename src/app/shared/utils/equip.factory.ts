import { TranslateService } from "@ngx-translate/core";
import { DamageTypeEnum, Weapon, weaponType, weaponTypeEnum } from "../models/character.model";
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


export const createWeapon = (type: weaponType, name: WeaponNameType, translate: TranslateService): Weapon => {
  const literal = translate.instant( `PJ.WEAPON_NAME.${name}` );
  if(type === weaponTypeEnum.AXE1H) {
    //                                                                        CAR, Ranged, - - -    ,2H,    PA,MR,SHield
    if (name === WeaponNameEnum.COMBAT_AXE) {
     return new Weapon(literal, new DiceRoll(1,8,2), DamageTypeEnum.SLASHING, 1,   false, 0, 0 , '', false, 8, 2, false, weaponTypeEnum.AXE1H, 13, 9);
    } else if (name === WeaponNameEnum.HAND_AXE) {
     return new Weapon(literal, new DiceRoll(1,6,1), DamageTypeEnum.SLASHING, 0.5, false, 0, 0 , '', false, 6, 1, false, weaponTypeEnum.AXE1H, 7, 9);
    }
  } else if (type === weaponTypeEnum.AXE2H) {
    if (name === WeaponNameEnum.COMBAT_AXE) {
     return new Weapon(literal, new DiceRoll(1,8,2), DamageTypeEnum.SLASHING, 1,   false, 0, 0 , '', true, 8, 2, false, weaponTypeEnum.AXE2H, 9, 9);
    } else if (name === WeaponNameEnum.GREAT_AXE) {
     return new Weapon(literal, new DiceRoll(2,6,2), DamageTypeEnum.SLASHING, 2,   false, 0, 0 , '', true, 10, 1, false, weaponTypeEnum.AXE2H, 11, 9);
    } else if (name === WeaponNameEnum.HALDBERD) {
     return new Weapon(literal, new DiceRoll(3,6),   DamageTypeEnum.SLASHING, 3,   false, 0, 0 , '', true, 10, 1, false, weaponTypeEnum.AXE2H, 13, 9, new DiceRoll(4,6));
    } else if (name === WeaponNameEnum.DANISH_AXE) {
     return new Weapon(literal, new DiceRoll(3,6),   DamageTypeEnum.SLASHING, 2.5, false, 0, 0 , '', true, 10, 1, false, weaponTypeEnum.AXE2H, 11, 9);
    }
  } else if (type === weaponTypeEnum.DAGGER) {
    if (name === WeaponNameEnum.DAGGER) {
     return new Weapon(literal, new DiceRoll(1,4,2),   DamageTypeEnum.PIERCING, 0.5, false, 0, 0 , '', false, 6, 3, false, weaponTypeEnum.DAGGER, 0, 0, new DiceRoll(2,4,4));
    } else if (name === WeaponNameEnum.KNIFE) {
     return new Weapon(literal, new DiceRoll(1,3,1),   DamageTypeEnum.PIERCING, 0.2, false, 0, 0 , '', false, 4, 3, false, weaponTypeEnum.DAGGER, 0, 0, new DiceRoll(2,3,2));
    } else if (name === WeaponNameEnum.MAIN_GAUCHE) {
     return new Weapon(literal, new DiceRoll(1,4,2),   DamageTypeEnum.PIERCING, 0.5, false, 0, 0 , '', false, 10, 3, false, weaponTypeEnum.DAGGER, 0, 9, new DiceRoll(2,4,4));
    } else if (name === WeaponNameEnum.SAI) {
     return new Weapon(literal, new DiceRoll(1,6),     DamageTypeEnum.PIERCING, 1,   false, 0, 0 , '', false, 10, 2, false, weaponTypeEnum.DAGGER, 0, 11, new DiceRoll(2,6));
    }
  } else if (type === weaponTypeEnum.FIST) {
    if (name === WeaponNameEnum.FIST) {
      const weapon = new Weapon(literal, new DiceRoll(1,3),     DamageTypeEnum.BLUNT, 0, false, 0, 0 , '', false, 3, 3, false, weaponTypeEnum.FIST, 0, 0);
      weapon.visible = false;
      return weapon;
    } else if (name === WeaponNameEnum.HEAVY_CESTUS) {
     return new Weapon(literal, new DiceRoll(1,3,2),   DamageTypeEnum.BLUNT, 1.5, false, 0, 0 , '', false, 8, 3, false, weaponTypeEnum.FIST, 11, 0);
    } else if (name === WeaponNameEnum.LIGHT_CESTUS) {
     return new Weapon(literal, new DiceRoll(1,3,1),   DamageTypeEnum.BLUNT, 1, false, 0, 0 , '', false, 4, 3, false, weaponTypeEnum.FIST, 7, 0);
    } else if (name === WeaponNameEnum.FIGHT_CLAW) {
     return new Weapon(literal, new DiceRoll(1,4,1),   DamageTypeEnum.SLASHING, 0.1, false, 0, 0 , '', false, 3, 3, false, weaponTypeEnum.FIST, 7, 9);
    }
  } else if (type === weaponTypeEnum.PEASANT_MACE1M) {
    if (name === WeaponNameEnum.BOLAS) {
     return new Weapon(literal, new DiceRoll(1,10,1),  DamageTypeEnum.BLUNT, 2, false, 0, 0 , '', false, 8, 2, false, weaponTypeEnum.PEASANT_MACE1M, 11, 7);
    } else if (name === WeaponNameEnum.TRIPPLE_CHAIN) {
     return new Weapon(literal, new DiceRoll(1,6,2),   DamageTypeEnum.BLUNT, 2, false, 0, 0 , '', false, 10, 2, false, weaponTypeEnum.PEASANT_MACE1M, 7, 9);
    } else if (name === WeaponNameEnum.GRAIN_MACE) {
     return new Weapon(literal, new DiceRoll(1,6),   DamageTypeEnum.BLUNT, 1, false, 0, 0 , '', false, 10, 2, false, weaponTypeEnum.PEASANT_MACE1M, 9, 0);
    }
  } else if (type === weaponTypeEnum.PEASANT_MACE2M) {
    if (name === WeaponNameEnum.MILITARY) {
     return new Weapon(literal, new DiceRoll(2,6,2),  DamageTypeEnum.BLUNT, 2, false, 0, 0 , '', true, 10, 1, false, weaponTypeEnum.PEASANT_MACE2M, 9, 0);
    }
        //                                                                  CAR, Ranged, - - -        ,2H,   PA,MR,SHield
  } else if (type === weaponTypeEnum.HAMMER1H) {
    if (name === WeaponNameEnum.WARHAMMER) {
     return new Weapon(literal, new DiceRoll(1,6,2),  DamageTypeEnum.PIERCING, 2, false, 0, 0 , '', false, 8, 2, false, weaponTypeEnum.PEASANT_MACE2M, 11, 9, new DiceRoll(2,6,4));
    }
  } else if (type === weaponTypeEnum.HAMMER2H) {
    if (name === WeaponNameEnum.GREAT_HAMMER) {
     return new Weapon(literal, new DiceRoll(2,6,2),  DamageTypeEnum.PIERCING, 2.5, false, 0, 0 , '', true, 10, 1, false, weaponTypeEnum.HAMMER2H, 9, 9, new DiceRoll(4,6,4));
    }
  } else if (type === weaponTypeEnum.MACE1H) {
    if (name === WeaponNameEnum.HEAVY_MACE) {
     return new Weapon(literal, new DiceRoll(1,10),  DamageTypeEnum.BLUNT, 2.5, false, 0, 0 , '', false, 10, 2, false, weaponTypeEnum.MACE1H, 13, 7);
    } else if (name === WeaponNameEnum.LIGHT_MACE) {
     return new Weapon(literal, new DiceRoll(1,8),  DamageTypeEnum.BLUNT, 1, false, 0, 0 , '', false, 6, 2, false, weaponTypeEnum.MACE1H, 7, 7);
    } else if (name === WeaponNameEnum.WOOD_CLUB) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.BLUNT, 1, false, 0, 0 , '', false, 4, 2, false, weaponTypeEnum.MACE1H, 0, 7);
    } else if (name === WeaponNameEnum.STAFF) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.BLUNT, 0.5, false, 0, 0 , '', false, 5, 2, false, weaponTypeEnum.MACE1H, 7, 9);
    }
  } else if (type === weaponTypeEnum.MACE2H) {
    if (name === WeaponNameEnum.HEAVY_MACE) {
     return new Weapon(literal, new DiceRoll(1,10),  DamageTypeEnum.BLUNT, 2.5, false, 0, 0 , '', true, 10, 2, false, weaponTypeEnum.MACE2H, 9, 7);
    } else if (name === WeaponNameEnum.WAR_CLUB) {
     return new Weapon(literal, new DiceRoll(1,10,2),  DamageTypeEnum.BLUNT, 2.5, false, 0, 0 , '', true, 12, 1, false, weaponTypeEnum.MACE2H, 11, 7);
    } else if (name === WeaponNameEnum.CROOK) {
     return new Weapon(literal, new DiceRoll(1,8),  DamageTypeEnum.BLUNT, 1.5, false, 0, 0 , '', true, 8, 2, false, weaponTypeEnum.MACE2H, 9, 9);
    } else if (name === WeaponNameEnum.WORK_CLUB) {
     return new Weapon(literal, new DiceRoll(2,6,2),  DamageTypeEnum.BLUNT, 4, false, 0, 0 , '', true, 12, 2, false, weaponTypeEnum.MACE2H, 13, 7);
    } else if (name === WeaponNameEnum.TROLL_CLUB) {
     return new Weapon(literal, new DiceRoll(2,8),  DamageTypeEnum.BLUNT, 5.5, false, 0, 0 , '', true, 16, 1, false, weaponTypeEnum.MACE2H, 17, 7);
    }
  } else if (type === weaponTypeEnum.RAPIER) {
    if (name === WeaponNameEnum.RAPIER) {
     return new Weapon(literal, new DiceRoll(1,6,1),  DamageTypeEnum.PIERCING, 1, false, 0, 0 , '', false, 8, 2, false, weaponTypeEnum.RAPIER, 7, 13, new DiceRoll(3,6,3));
    }
  } else if (type === weaponTypeEnum.SHORT_SWORD) {
    if (name === WeaponNameEnum.GLADIUS) {
     return new Weapon(literal, new DiceRoll(1,6,1),  DamageTypeEnum.PIERCING, 1, false, 0, 0 , '', false, 10, 2, false, weaponTypeEnum.SHORT_SWORD, 0, 0, new DiceRoll(2,6,2));
    } else if (name === WeaponNameEnum.KUKRI) {
     return new Weapon(literal, new DiceRoll(1,4,3),  DamageTypeEnum.SLASHING, 0.5, false, 0, 0 , '', false, 8, 3, false, weaponTypeEnum.SHORT_SWORD, 0, 11);
    }
  } else if (type === weaponTypeEnum.SHIELD) {
    if (name === WeaponNameEnum.BUCKER) {
     return new Weapon(literal, new DiceRoll(1,4),  DamageTypeEnum.BLUNT, 1, false, 0, 0 , '', false, 8, 3, true, weaponTypeEnum.SHIELD, 0, 9);
    } else if (name === WeaponNameEnum.HERALD || name === WeaponNameEnum.DIANE) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.BLUNT, 3, false, 0, 0 , '', false, 12, 3, true, weaponTypeEnum.SHIELD, 9, 0);
    } else if (name === WeaponNameEnum.LARGE_RECTANGULAR) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.BLUNT, 7, false, 0, 0 , '', false, 18, 3, true, weaponTypeEnum.SHIELD, 12, 0);
    } else if (name === WeaponNameEnum.COMMET) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.BLUNT, 5, false, 0, 0 , '', false, 16, 3, true, weaponTypeEnum.SHIELD, 11, 0);
    }
  } else if (type === weaponTypeEnum.SPEAR1H) {
    if (name === WeaponNameEnum.PILUM) {
     return new Weapon(literal, new DiceRoll(1,6,1),  DamageTypeEnum.PIERCING, 2, false, 0, 0 , '', false, 10, 2, false, weaponTypeEnum.SPEAR1H, 9, 7, new DiceRoll(2,6,2));
    } else if (name === WeaponNameEnum.JABELIN) {
     return new Weapon(literal, new DiceRoll(1,6,1),  DamageTypeEnum.PIERCING, 2, false, 0, 0 , '', false, 8, 2, false, weaponTypeEnum.SPEAR1H, 7, 7, new DiceRoll(2,6,2));
    } else if (name === WeaponNameEnum.CABALRY_SPEAR) {
     return new Weapon(literal, new DiceRoll(1,10,1),  DamageTypeEnum.PIERCING, 3.5, false, 0, 0 , '', false, 10, 0, false, weaponTypeEnum.SPEAR1H, 7, 7, new DiceRoll(2,10,2));
    } else if (name === WeaponNameEnum.SHORT_SPEAR) {
     return new Weapon(literal, new DiceRoll(1,8,1),  DamageTypeEnum.PIERCING, 2, false, 0, 0 , '', false, 10, 2, false, weaponTypeEnum.SPEAR1H, 7, 7, new DiceRoll(2,8,2));
    }
  } else if (type === weaponTypeEnum.SPEAR2H) {
    if (name === WeaponNameEnum.SHORT_SPEAR) {
     return new Weapon(literal, new DiceRoll(1,8,1),  DamageTypeEnum.PIERCING, 2, false, 0, 0 , '', true, 10, 2, false, weaponTypeEnum.SPEAR2H, 0, 7, new DiceRoll(2,8,2));
    } else if (name === WeaponNameEnum.LONG_SPEAR) {
     return new Weapon(literal, new DiceRoll(1,10,1),  DamageTypeEnum.PIERCING, 2, false, 0, 0 , '', true, 10, 1, false, weaponTypeEnum.SPEAR2H, 9, 7, new DiceRoll(2,10,2));
    } else if (name === WeaponNameEnum.NAGINATA) {
     return new Weapon(literal, new DiceRoll(2,6,2),  DamageTypeEnum.PIERCING, 2, false, 0, 0 , '', true, 10, 1, false, weaponTypeEnum.SPEAR2H, 9, 7);
    } else if (name === WeaponNameEnum.PIQUE) {
     return new Weapon(literal, new DiceRoll(2,6,2),  DamageTypeEnum.PIERCING, 3.5, false, 0, 0 , '', true, 12, 0, false, weaponTypeEnum.SPEAR2H, 11, 7, new DiceRoll(4,6,4));
    }
  } else if (type === weaponTypeEnum.SWORD1H) {
    if (name === WeaponNameEnum.BASTARD_SWORD) {
     return new Weapon(literal, new DiceRoll(1,10,1),  DamageTypeEnum.SLASHING, 2, false, 0, 0 , '', false, 12, 2, false, weaponTypeEnum.SWORD1H, 13, 9);
    } else if (name === WeaponNameEnum.BROAD_SWORD) {
     return new Weapon(literal, new DiceRoll(1,8,1),  DamageTypeEnum.PIERCING, 1.5, false, 0, 0 , '', false, 10, 2, false, weaponTypeEnum.SWORD1H, 9, 7, new DiceRoll(2,8,2));
    } else if (name === WeaponNameEnum.SCIMITAR) {
     return new Weapon(literal, new DiceRoll(1,6,2),  DamageTypeEnum.PIERCING, 1.5, false, 0, 0 , '', false, 10, 2, false, weaponTypeEnum.SWORD1H, 7, 11, new DiceRoll(2,6,4));
    }
  } else if (type === weaponTypeEnum.SWORD2H) {
    if (name === WeaponNameEnum.BASTARD_SWORD) {
     return new Weapon(literal, new DiceRoll(1,10,1),  DamageTypeEnum.SLASHING, 2, false, 0, 0 , '', true, 12, 2, false, weaponTypeEnum.SWORD2H, 9, 9);
    } else if (name === WeaponNameEnum.DOUBLE_FISTED_SWORD) {
     return new Weapon(literal, new DiceRoll(2,8,1),  DamageTypeEnum.SLASHING, 3.5, false, 0, 0 , '', true, 12, 1, false, weaponTypeEnum.SWORD2H, 11, 13);
    }
  } else if (type === weaponTypeEnum.TOOL_HOE) {
    if (name === WeaponNameEnum.HOE) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.SLASHING, 2, false, 0, 0 , '', true, 8, 1, false, weaponTypeEnum.TOOL_HOE, 7, 7);
    }
  } else if (type === weaponTypeEnum.TOOL_SCYTHE) {
    if (name === WeaponNameEnum.SCYTHE) {
     return new Weapon(literal, new DiceRoll(2,6),  DamageTypeEnum.SLASHING, 2.5, false, 0, 0 , '', false, 8, 1, false, weaponTypeEnum.TOOL_SCYTHE, 11, 9);
    }
  } else if (type === weaponTypeEnum.TOOL_SICKLE) {
    if (name === WeaponNameEnum.SICKLE) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.SLASHING, 2.5, false, 0, 0 , '', false, 6, 3, false, weaponTypeEnum.TOOL_SICKLE, 0, 0);
    }
  } else if (type === weaponTypeEnum.TOOL_SHOVEL) {
    if (name === WeaponNameEnum.SHOVEL) {
     return new Weapon(literal, new DiceRoll(1,6,2),  DamageTypeEnum.SLASHING, 1.5, false, 0, 0 , '', true, 8, 2, false, weaponTypeEnum.TOOL_SHOVEL, 7, 7);
    }
  } else if (type === weaponTypeEnum.KICK) {
    if (name === WeaponNameEnum.KICK) {
     const weapon = new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.BLUNT, 0, false, 0, 0 , '', false, 3, 3, false, weaponTypeEnum.KICK, 0, 0);
     weapon.visible = false;
     return weapon;    }
  } else if (type === weaponTypeEnum.BRAWL) {
    if (name === WeaponNameEnum.BRAWL) {
    const weapon =  new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.BLUNT, 0, false, 0, 0 , '', false, 3, 3, false, weaponTypeEnum.BRAWL, 0, 0);
     weapon.visible = false;
     return weapon;    }
  } else if (type === weaponTypeEnum.HORN) {
    if (name === WeaponNameEnum.HORN) {
    const weapon =  new Weapon(literal, new DiceRoll(1,4),  DamageTypeEnum.BLUNT, 0, false, 0, 0 , '', false, 3, 3, false, weaponTypeEnum.HORN, 0, 0);
     weapon.visible = false;
     return weapon;    }
  } else if (type === weaponTypeEnum.SHORT_BOW) {
    if (name === WeaponNameEnum.SHORT_BOW) {
     return new Weapon(literal, new DiceRoll(1,6,1),  DamageTypeEnum.PIERCING, 0.5, true, 90, 120 , '1/MR', true, 0, 5, false, weaponTypeEnum.SHORT_BOW, 9, 9, new DiceRoll(2,6,2));
    }
  } else if (type === weaponTypeEnum.COMPOSITE_BOW) {
    if (name === WeaponNameEnum.COMPOSITE_BOW) {
     return new Weapon(literal, new DiceRoll(1,8,1),  DamageTypeEnum.PIERCING, 0.5, true, 120, 225 , '1/MR', true, 0, 7, false, weaponTypeEnum.COMPOSITE_BOW, 13, 9, new DiceRoll(2,8,2));
    }
  } else if (type === weaponTypeEnum.LONGBOW) {
    if (name === WeaponNameEnum.LONGBOW) {
     return new Weapon(literal, new DiceRoll(1,8,1),  DamageTypeEnum.PIERCING, 0.5, true, 90, 275 , '1/MR', true, 0, 6, false, weaponTypeEnum.LONGBOW, 11, 9, new DiceRoll(2,8,2));
    }
  } else if (type === weaponTypeEnum.ATLATL) {
    //ATLATL mus be used with jabelins
    if (name === WeaponNameEnum.ATLATL) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.PIERCING, 0.5, true, 10, 20 , '1/AC', true, 0, 6, false, weaponTypeEnum.ATLATL, 7, 9);
    }
  } else if (type === weaponTypeEnum.HEAVY_CROSSBOW) {
    if (name === WeaponNameEnum.HEAVY_CROSSBOW) {
     return new Weapon(literal, new DiceRoll(2,6,2),  DamageTypeEnum.PIERCING, 8, true, 55, 300 , '1/3AC', true, 0, 10, false, weaponTypeEnum.HEAVY_CROSSBOW, 13, 7, new DiceRoll(4,6,4));
    }
  } else if (type === weaponTypeEnum.LIGHT_CROSSBOW) {
    if (name === WeaponNameEnum.LIGHT_CROSSBOW) {
     return new Weapon(literal, new DiceRoll(1,6,2),  DamageTypeEnum.PIERCING, 3.4, true, 40, 225 , '1/3AC', true, 0, 6, false, weaponTypeEnum.LIGHT_CROSSBOW, 9, 7, new DiceRoll(2,6,4));
    }
  } else if (type === weaponTypeEnum.MEDIUM_CROSSBOW) {
    if (name === WeaponNameEnum.MEDIUM_CROSSBOW) {
     return new Weapon(literal, new DiceRoll(2,4,2),  DamageTypeEnum.PIERCING, 4.8, true, 50, 270 , '1/2AC', true, 0, 8, false, weaponTypeEnum.MEDIUM_CROSSBOW, 11, 7, new DiceRoll(4,4,4));
    }
  } else if (type === weaponTypeEnum.REPEATING_CROSSBOW) {
    if (name === WeaponNameEnum.REPEATING_CROSSBOW) {
     return new Weapon(literal, new DiceRoll(1,6,2),  DamageTypeEnum.PIERCING, 3.2, true, 60, 170 , '1/MR', true, 0, 6, false, weaponTypeEnum.REPEATING_CROSSBOW, 9, 7, new DiceRoll(2,6,4));
    }
  } else if (type === weaponTypeEnum.ROCK_LAUNCHER) {
    if (name === WeaponNameEnum.ROCK_LAUNCHER) {
     return new Weapon(literal, new DiceRoll(1,6,2),  DamageTypeEnum.PIERCING, 3.4, true, 60, 170 , '1/AC', true, 0, 6, false, weaponTypeEnum.ROCK_LAUNCHER, 11, 7, new DiceRoll(2,6,4));
    }
  } else if (type === weaponTypeEnum.BLOWGUN) {
    if (name === WeaponNameEnum.BLOWGUN) {
     return new Weapon(literal, new DiceRoll(1,3),  DamageTypeEnum.PIERCING, 0.5, true, 30, 30 , '1/AC', true, 0, 4, false, weaponTypeEnum.BLOWGUN, 0, 11, new DiceRoll(2,3));
    }
  } else if (type === weaponTypeEnum.SLING) {
    if (name === WeaponNameEnum.SLING) {
     return new Weapon(literal, new DiceRoll(1,8),  DamageTypeEnum.PIERCING, 0.1, true, 100, 100 , '1/AC', true, 0, 0, false, weaponTypeEnum.SLING, 0, 11, new DiceRoll(2,8));
    }
  } else if (type === weaponTypeEnum.CROOK_SLING) {
    if (name === WeaponNameEnum.CROOK_SLING) {
     return new Weapon(literal, new DiceRoll(1,10),  DamageTypeEnum.PIERCING, 0.5, true, 120, 120 , '1/AC', true, 0, 10, false, weaponTypeEnum.CROOK_SLING, 9, 11, new DiceRoll(2,10));
    }
  } else if (type === weaponTypeEnum.JABELIN) {
    if (name === WeaponNameEnum.JABELIN) {
     return new Weapon(literal, new DiceRoll(1,8),  DamageTypeEnum.PIERCING, 1.5, true, 20, 50 , '1/MR', true, 0, 8, false, weaponTypeEnum.JABELIN, 9, 9, new DiceRoll(2,8));
    }
  } else if (type === weaponTypeEnum.THROWING_AXE) {
    if (name === WeaponNameEnum.THROWING_AXE) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.PIERCING, 0.5, true, 20, 20 , '1/MR', true, 0, 6, false, weaponTypeEnum.THROWING_AXE, 9, 11);
    }
  } else if (type === weaponTypeEnum.THROWING_KNIFE) {
    if (name === WeaponNameEnum.THROWING_KNIFE) {
     return new Weapon(literal, new DiceRoll(1,4),  DamageTypeEnum.PIERCING, 0.2, true, 20, 20 , '1/MR', true, 0, 4, false, weaponTypeEnum.THROWING_KNIFE, 0, 11, new DiceRoll(2,4));
    }
  } else if (type === weaponTypeEnum.THROWING_ROCK) {
    if (name === WeaponNameEnum.THROWING_STONE) {
     return new Weapon(literal, new DiceRoll(1,3),  DamageTypeEnum.PIERCING, 0.5, true, 20, 20 , '1/MR', true, 0, 0, false, weaponTypeEnum.THROWING_ROCK, 0, 0, new DiceRoll(2,3));
    }
  } else if (type === weaponTypeEnum.BOLAS) {
    if (name === WeaponNameEnum.BOLAS) {
     return new Weapon(literal, new DiceRoll(1,4),  DamageTypeEnum.PIERCING, 3, true, 15, 25 , '1/AC', true, 0, 0, false, weaponTypeEnum.BOLAS, 9, 13);
    }
  } else if (type === weaponTypeEnum.WAR_BOOMERANG) {
    if (name === WeaponNameEnum.WAR_BOOMERANG) {
     return new Weapon(literal, new DiceRoll(1,8),  DamageTypeEnum.PIERCING, 1, true, 30, 50 , '1/AC', true, 0, 6, false, weaponTypeEnum.WAR_BOOMERANG, 13, 9);
    }
  } else if (type === weaponTypeEnum.HUNTING_BOOMERANG) {
    if (name === WeaponNameEnum.HUNTING_BOOMERANG) {
     return new Weapon(literal, new DiceRoll(1,4),  DamageTypeEnum.PIERCING, 1, true, 30, 50 , '1/MR', true, 0, 3, false, weaponTypeEnum.HUNTING_BOOMERANG, 9, 11);
    }
  } else if (type === weaponTypeEnum.DART) {
    if (name === WeaponNameEnum.DART) {
     return new Weapon(literal, new DiceRoll(1,6),  DamageTypeEnum.PIERCING, 0.5, true, 20, 30 , '1/MR', true, 0, 4, false, weaponTypeEnum.DART, 0, 9, new DiceRoll(2,6));
    }
  } else if (type === weaponTypeEnum.SHURIKEN) {
    if (name === WeaponNameEnum.SHURIKEN) {
     return new Weapon(literal, new DiceRoll(1,3),  DamageTypeEnum.PIERCING, 0.1, true, 20, 30 , '1/MR', true, 0, 4, false, weaponTypeEnum.SHURIKEN, 0, 13, new DiceRoll(2,3));
    }
  } else if (type === weaponTypeEnum.ROPE_LACE) {
    if (name === WeaponNameEnum.ROPE_LACE) {
     return new Weapon(literal, new DiceRoll(0,0),  DamageTypeEnum.PIERCING, 1, true, 10, 10 , '1/5AC', true, 0, 0, false, weaponTypeEnum.ROPE_LACE, 9, 13);
    }
  } else if (type === weaponTypeEnum.POLE_LACE) {
    if (name === WeaponNameEnum.POLE_LACE) {
     return new Weapon(literal, new DiceRoll(0,0),  DamageTypeEnum.PIERCING, 3, true, 3, 3 , '1/AC', true, 0, 4, false, weaponTypeEnum.POLE_LACE, 9, 9);
    }
  } else if (type === weaponTypeEnum.WHIP) {
    if (name === WeaponNameEnum.WHIP) {
     return new Weapon(literal, new DiceRoll(1,4),  DamageTypeEnum.PIERCING, 3, true, 5, 5 , '1/AC', true, 0, 6, false, weaponTypeEnum.WHIP, 9, 9);
    }
  }
  return new Weapon('No weapon', new DiceRoll(0,0),  DamageTypeEnum.PIERCING, 0, true, 0, 0 , '', true, 0, 0, false, weaponTypeEnum.FIST, 0, 0);
}

export const getWeaponTypeByName = (name: string): weaponType[] => {
  if (name === WeaponNameEnum.FIST) {
    return [weaponTypeEnum.FIST];
  } else if (name === WeaponNameEnum.KICK) {
    return [weaponTypeEnum.KICK];
  } else if (name === WeaponNameEnum.CLAW) {
    return [weaponTypeEnum.CLAW];
  } else if (name === WeaponNameEnum.HORN) {
    return [weaponTypeEnum.HORN];
  } else if (name === WeaponNameEnum.COMBAT_AXE) {
    return [weaponTypeEnum.AXE1H, weaponTypeEnum.AXE2H];
  } else if (name === WeaponNameEnum.HAND_AXE) {
    return [weaponTypeEnum.AXE1H];
  } else if (name === WeaponNameEnum.GREAT_AXE) {
    return [weaponTypeEnum.AXE2H];
  } else if (name === WeaponNameEnum.DAGGER) {
    return [weaponTypeEnum.DAGGER];
  } else if (name === WeaponNameEnum.CHAIN_AND_BALL) {
    return [weaponTypeEnum.PEASANT_MACE1M];
  } else if (name === WeaponNameEnum.TRIPPLE_CHAIN) {
    return [weaponTypeEnum.PEASANT_MACE1M];
  } else if (name === WeaponNameEnum.GRAIN_MACE) {
    return [weaponTypeEnum.PEASANT_MACE1M];
  } else if (name === WeaponNameEnum.MILITARY) {
    return [weaponTypeEnum.PEASANT_MACE2M];
  } else if (name === WeaponNameEnum.WARHAMMER) {
    return [weaponTypeEnum.HAMMER2H];
  } else if (name === WeaponNameEnum.HEAVY_MACE) {
    return [weaponTypeEnum.MACE1H, weaponTypeEnum.MACE2H];
  } else if (name === WeaponNameEnum.LIGHT_MACE) {
    return [weaponTypeEnum.MACE1H];
  } else if (name === WeaponNameEnum.WOOD_CLUB) {
    return [weaponTypeEnum.MACE1H];
  } else if (name === WeaponNameEnum.STAFF) {
    return [weaponTypeEnum.MACE1H];
  } else if (name === WeaponNameEnum.CROOK) {
    return [weaponTypeEnum.MACE2H];
  } else if (name === WeaponNameEnum.WAR_CLUB) {
    return [weaponTypeEnum.MACE2H];
  } else if (name === WeaponNameEnum.WORK_CLUB) {
    return [weaponTypeEnum.MACE2H];
  } else if (name === WeaponNameEnum.TROLL_CLUB) {
    return [weaponTypeEnum.MACE2H];
  } else if (name === WeaponNameEnum.RAPIER) {
    return [weaponTypeEnum.RAPIER];
  } else if (name === WeaponNameEnum.GLADIUS) {
    return [weaponTypeEnum.SHORT_SWORD];
  } else if (name === WeaponNameEnum.KUKRI) {
    return [weaponTypeEnum.SHORT_SWORD];
  } else if (name === WeaponNameEnum.BUCKER) {
    return [weaponTypeEnum.SHIELD];
  } else if (name === WeaponNameEnum.DIANE) {
    return [weaponTypeEnum.SHIELD];
  } else if (name === WeaponNameEnum.HERALD) {
    return [weaponTypeEnum.SHIELD];
  } else if (name === WeaponNameEnum.LARGE_RECTANGULAR) {
    return [weaponTypeEnum.SHIELD];
  } else if (name === WeaponNameEnum.ROUND_SHIELD) {
    return [weaponTypeEnum.SHIELD];
  } else if (name === WeaponNameEnum.COMMET) {
    return [weaponTypeEnum.SHIELD];
  } else if (name === WeaponNameEnum.JABELIN) {
    return [weaponTypeEnum.JABELIN, weaponTypeEnum.SPEAR1H];
  } else if (name === WeaponNameEnum.CABALRY_SPEAR) {
    return [weaponTypeEnum.SPEAR1H];
  } else if (name === WeaponNameEnum.SHORT_SPEAR) {
    return [weaponTypeEnum.SPEAR1H, weaponTypeEnum.SPEAR2H];
  } else if (name === WeaponNameEnum.PILUM) {
    return [weaponTypeEnum.SPEAR1H];
  } else if (name === WeaponNameEnum.LONG_SPEAR) {
    return [weaponTypeEnum.SPEAR2H];
  } else if (name === WeaponNameEnum.NAGINATA) {
    return [weaponTypeEnum.SPEAR2H];
  } else if (name === WeaponNameEnum.PIQUE) {
    return [weaponTypeEnum.SPEAR2H];
  } else if (name === WeaponNameEnum.BASTARD_SWORD) {
    return [weaponTypeEnum.SWORD1H, weaponTypeEnum.SWORD2H];
  } else if (name === WeaponNameEnum.BROAD_SWORD) {
    return [weaponTypeEnum.SWORD1H];
  } else if (name === WeaponNameEnum.SCIMITAR) {
    return [weaponTypeEnum.SWORD1H];
  } else if (name === WeaponNameEnum.DOUBLE_FISTED_SWORD) {
    return [weaponTypeEnum.SWORD2H];
  } else if (name === WeaponNameEnum.HOE) {
    return [weaponTypeEnum.TOOL_HOE];
  } else if (name === WeaponNameEnum.SICKLE) {
    return [weaponTypeEnum.TOOL_SICKLE];
  } else if (name === WeaponNameEnum.SCYTHE) {
    return [weaponTypeEnum.TOOL_SCYTHE];
  } else if (name === WeaponNameEnum.SHOVEL) {
    return [weaponTypeEnum.TOOL_SHOVEL];
  } else if (name === WeaponNameEnum.SHORT_BOW) {
    return [weaponTypeEnum.SHORT_BOW];
  } else if (name === WeaponNameEnum.COMPOSITE_BOW) {
    return [weaponTypeEnum.COMPOSITE_BOW];
  } else if (name === WeaponNameEnum.ATLATL) {
    return [weaponTypeEnum.ATLATL];
  } else if (name === WeaponNameEnum.LONGBOW) {
    return [weaponTypeEnum.LONGBOW];
  } else if (name === WeaponNameEnum.HEAVY_CROSSBOW) {
    return [weaponTypeEnum.HEAVY_CROSSBOW];
  } else if (name === WeaponNameEnum.MEDIUM_CROSSBOW) {
    return [weaponTypeEnum.MEDIUM_CROSSBOW];
  } else if (name === WeaponNameEnum.LIGHT_CROSSBOW) {
    return [weaponTypeEnum.LIGHT_CROSSBOW];
  } else if (name === WeaponNameEnum.REPEATING_CROSSBOW) {
    return [weaponTypeEnum.REPEATING_CROSSBOW];
  } else if (name === WeaponNameEnum.ROCK_LAUNCHER) {
    return [weaponTypeEnum.ROCK_LAUNCHER];
  } else if (name === WeaponNameEnum.BLOWGUN) {
    return [weaponTypeEnum.BLOWGUN];
  } else if (name === WeaponNameEnum.SLING) {
    return [weaponTypeEnum.SLING];
  } else if (name === WeaponNameEnum.CROOK_SLING) {
    return [weaponTypeEnum.CROOK_SLING];
  } else if (name === WeaponNameEnum.THROWING_AXE) {
    return [weaponTypeEnum.THROWING_AXE];
  } else if (name === WeaponNameEnum.THROWING_KNIFE) {
    return [weaponTypeEnum.THROWING_KNIFE];
  } else if (name === WeaponNameEnum.THROWING_STONE) {
    return [weaponTypeEnum.THROWING_ROCK];
  } else if (name === WeaponNameEnum.BOLAS) {
    return [weaponTypeEnum.BOLAS];
  } else if (name === WeaponNameEnum.WAR_BOOMERANG) {
    return [weaponTypeEnum.WAR_BOOMERANG];
  } else if (name === WeaponNameEnum.HUNTING_BOOMERANG) {
    return [weaponTypeEnum.HUNTING_BOOMERANG];
  } else if (name === WeaponNameEnum.DART) {
    return [weaponTypeEnum.DART];
  } else if (name === WeaponNameEnum.SHURIKEN) {
    return [weaponTypeEnum.SHURIKEN];
  } else if (name === WeaponNameEnum.POLE_LACE) {
    return [weaponTypeEnum.POLE_LACE];
  } else if (name === WeaponNameEnum.ROPE_LACE) {
    return [weaponTypeEnum.ROPE_LACE];
  } else if (name === WeaponNameEnum.WHIP) {
    return [weaponTypeEnum.WHIP];
  }
    //TODO Undefined weapon type
    return [weaponTypeEnum.WHIP];

}
