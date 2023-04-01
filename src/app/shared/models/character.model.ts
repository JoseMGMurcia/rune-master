import { getUniqueID } from "../controllers/character-creation.controller";

export class Character {
  public id = '';
  public name = '';
  public player = '';
  public pnj = true;
  public race = '';
  public sex = '';
  public age = 0;
  public height = 0;
  public weight = 0;
  public description = '';
  public characteristics : Characteristics = new Characteristics();
  public skills: Skill[] = [];
  public personalityTraits: PersonalityTrait[] = [];
  public culture: cultureType = cultureTypeEnum.PRIMITIVE;
  public profesion = '';
  public bornIn = '';
  public country = '';
  public family = '';
  public religions: CultMember[] = [];
  public notes: string[] = [];
  public spells: spell[] = [];
  public movement = 3;
  public markedPOW = false;

  public equipment: Equipment[] = [];
  public weapons: Weapon[] = [];
  public armor: Armor[] = [];
  public locations: Location[] = [];

  public powers: string[] = [];
  public bonusHP = 0;
  public bonusAP = 0;
  public bonugMP = 0;
  public bonusFP = 0;
  public sideKidIds: string[] = [];
  public creationDate = new Date();
  public lastUpdate = new Date();
  public alive = true;
  public favorite = false;

  constructor(name: string, player: string = '') {
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
  public value = 0;
  public initialValue = 0;
  public bonus = 0;
  public notInrace = false;

  constructor(value: number, initialValue: number = 0) {
    this.value = value;
    this.initialValue = initialValue ? initialValue : value;
  }
}

export class skills {
  public COMUNICATION: Skill[] = [];
  public AGILITY: Skill[] = [];
  public MANIPULATION: Skill[] = [];
  public STEALTH: Skill[] = [];
  public KNOWLEDGE: Skill[] = [];
  public AWARENESS: Skill[] = [];
  public MAGICAL: Skill[] = [];
  public ATTACK: Skill[] = [];
  public DEFENSE: Skill[] = [];
  public OTHER: Skill[] = [];
}


export class Skill {
  public name = '';
  public speciality = '';
  public value = 0;
  public modifier = ''; //ie CARx5
  public markable = false;
  public marked = false;

  constructor(name: string, value: number, speciality: string = '') {
    this.name = name;
    this.value = value;
    this.speciality = speciality;
  }
}

export class PersonalityTrait {
  public name1 = '';
  public name2 = '';
  public value1 = 0;
  public value2 = 0;

  constructor(name1: string, name2: string, value1: number, value2: number) {
    this.name1 = name1;
    this.name2 = name2;
    this.value1 = value1;
    this.value2 = value2;
  }
}

export class spell {
  public name = '';
  public description = '';
  public type: spellType = spellTypeEnum.OTHER;
  public range = '';
  public duration = '';
  public points = 0;
  public pasive = false;
  public ritual = false;
  public ritualSkill = '';
  public reusable = false;
  public stackable = false;
  public memorized = false;
}

export enum spellTypeEnum {
  SPIRITUAL = 'SPIRITUAL',
  SORCERY = 'SORCERY',
  DIVINE = 'DIVINE',
  DRAGON = 'DRAGON',
  KI = 'KI',
  OTHER = 'OTHER'
}

export type spellType =
  spellTypeEnum.SPIRITUAL |
  spellTypeEnum.SORCERY |
  spellTypeEnum.DIVINE |
  spellTypeEnum.DRAGON |
  spellTypeEnum.KI |
  spellTypeEnum.OTHER;


  export class Equipment {
    public name = '';
    public description = '';
    public weight = 0;
    public combatWeight = 0;
    public price = 0;
    public quantity = 0;
    public type: equipmentType = equipmentTypeEnum.OTHER;

    constructor(name: string) {
      this.name = name;
    }
  }

  export enum equipmentTypeEnum {
    WEAPON = 'WEAPON',
    ARMOR = 'ARMOR',
    OTHER = 'OTHER'
  }

  export type equipmentType =
    equipmentTypeEnum.WEAPON |
    equipmentTypeEnum.ARMOR |
    equipmentTypeEnum.OTHER;

  export class Weapon extends Equipment {
    public damage = '';
    public ranged = false;
    public range = 0;
    public twoHanded = false;
    public armorPoints = 0;
    public reactionMoment = 0;
    public shield = false;
    public weaponType: weaponType = weaponTypeEnum.AXE1H;
    public bonusAttack = 0;
    public bonusParry = 0;

    constructor(
      name: string,
      damage: string = '',
      ranged: boolean = false,
      range: number = 0,
      twoHanded: boolean = false,
      armorPoints: number = 0,
      reactionMoment: number = 0,
      shield: boolean = false,
      weaponType: weaponType = weaponTypeEnum.AXE1H
      ) {
        super(name);
        this.damage = damage;
        this.ranged = ranged;
        this.range = range;
        this.twoHanded = twoHanded;
        this.armorPoints = armorPoints;
        this.reactionMoment = reactionMoment;
        this.shield = shield;
        this.weaponType = weaponType;
      }
  }

  export class Armor extends Equipment {
    public armorPoints = 0;
    public location = '';
    public soft = false;
    public natural = false;

    constructor(name: string , armorPoints: number = 0, location: string = '', soft: boolean = false) {
      super(name);
      this.armorPoints = armorPoints;
      this.location = location;
      this.soft = soft;
    }
  }

  export enum weaponTypeEnum {
    AXE1H = 'AXE1H',
    AXE2H = 'AXE2H',
    DAGGER = 'DAGGER',
    PEASANT_MACE1M = 'PEASANT_MACE1M',
    PEASANT_MACE2M = 'PEASANT_MACE2M',
    HAMMER1H = 'HAMMER1H',
    HAMMER2H = 'HAMMER2H',
    CLUB2M = 'CLUB2M',
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
    MACE1H = 'MACE1H',
    MACE2H = 'MACE2H',
    TOOL = 'TOOL',
    ATHAL = 'ATHAL',
    ROCK_LAUNCHER = 'ROCK_LAUNCHER',
    BLOWGUN = 'BLOWGUN',
    BOLAS = 'BOLAS',
    WAR_BOOMERANG = 'WAR_BOOMERANG',
    HUNTING_BOOMERANG = 'HUNTING_BOOMERANG',
    JAVELIN = 'JAVELIN',
    DART = 'DART',
    SHURIKEN = 'SHURIKEN',
    ROPE_LACE = 'ROPE_LACE',
    POLE_LACE = 'POLE_LACE',
    NET = 'NET',
    FLAIL = 'FLAIL',
    OTHER = 'OTHER'
  }

  export type weaponType =
    weaponTypeEnum.AXE1H |
    weaponTypeEnum.AXE2H |
    weaponTypeEnum.DAGGER |
    weaponTypeEnum.PEASANT_MACE1M |
    weaponTypeEnum.PEASANT_MACE2M |
    weaponTypeEnum.HAMMER1H |
    weaponTypeEnum.HAMMER2H |
    weaponTypeEnum.CLUB2M |
    weaponTypeEnum.RAPIER |
    weaponTypeEnum.SHORT_SWORD |
    weaponTypeEnum.SHIELD |
    weaponTypeEnum.SPEAR1H |
    weaponTypeEnum.SPEAR2H |
    weaponTypeEnum.SWORD1H |
    weaponTypeEnum.SWORD2H |
    weaponTypeEnum.SHORT_BOW |
    weaponTypeEnum.LONGBOW |
    weaponTypeEnum.COMPOSITE_BOW |
    weaponTypeEnum.LIGHT_CROSSBOW |
    weaponTypeEnum.MEDIUM_CROSSBOW |
    weaponTypeEnum.HEAVY_CROSSBOW |
    weaponTypeEnum.REPEATING_CROSSBOW |
    weaponTypeEnum.CROOK_SLING |
    weaponTypeEnum.SLING |
    weaponTypeEnum.THROWING_AXE |
    weaponTypeEnum.THROWING_KNIFE |
    weaponTypeEnum.THROWING_ROCK |
    weaponTypeEnum.FIST |
    weaponTypeEnum.MACE1H |
    weaponTypeEnum.MACE2H |
    weaponTypeEnum.TOOL |
    weaponTypeEnum.ATHAL |
    weaponTypeEnum.ROCK_LAUNCHER |
    weaponTypeEnum.BLOWGUN |
    weaponTypeEnum.BOLAS |
    weaponTypeEnum.WAR_BOOMERANG |
    weaponTypeEnum.HUNTING_BOOMERANG |
    weaponTypeEnum.JAVELIN |
    weaponTypeEnum.DART |
    weaponTypeEnum.SHURIKEN |
    weaponTypeEnum.ROPE_LACE |
    weaponTypeEnum.POLE_LACE |
    weaponTypeEnum.NET |
    weaponTypeEnum.FLAIL |
    weaponTypeEnum.OTHER;

export class Location {
  public name = '';
  public hitpointsRatio = 0;
  public armorPoints = 0;
  public bonusHP = 0;
  public equipedArmor: Armor[] = [];
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
  public deity: string = '';
  public memberType: cultMemberType = cultMemberTypeEnum.LAIC;
  public phanteon: string = '';

  constructor(deity: string, memberType: cultMemberType, phanteon: string = '') {
    this.deity = deity;
    this.memberType = memberType;
    this.phanteon = phanteon;
  }
}

