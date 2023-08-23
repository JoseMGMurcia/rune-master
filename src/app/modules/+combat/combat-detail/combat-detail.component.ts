import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NUMBERS } from 'src/app/shared/constants/number.constants';
import { Characteristic, Results, Spell } from 'src/app/shared/models/character.model';
import { Character, Location, Weapon } from 'src/app/shared/models/character.model';
import { DiceRoll } from 'src/app/shared/models/dices.model';
import { RaceTypeEnum } from 'src/app/shared/models/races.model';
import { CharactersService } from 'src/app/shared/services/character.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { getDMGMod, getDivinePercentage, getMRCC, getMRDES, getMRSIZ, getManMod, getRangedMR, getSpiritualPercentage } from 'src/app/shared/utils/character-calculated.-fields.utils';
import { getAgiMod } from 'src/app/shared/utils/character-calculated.-fields.utils';
import { getArmorByLocation, getArmorTypeByLocation, getCAR, getFP, getHp, getHpByLocation, getMP } from 'src/app/shared/utils/character-calculated.-fields.utils';
import { resetTemporals } from 'src/app/shared/utils/character-creation.utils';
import { getFumbleTarget, getTotal } from 'src/app/shared/utils/dices.utils';
import { cutDicesRolls } from 'src/app/shared/utils/message.utils';
import { setRandomAgimoriStats, setRandomBrooStats, setRandomDragonStats, setRandomDuckStats, setRandomHumanStats, setRandomMorocathStats, setRandomNewLingStats, setRandomTuskRiderStats } from 'src/app/shared/utils/races.utils';

@Component({
  selector: 'app-combat-detail',
  templateUrl: './combat-detail.component.html',
})
export class CombatDetailComponent {
  @Input() public character: Character = new Character('');
  @Input() public turn= NUMBERS.N_1;

  @Output() swichCharacter = new EventEmitter<number>();
  @Output() removeCharacter = new EventEmitter<Character>();

  constructor(
    private translate: TranslateService,
    private characterService: CharactersService,
    private dialogService: DialogService,
  ) { }

  public handleRace() {
    this.dialogService.openRaceDialog(this.character);
  }

  public saveCharacter() {
    this.characterService.updateOrAddCharacter(this.character);
  }

  public getTAttSkill(pj: Character, weapon: Weapon): number {
    const skill = pj.skills.ATTACK.find(s => s.weaponType === weapon.weaponType);
    const bonus = weapon.increasedIntensity ? weapon.increasedIntensity * NUMBERS.N_5 : NUMBERS.N_0;
    const value = (skill?.value || NUMBERS.N_0) + getManMod(pj) + bonus;
    return value;
  }

  public getTDefSkill(pj: Character, skillName: string): number {
    const skill = pj.skills.DEFENSE.find(s => s.weaponType === skillName);
    const value = (skill?.value || NUMBERS.N_0) + getAgiMod(pj);
    return value;
  }

  public getLitsLineClass(index:  number): string {
    return index % 2 === 0 ? '' : 'listLine-card-even';
  }

  public getNameString(weapon: Weapon): string {
    return `${weapon.name} ${weapon.twoHanded ? this.translate.instant('PJ.2H') : ''}`;
  }

  public addStatMod(stat: Characteristic, value: number): void {
    stat.tempMod += value;
  }

  public rollD100(target: number): void {
    this.character.swShowResults = true;
    this.character.specialSuccess = false;
    this.character.criticalSuccess = false;
    const successLiterals = this.translate.instant('COMMONS.SUCCES_LEVEL');
    const  result = new DiceRoll(NUMBERS.N_1, NUMBERS.N_100).roll();
    if( (result <= Math.ceil(target / NUMBERS.N_20)) || result === NUMBERS.N_1) {
      this.character.criticalSuccess = true;
      this.character.results.combat = `${result} ${successLiterals.CRITICAL}`;
    } else if ( result <= Math.ceil(target / NUMBERS.N_5)) {
      this.character.specialSuccess = true;
      this.character.results.combat = `${result} ${successLiterals.SPECIAL}`;
    } else if ( (result <= target && result <= NUMBERS.N_95) || (result < NUMBERS.N_6)) {
      this.character.results.combat = `${result} ${successLiterals.SUCCESS}`;
    } else if ( result > target && result < getFumbleTarget(target)) {
      this.character.results.combat = `${result} ${successLiterals.FAILURE}`;
    } else {
      this.character.results.combat = `${result} ${successLiterals.FUMBLE}`;
    }
  }

  public quitCharacter() {
    this.dialogService.openEasyDialog(
      this.translate.instant('ACTIONS.REMOVE_CONFIRM', { name: this.character.name }),
      () => {
        this.swichCharacterIndex(- NUMBERS.N_1);
        this.removeCharacter.emit(this.character);
      });
  }

  public rollDamage(weapon: Weapon ): void {
    const rollString = this.character.specialSuccess ? DiceRoll.toString(weapon.specialDamage) : DiceRoll.toString(weapon.damage);
    const sustitutiveRollString = this.character.specialSuccess ? DiceRoll.toString(weapon.sustitutiveSpecialDamage) : DiceRoll.toString(weapon.sustitutiveDamage);

    let  weaponRolls = cutDicesRolls(weapon.useSustitutiveDMG ? sustitutiveRollString :rollString);

    //If critical, maximum damage.
    weaponRolls = this.character.criticalSuccess ? [`${weapon.specialDamage.dice*weapon.specialDamage.sides + weapon.specialDamage.modifier}`] : weaponRolls;
    weaponRolls = this.character.criticalSuccess && weapon.useSustitutiveDMG ? [`${weapon.sustitutiveSpecialDamage.dice*weapon.sustitutiveSpecialDamage.sides + weapon.sustitutiveSpecialDamage.modifier}`] : weaponRolls;

    const dmgModString = DiceRoll.toString(getDMGMod(this.character));
    const result = weapon.ranged ? getTotal(weaponRolls) : getTotal([...weaponRolls, dmgModString]);

    const locNumber = Math.floor(Math.random() * NUMBERS.N_20) + NUMBERS.N_1;
    this.character.results.combat = `${result > NUMBERS.N_0 ? result: NUMBERS.N_0} ${this.translate.instant('COMMONS.IN_LOC_SHORT')} ${locNumber}`;
    this.character.swShowResults = true;
  }

  public clearResult() {
    this.character.swShowResults = false;
    this.character.results.combat = '';
    this.character.criticalSuccess = false;
    this.character.specialSuccess = false;
  }

  public getDMGMod(pj: Character): string {
    return DiceRoll.toString(getDMGMod(pj));
  }

  public getMRDESC(pj: Character): number {
    return getMRDES(pj);
  }

  public getMRSIZ(pj: Character): number {
    return getMRSIZ(pj);
  }

  public getWeaponMR(weapon: Weapon): string {
    return weapon.ranged ? getRangedMR(this.character, weapon) : `${getMRCC(this.character) +  weapon.reactionMoment}`;
  }

  public getWeaoponRollString(weapon: Weapon): string {
    return DiceRoll.toString(weapon.useSustitutiveDMG ? weapon.sustitutiveDamage: weapon.damage);
  }

  public swichCharacterIndex(order: number) {
    this.swichCharacter.emit(order);
  }

  public addNewWeapon() {
    this.dialogService.openWeaponDialog(this.character);
  }

  public addNewArmor() {
    this.dialogService.openArmorDialog(this.character);
  }

  public editStats() {
    this.dialogService.openStatsDialog(this.character);
  }

  public setRandomStats() {
    if(this.character.raceID === RaceTypeEnum.HUMAN ){
      setRandomHumanStats(this.character);
    } else if(this.character.raceID === RaceTypeEnum.MOROCATH ){
      setRandomMorocathStats(this.character);
    } else if(this.character.raceID === RaceTypeEnum.DUCK) {
      setRandomDuckStats(this.character);
    } else if(this.character.raceID === RaceTypeEnum.NEWLING) {
      setRandomNewLingStats(this.character);
    } else if(this.character.raceID === RaceTypeEnum.AGIMORI) {
      setRandomAgimoriStats(this.character);
    } else if(this.character.raceID === RaceTypeEnum.TUSK_RIDER) {
      setRandomTuskRiderStats(this.character);
    } else if(this.character.raceID === RaceTypeEnum.BROO) {
      setRandomBrooStats(this.character);
    } else if(this.character.raceID === RaceTypeEnum.DRAGON) {
      setRandomDragonStats(this.character);
    }
  }

  public resetCharacterTemps() {
    resetTemporals(this.character);
  }

  public addHpMod(mod: number) {
    this.character.tempHPMod += mod;
  }

  public addFpMod(mod: number) {
    this.character.tempFPMod += mod;
  }

  public addMpMod(mod: number) {
    this.character.tempMPMod += mod;
  }

  public addApMod(mod: number) {
    this.character.tempAPMod += mod;
  }

  public addWeaponAP(weapon: Weapon, mod: number) {
    weapon.tempAP += mod;
  }

  public addLocHpMod(mod: number, loc: Location) {
    loc.bonusHP += mod;
    this.character.tempHPMod += mod;
  }

  public getHp(): number {
    return getHp(this.character);
  }

  public getFP(): number {
    return Math.floor(getFP(this.character) - getCAR(this.character) + this.character.tempFPMod - this.turn + NUMBERS.N_1);
  }

  public getInitialFP(): number {
    return Math.floor(getFP(this.character) - getCAR(this.character));
  }

  public getFPAllMod(): number {
    // const fp = this.getFP();
    return this.getFP() < NUMBERS.N_0 ? this.getFP() : NUMBERS.N_0;
  }

  public getMP(): number {
    return getMP(this.character);
  }

  public getHpByLocation(pj: Character, loc: Location ): number {
    return getHpByLocation(pj, loc);
  }

  public getArmorByLocation(pj: Character, loc: Location ): number {
    return getArmorByLocation(pj, loc) + pj.tempAPMod;
  }

  public getArmorTypeByLocation(pj: Character, loc: Location ): string {
    return getArmorTypeByLocation(pj, loc);
  }

  public addPowerWeaopnEffect(weapon: Weapon, intensity: number) {
    weapon.increasedIntensity += intensity;
    weapon.increasedIntensity = weapon.increasedIntensity < NUMBERS.N_0 ? NUMBERS.N_0 : weapon.increasedIntensity
    this.setWeaponDamages(weapon);
  }

  public setSpeedDart(weapon: Weapon, set: boolean) {
    weapon.increasedIntensity = set ? NUMBERS.N_3 : NUMBERS.N_0;
    this.setWeaponDamages(weapon);
  }
  
  public addDullBladeEffect(weapon: Weapon, intensity: number) {
    weapon.dullBladeIntensity += intensity;
    weapon.dullBladeIntensity = weapon.dullBladeIntensity < NUMBERS.N_0 ? NUMBERS.N_0 : weapon.dullBladeIntensity
    this.setWeaponDamages(weapon);
  }

  private setWeaponDamages(weapon: Weapon) {
    weapon.useSustitutiveDMG = weapon.increasedIntensity > NUMBERS.N_0 || weapon.dullBladeIntensity > NUMBERS.N_0;
    weapon.sustitutiveDamage = JSON.parse(JSON.stringify(weapon.damage));
    weapon.sustitutiveDamage.modifier = weapon.damage.modifier + weapon.increasedIntensity - weapon.dullBladeIntensity;
    weapon.sustitutiveSpecialDamage = JSON.parse(JSON.stringify(weapon.specialDamage));
    weapon.sustitutiveSpecialDamage.modifier = weapon.specialDamage.modifier + weapon.increasedIntensity - weapon.dullBladeIntensity;
  }

  public getDodgeLine(pj: Character): string {
    const dodge = this.translate.instant('PJ.SKILL_NAME.AGILITY.DODGE');
    const dodgeSkill = pj.skills.AGILITY.find(s => s.name === dodge);
    const value = dodgeSkill?.value ? dodgeSkill.value : NUMBERS.N_0;

    return ` ${value}% + ${getAgiMod(pj)}%(mod) - ${getCAR(pj)}%(CAR) = `;
  }

  public getDodge(pj: Character): number {
    const dodge = this.translate.instant('PJ.SKILL_NAME.AGILITY.DODGE');
    const dodgeSkill = pj.skills.AGILITY.find(s => s.name === dodge);
    const value = dodgeSkill?.value ? dodgeSkill.value : NUMBERS.N_0;
    return Math.floor(value + getAgiMod(pj) - getCAR(pj) + this.getFPAllMod());
  }

  getActiveText(spell: Spell): string {
    const texts = this.translate.instant('PJ.SPELL_ACTION_TYPE');
    return spell.pasive ? texts.PASSIVE : texts.ACTIVE;
  }

  public addSpell() {
    this.dialogService.openSpellsDialog(this.character);
  }

  public getSpiritualPertent(): number {
    return getSpiritualPercentage(this.character);
  }

  public getSpiritualString(spell: Spell): string {
    const spiritualStack = `-${spell.spiritualPoints}`;
    return `${spell.name}${!spell.stackable ? `(${spell.points})` : spiritualStack }`;
  }

  public rollSpitirualD100(): void {
    const result = Math.floor(Math.random() * NUMBERS.N_100) + NUMBERS.N_1;
    this.character.results.magic.spiritual = `${result}`;
  }

  public getDivinelPertent(): number {
    return getDivinePercentage(this.character);
  }

  public getDivinelString(spell: Spell): string {
    const divinestack = `x${spell.divineStack}`;
    return `${spell.name}${spell.points !== NUMBERS.N_1 ? `(${spell.points})` : '' } ${spell.divineStack > NUMBERS.N_1 ? divinestack : ''}`;
  }

  public rollDivinelD100(): void {
    const result = Math.floor(Math.random() * NUMBERS.N_100) + NUMBERS.N_1;
    this.character.results.magic.divine = `${result}`;
  }

  public rollSorcery1D100(): void {
    const result = Math.floor(Math.random() * NUMBERS.N_100) + NUMBERS.N_1;
    this.character.results.magic.sorcery = `${result}`;
  }

  public rollOtherlD100(): void {
    const result = Math.floor(Math.random() * NUMBERS.N_100) + NUMBERS.N_1;
    this.character.results.magic.other = `${result}`;
  }

  public getWeaponEffectText(weapon: Weapon): string {
    return this.translate.instant(weapon.natural ? 'PJ.WEAPON_POWER_SPELL_BY_TYPE.NATURAL' : `PJ.WEAPON_POWER_SPELL_BY_TYPE.${weapon.damageType}`);
  }

  public setFireBlade(weapon: Weapon, aplyFire: boolean): void {
    weapon.useSustitutiveDMG = aplyFire;
    weapon.increasedIntensity = NUMBERS.N_0;
    if( aplyFire ){
      weapon.sustitutiveDamage = new DiceRoll(NUMBERS.N_3, NUMBERS.N_6);
      weapon.sustitutiveSpecialDamage = new DiceRoll(NUMBERS.N_3, NUMBERS.N_6);
    } else {
      weapon.sustitutiveDamage = JSON.parse(JSON.stringify(weapon.damage));
      weapon.sustitutiveSpecialDamage = JSON.parse(JSON.stringify(weapon.specialDamage));
    }
  }

  
}
