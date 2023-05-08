import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NUMBERS } from 'src/app/shared/constants/number.constants';
import { Characteristic } from 'src/app/shared/models/character.model';
import { Character, Location, Weapon } from 'src/app/shared/models/character.model';
import { DiceRoll } from 'src/app/shared/models/dices.model';
import { CharactersService } from 'src/app/shared/services/character.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { getDMGMod, getMRCC, getMRDES, getMRSIZ, getManMod } from 'src/app/shared/utils/character-calculated.-fields.utils';
import { getAgiMod } from 'src/app/shared/utils/character-calculated.-fields.utils';
import { getArmorByLocation, getArmorTypeByLocation, getCAR, getFP, getHp, getHpByLocation, getMP } from 'src/app/shared/utils/character-calculated.-fields.utils';
import { resetTemporals, setInitialHumanCharacter, setRandomHumanStats, setRandomMorocathStats } from 'src/app/shared/utils/character-creation.utils';
import { getFumbleTarget, getTotal } from 'src/app/shared/utils/dices.utils';
import { cutDicesRolls } from 'src/app/shared/utils/message.utils';

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

  public handleHumanice() {
    setInitialHumanCharacter(this.character, this.translate);
  }

  public saveCharacter() {
    this.characterService.updateOrAddCharacter(this.character);
  }

  public getTAttSkill(pj: Character, skillName: string): number {
    const skill = pj.skills.ATTACK.find(s => s.weaponType === skillName);
    const value = (skill?.value || NUMBERS.N_0) + getManMod(pj);
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
      this.character.result = `${result} ${successLiterals.CRITICAL}`;
    } else if ( result <= Math.ceil(target / NUMBERS.N_5)) {
      this.character.specialSuccess = true;
      this.character.result = `${result} ${successLiterals.SPECIAL}`;
    } else if ( (result <= target && result <= NUMBERS.N_95) || (result < NUMBERS.N_6)) {
      this.character.result = `${result} ${successLiterals.SUCCESS}`;
    } else if ( result > target && result < getFumbleTarget(target)) {
      this.character.result = `${result} ${successLiterals.FAILURE}`;
    } else {
      this.character.result = `${result} ${successLiterals.FUMBLE}`;
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

    let  weaponRolls = cutDicesRolls(rollString);

    //If critical, maximum damage.
    weaponRolls = this.character.criticalSuccess ? [`${weapon.specialDamage.dice*weapon.specialDamage.sides + weapon.specialDamage.modifier}`] : weaponRolls;

    const dmgModString = DiceRoll.toString(getDMGMod(this.character));
    const result = getTotal([...weaponRolls, dmgModString]);

    const locNumber = Math.floor(Math.random() * NUMBERS.N_20) + NUMBERS.N_1;
    this.character.result = `${result} ${this.translate.instant('COMMONS.IN_LOC_SHORT')} ${locNumber}`;
    this.character.swShowResults = true;
  }

  public clearResult() {
    this.character.swShowResults = false;
    this.character.result = '';
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

  public getWeaponMR(weapon: Weapon): number {
    return getMRCC(this.character) +  weapon.reactionMoment;
  }

  public getWeaoponRollString(weapon: Weapon): string {
    return DiceRoll.toString(weapon.damage);
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

  public setRandomHumanStats() {
    setRandomHumanStats(this.character);
  }

  public setRandomMorocathStats() {
    setRandomMorocathStats(this.character);
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
}
