import { NUMBERS } from "../constants/number.constants";
import { getUniqueID } from "../utils/character-creation.utils";
import { DiceRoll } from "./dices.model";

export class Character {
  public id = '';
  public name = '';
  public player = '';
  public pnj = true;
  public race = 'Humano';
  public sex: SexType = SexTypeEnum.U;
  public age = NUMBERS.N_15;
  public height = NUMBERS.N_0;
  public weight = NUMBERS.N_0;
  public description = '';
  public stats : Characteristics = new Characteristics();
  public skills: skills = new skills();
  public personalityTraits: PersonalityTrait[] = [];
  public culture: cultureType = cultureTypeEnum.PRIMITIVE;
  public profesion = '';
  public bornIn = '';
  public country = '';
  public family = '';
  public religions: CultMember[] = [];
  public notes: string[] = [];
  public spells: Spells = new Spells();
  public movement = NUMBERS.N_3;
  public markedPOW = false;

  public equipment: Equipment[] = [];
  public weapons: Weapon[] = [];
  public armor: Armor[] = [];
  public locations: Location[] = [];

  public powers: string[] = [];
  public bonusHP = NUMBERS.N_0;
  public bonusAP = NUMBERS.N_0;
  public bonugMP = NUMBERS.N_0;
  public bonusFP = NUMBERS.N_0;
  public tempHPMod = NUMBERS.N_0;
  public tempAPMod = NUMBERS.N_0;
  public tempFPMod = NUMBERS.N_0;
  public tempMPMod = NUMBERS.N_0;
  public sideKidIds: string[] = [];
  public creationDate = new Date();
  public lastUpdate = new Date();
  public alive = true;
  public favorite = false;

  public specialSuccess = false;
  public criticalSuccess = false;
  public swShowLocs = true;
  public swShowUtils = false;
  public swCombat = false;
  public swShowResults = false;
  public result = '';

  constructor(name: string, player = '') {
    this.id = getUniqueID(name);
    this.name = name;
    this.player = player;
    this.pnj = player ? false : true;
  }
}

export class Characteristics {
  public STR: Characteristic = new Characteristic(0);
  public DEX: Characteristic = new Characteristic(0);
  public CON: Characteristic = new Characteristic(0);
  public INT: Characteristic = new Characteristic(0);
  public SIZ: Characteristic = new Characteristic(0);
  public POW: Characteristic = new Characteristic(0);
  public CHA: Characteristic = new Characteristic(0);
}

export class Characteristic {
  public value = NUMBERS.N_0;
  public initialValue = NUMBERS.N_0;
  public bonus = NUMBERS.N_0;
  public notInrace = false;
  public tempMod = NUMBERS.N_0;

  constructor(value: number, initialValue = NUMBERS.N_0) {
    this.value = value;
    this.initialValue = initialValue ? initialValue : value;
  }
}
export enum SexTypeEnum {
  M = 'M',
  F = 'F',
  U = 'U'
}

export type SexType = 'M' | 'F' | 'U';

export class skills {
  public COMUNICATION: Skill[] = [];
  public AGILITY: Skill[] = [];
  public MANIPULATION: Skill[] = [];
  public STEALTH: Skill[] = [];
  public KNOWLEDGE: Skill[] = [];
  public AWARENESS: Skill[] = [];
  public MAGICAL: Skill[] = [];
  public ATTACK: CombatSkill[] = [];
  public DEFENSE: CombatSkill[] = [];
  public OTHER: Skill[] = [];
}


export class Skill {
  public name = '';
  public speciality = '';
  public value = NUMBERS.N_0;
  public modifier = ''; //ie CARx5
  public markable = false;
  public marked = false;

  constructor(name: string, value: number, speciality = '') {
    this.name = name;
    this.value = value;
    this.speciality = speciality;
  }
}

export class CombatSkill extends Skill {
  public weaponType: WeaponType = WeaponTypeEnum.ATLATL;

  constructor(name: string, value: number, weaponType: WeaponType, speciality = '') {
    super(name, value, speciality);
    this.weaponType = weaponType;
  }
}

export class PersonalityTrait {
  public name1 = '';
  public name2 = '';
  public value1 = NUMBERS.N_0;
  public value2 = NUMBERS.N_0;

  constructor(name1: string, name2: string, value1: number, value2: number) {
    this.name1 = name1;
    this.name2 = name2;
    this.value1 = value1;
    this.value2 = value2;
  }
}

export class Spells {
  public SPIRITUAL: Spell[] = [];
  public SORCERY: Spell[] = [];
  public DIVINE: Spell[] = [];
  public DRAGON: Spell[] = [];
  public KI: Spell[] = [];
  public OTHER: Spell[] = [];
}

export class Spell {
  public name = '';
  public description = '';
  public range = '';
  public duration = '';
  public points = NUMBERS.N_1;
  public divineStack = NUMBERS.N_1;
  public sorcerySkillValue = NUMBERS.N_0;
  public pasive = false;
  public ritual = false;
  public ritualSkill = '';
  public reusable = false;
  public god = '';
  public stackable = false;
  public memorized = false;
  public matrix = false;

  constructor(name: string, points = NUMBERS.N_1, reusable = false, memoriced = true, skill = NUMBERS.N_0) {
    this.name = name;
    this.points = points;
    this.reusable = reusable;
    this.memorized = memoriced;
    this.sorcerySkillValue = skill;
  }
}

  export class Equipment {
    public name = '';
    public description = '';
    public weight = NUMBERS.N_0;
    public combatWeight = NUMBERS.N_0;
    public price = NUMBERS.N_0;
    public quantity = NUMBERS.N_1;
    public inCombat = false;
    public visible = true;

    constructor(name: string) {
      this.name = name;
    }
  }

  export enum DamageTypeEnum {
    SLASHING = 'SLASHING',
    PIERCING = 'PIERCING',
    BLUNT = 'BLUNT'
  }

  export type DamageType =
    DamageTypeEnum.SLASHING |
    DamageTypeEnum.PIERCING |
    DamageTypeEnum.BLUNT;

  export class Weapon extends Equipment {
    public damage: DiceRoll = new DiceRoll(NUMBERS.N_0, NUMBERS.N_0);
    public specialDamage: DiceRoll = new DiceRoll(NUMBERS.N_0, NUMBERS.N_0);
    public damageType: DamageType = DamageTypeEnum.BLUNT;
    public ranged = false;
    public range = NUMBERS.N_0;
    public maxRange = NUMBERS.N_0;
    public fireRate = '';
    public twoHanded = false;
    public armorPoints = NUMBERS.N_0;
    public reactionMoment = NUMBERS.N_0;
    public shield = false;
    public weaponType: WeaponType = WeaponTypeEnum.AXE1H;
    public bonusAttack = NUMBERS.N_0;
    public bonusParry = NUMBERS.N_0;
    public minimumSTR = NUMBERS.N_0;
    public minimumDEX = NUMBERS.N_0;
    public attackBS = NUMBERS.N_5;
    public parryBS = NUMBERS.N_5;

    constructor(
      name: string,
      damage: DiceRoll,
      damageType: DamageType,
      weight: number,
      ranged = false,
      range = NUMBERS.N_0,
      maxRange = NUMBERS.N_0,
      fireRate = '',
      twoHanded = false,
      armorPoints = NUMBERS.N_0,
      reactionMoment = NUMBERS.N_0,
      shield = false,
      weaponType: WeaponType = WeaponTypeEnum.AXE1H,
      minimumSTR = NUMBERS.N_0,
      minimumDEX = NUMBERS.N_0,
      specialDMG = new DiceRoll(NUMBERS.N_0, NUMBERS.N_0),
      attackBS = NUMBERS.N_5,
      parryBS = NUMBERS.N_5
      ) {
        super(name);
        this.damage = damage;
        this.damageType = damageType;
        this.weight = weight;
        this.ranged = ranged;
        this.range = range;
        this.maxRange = maxRange;
        this.fireRate = fireRate;
        this.twoHanded = twoHanded;
        this.armorPoints = armorPoints;
        this.reactionMoment = reactionMoment;
        this.shield = shield;
        this.weaponType = weaponType;
        this.minimumSTR = minimumSTR;
        this.minimumDEX = minimumDEX;
        this.specialDamage = specialDMG;
        this.attackBS = attackBS;
        this.parryBS = parryBS;
    }

  }

  export class Armor extends Equipment {
    public armorPoints = NUMBERS.N_0;
    public locations: string[] = [];
    public soft = false;
    public natural = false;
    public equipped = false;

    constructor(name: string , armorPoints = NUMBERS.N_0, locations: string[] = [], soft = false) {
      super(name);
      this.armorPoints = armorPoints;
      this.locations = locations;
      this.soft = soft;
    }
  }

  export enum WeaponTypeEnum {
    AXE1H = 'AXE1H',
    AXE2H = 'AXE2H',
    DAGGER = 'DAGGER',
    PEASANT_MACE1M = 'PEASANT_MACE1M',
    PEASANT_MACE2M = 'PEASANT_MACE2M',
    HAMMER1H = 'HAMMER1H',
    HAMMER2H = 'HAMMER2H',
    RAPIER = 'RAPIER',
    SHORT_SWORD = 'SHORT_SWORD',
    SHIELD = 'SHIELD',
    SPEAR1H = 'SPEAR1H',
    SPEAR2H = 'SPEAR2H',
    SWORD1H = 'SWORD1H',
    SWORD2H = 'SWORD2H',
    SHORT_BOW = 'SHORT_BOW',
    LONGBOW = 'LONGBOW',
    COMPOSITE_BOW = 'COMPOSITE_BOW',
    LIGHT_CROSSBOW = 'LIGHT_CROSSBOW',
    MEDIUM_CROSSBOW = 'MEDIUM_CROSSBOW',
    HEAVY_CROSSBOW = 'HEAVY_CROSSBOW',
    REPEATING_CROSSBOW = 'REPEATING_CROSSBOW',
    CROOK_SLING = 'CROOK_SLING',
    SLING = 'SLING',
    THROWING_AXE = 'THROWING_AXE',
    THROWING_KNIFE = 'THROWING_KNIFE',
    THROWING_ROCK = 'THROWING_ROCK',
    FIST = 'FIST',
    KICK = 'KICK',
    CLAW = 'CLAW',
    BRAWL = 'BRAWL',
    HORN = 'HORN',
    MACE1H = 'MACE1H',
    MACE2H = 'MACE2H',
    TOOL_HOE = 'TOOL_HOE',
    TOOL_SCYTHE = 'TOOL_SCYTHE',
    TOOL_SICKLE = 'TOOL_SICKLE',
    TOOL_SHOVEL = 'TOOL_SHOVEL',
    ATLATL = 'ATLATL',
    ROCK_LAUNCHER = 'ROCK_LAUNCHER',
    BLOWGUN = 'BLOWGUN',
    BOLAS = 'BOLAS',
    WAR_BOOMERANG = 'WAR_BOOMERANG',
    HUNTING_BOOMERANG = 'HUNTING_BOOMERANG',
    JABELIN = 'JABELIN',
    DART = 'DART',
    SHURIKEN = 'SHURIKEN',
    ROPE_LACE = 'ROPE_LACE',
    POLE_LACE = 'POLE_LACE',
    NET = 'NET',
    WHIP = 'FLAIL',
    OTHER = 'OTHER'
  }

  export type WeaponType =
    WeaponTypeEnum.AXE1H |
    WeaponTypeEnum.AXE2H |
    WeaponTypeEnum.DAGGER |
    WeaponTypeEnum.PEASANT_MACE1M |
    WeaponTypeEnum.PEASANT_MACE2M |
    WeaponTypeEnum.HAMMER1H |
    WeaponTypeEnum.HAMMER2H |
    WeaponTypeEnum.RAPIER |
    WeaponTypeEnum.SHORT_SWORD |
    WeaponTypeEnum.SHIELD |
    WeaponTypeEnum.SPEAR1H |
    WeaponTypeEnum.SPEAR2H |
    WeaponTypeEnum.SWORD1H |
    WeaponTypeEnum.SWORD2H |
    WeaponTypeEnum.SHORT_BOW |
    WeaponTypeEnum.LONGBOW |
    WeaponTypeEnum.COMPOSITE_BOW |
    WeaponTypeEnum.LIGHT_CROSSBOW |
    WeaponTypeEnum.MEDIUM_CROSSBOW |
    WeaponTypeEnum.HEAVY_CROSSBOW |
    WeaponTypeEnum.REPEATING_CROSSBOW |
    WeaponTypeEnum.CROOK_SLING |
    WeaponTypeEnum.SLING |
    WeaponTypeEnum.THROWING_AXE |
    WeaponTypeEnum.THROWING_KNIFE |
    WeaponTypeEnum.THROWING_ROCK |
    WeaponTypeEnum.FIST |
    WeaponTypeEnum.MACE1H |
    WeaponTypeEnum.MACE2H |
    WeaponTypeEnum.ATLATL |
    WeaponTypeEnum.ROCK_LAUNCHER |
    WeaponTypeEnum.BLOWGUN |
    WeaponTypeEnum.BOLAS |
    WeaponTypeEnum.WAR_BOOMERANG |
    WeaponTypeEnum.HUNTING_BOOMERANG |
    WeaponTypeEnum.JABELIN |
    WeaponTypeEnum.DART |
    WeaponTypeEnum.SHURIKEN |
    WeaponTypeEnum.ROPE_LACE |
    WeaponTypeEnum.POLE_LACE |
    WeaponTypeEnum.NET |
    WeaponTypeEnum.WHIP |
    WeaponTypeEnum.OTHER |
    WeaponTypeEnum.KICK |
    WeaponTypeEnum.CLAW |
    WeaponTypeEnum.BRAWL |
    WeaponTypeEnum.HORN |
    WeaponTypeEnum.TOOL_HOE |
    WeaponTypeEnum.TOOL_SCYTHE |
    WeaponTypeEnum.TOOL_SICKLE |
    WeaponTypeEnum.TOOL_SHOVEL;

export enum hitpointsRatioEnum {
  X16 = 0.16,
  X33 = 0.33,
  X40 = 0.40,
  X25 = 0.25
}

export type hitpointsRatioType =
  hitpointsRatioEnum.X33 |
  hitpointsRatioEnum.X40 |
  hitpointsRatioEnum.X25 |
  hitpointsRatioEnum.X16;

export enum armorWeightRatioEnum {
  x1 = 1,
  x2 = 2,
}

export type armorWeightRatioType =
  armorWeightRatioEnum.x1 |
  armorWeightRatioEnum.x2;

export class Location {
  public name = '';
  public hitpointsRatio: hitpointsRatioType = hitpointsRatioEnum.X33;
  public armorWeightRario: armorWeightRatioType = armorWeightRatioEnum.x1;
  public armorPoints = NUMBERS.N_0;
  public bonusAP = NUMBERS.N_0;
  public bonusHP = NUMBERS.N_0;
  public tempHPMod = NUMBERS.N_0;
  public tempAPMod = NUMBERS.N_0;

  constructor(name: string, hitpointsRatio = hitpointsRatioEnum.X33, armorPoints = NUMBERS.N_0, bonusHP = NUMBERS.N_0) {
    this.name = name;
    this.hitpointsRatio = hitpointsRatio;
    this.armorPoints = armorPoints;
    this.bonusHP = bonusHP;
  }
}

export enum cultureTypeEnum {
  PRIMITIVE = 'PRIMITIVE',
  NOMAD = 'NOMAD',
  BARBARIAN = 'BARBARIAN',
  CIVILIZED = 'CIVILIZED'
}

export type cultureType =
  cultureTypeEnum.PRIMITIVE |
  cultureTypeEnum.NOMAD |
  cultureTypeEnum.BARBARIAN |
  cultureTypeEnum.CIVILIZED;

export enum cultMemberTypeEnum {
  LAIC = 'LAIC',
  INITIATE = 'INITIATE',
  ACOLITE = 'ACOLITE',
  PRIEST = 'PRIEST',
  RUNE_LORD = 'RUNE_LORD',
  RUNE_PRIEST = 'RUNE_PRIEST',
  SHAMAN = 'SHAMAN'
}

export type cultMemberType =
  cultMemberTypeEnum.LAIC |
  cultMemberTypeEnum.INITIATE |
  cultMemberTypeEnum.ACOLITE |
  cultMemberTypeEnum.PRIEST |
  cultMemberTypeEnum.RUNE_LORD |
  cultMemberTypeEnum.RUNE_PRIEST |
  cultMemberTypeEnum.SHAMAN;

export class CultMember {
  public deity = '';
  public memberType: cultMemberType = cultMemberTypeEnum.LAIC;
  public phanteon = '';

  constructor(deity: string, memberType: cultMemberType, phanteon = '') {
    this.deity = deity;
    this.memberType = memberType;
    this.phanteon = phanteon;
  }
}

