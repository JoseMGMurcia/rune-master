import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NUMBERS } from 'src/app/shared/constants/number.constants';
import { Character, Location, Skill, Weapon } from 'src/app/shared/models/character.model';
import { DiceRoll } from 'src/app/shared/models/dices.model';
import { CharactersService } from 'src/app/shared/services/character.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { getMRCC, getManMod } from 'src/app/shared/utils/character-calculated.-fields.utils';
import { getAgiMod } from 'src/app/shared/utils/character-calculated.-fields.utils';
import { getArmorByLocation, getArmorTypeByLocation, getCAR, getFP, getHp, getHpByLocation, getMP } from 'src/app/shared/utils/character-calculated.-fields.utils';
import { resetTemporals, setInitialHumanCharacter, setRandomHumanStats } from 'src/app/shared/utils/character-creation.utils';

@Component({
  selector: 'app-combat-detail',
  templateUrl: './combat-detail.component.html',
})
export class CombatDetailComponent {
  @Input() public character: Character = new Character('');
  @Input() public turn= NUMBERS.N_0;

  @Output() swichCharacter = new EventEmitter<number>();

  public swShowLocs = true;
  public swShowUtils = false;
  public swCombat = false;

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

  public getTAttSkill(pj: Character, skillName: string): string {
    const skill = pj.skills.ATTACK.find(s => s.weaponType === skillName);
    const value = (skill?.value || NUMBERS.N_0) + getManMod(pj);
    return value.toString();
  }

  public getTDefSkill(pj: Character, skillName: string): string {
    const skill = pj.skills.DEFENSE.find(s => s.weaponType === skillName);
    const value = (skill?.value || NUMBERS.N_0) + getAgiMod(pj);
    return value.toString();
  }

  public getLitsLineClass(index:  number): string {
    return index % 2 === 0 ? '' : 'listLine-card-even';
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

  public setRandomHumanStats() {
    setRandomHumanStats(this.character);
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
    return getFP(this.character) - getCAR(this.character);
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
}
