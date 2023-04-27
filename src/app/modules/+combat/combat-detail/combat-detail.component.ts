import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NUMBERS } from 'src/app/shared/constants/number.constants';
import { Character, Location } from 'src/app/shared/models/character.model';
import { CharactersService } from 'src/app/shared/services/character.service';
import { getArmorByLocation, getArmorTypeByLocation, getFP, getHp, getHpByLocation, getMP } from 'src/app/shared/utils/character-calculated.-fields.utils';
import { resetTemporals, setInitialHumanCharacter, setRandomHumanStats } from 'src/app/shared/utils/character-creation.utils';

@Component({
  selector: 'app-combat-detail',
  templateUrl: './combat-detail.component.html',
})
export class CombatDetailComponent {
  @Input() public character: Character = new Character('');
  @Input() public turn= NUMBERS.N_0;

  public swShowLocs = true;

  constructor(
    private translate: TranslateService,
    private characterService: CharactersService,
  ) { }

  public handleHumanice() {
    setInitialHumanCharacter(this.character, this.translate);
  }

  public saveCharacter() {
    this.characterService.updateOrAddCharacter(this.character);
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
    return getFP(this.character);
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
