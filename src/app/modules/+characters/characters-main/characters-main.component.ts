import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil} from 'rxjs';
import { Character, Characteristic, CultMember, SexTypeEnum, Skill, cultMemberTypeEnum, cultureTypeEnum, Spell, Location, Armor, Weapon, WeaponTypeEnum, CombatSkill } from 'src/app/shared/models/character.model';
import { CharactersService } from 'src/app/shared/services/character.service';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { getAgiMod, getArmorByLocation, getArmorTypeByLocation, getCAR, getComMod, getDMGMod, getFP, getFreeINTPoints, getHp, getHpByLocation, getMP, getMRDES, getMRSIZ, getManMod, getWeaponList } from 'src/app/shared/utils/character-calculated.-fields.utils';
import { ICONS } from 'src/app/shared/constants/icon.constants';
import { TranslateService } from '@ngx-translate/core';
import { getSteMod } from 'src/app/shared/utils/character-calculated.-fields.utils';
import { getKnoMod } from 'src/app/shared/utils/character-calculated.-fields.utils';
import { getPerMod } from 'src/app/shared/utils/character-calculated.-fields.utils';
import { getMagMod } from 'src/app/shared/utils/character-calculated.-fields.utils';
import { NUMBERS } from 'src/app/shared/constants/number.constants';
import { DiceRoll } from 'src/app/shared/models/dices.model';
import { WeaponNameEnum, createWeapon } from 'src/app/shared/utils/equip.factory';
import { setInitialHumanCharacter } from 'src/app/shared/utils/races.utils';

@Component({
  selector: 'app-characters-main',
  templateUrl: './characters-main.component.html',
})
export class CharactersMainComponent implements OnInit, OnDestroy{

  public characters: Character[] = [];
  public filteredCharacters: Character[] = [];


  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    public translate: TranslateService,
    private characterService: CharactersService,
    private dialogService: DialogService,
  ) { }

  ngOnInit(): void {
    this.fetch();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public manageFavourite($event: Event, pj: Character) {
    this.preventAcordionExpansion($event);
    pj.favorite = !pj.favorite;
    this.characterService.updateOrAddCharacter(pj);
  }

  public getHP(pj: Character): number {
    return getHp(pj);
  }

  public getMP(pj: Character): number {
    return getMP(pj);
  }

  public getFP(pj: Character): number {
    return getFP(pj) - getCAR(pj);
  }

  public getAgilityMod(pj: Character): string {
    return getAgiMod(pj).toString();
  }

  public getComunicationMod(pj: Character): string {
    return getComMod(pj).toString();
  }

  public getManipulationMod(pj: Character): string {
    return getManMod(pj).toString();
  }

  public getStealthMod(pj: Character): string {
    return getSteMod(pj).toString();
  }

  public getKnowledgeMod(pj: Character): string {
    return getKnoMod(pj).toString();
  }

  public getPerceptionMod(pj: Character): string {
    return getPerMod(pj).toString();
  }

  public getMagicalMod(pj: Character): string {
    return getMagMod(pj).toString();
  }

  public getFreeINTPoints(pj: Character): number {
    return getFreeINTPoints(pj);
  }

  public getMRDESC(pj: Character): number {
    return getMRDES(pj);
  }

  public getMRSIZ(pj: Character): number {
    return getMRSIZ(pj);
  }

  public getHpByLocation(pj: Character, loc: Location ): number {
    return getHpByLocation(pj, loc);
  }

  public getArmorByLocation(pj: Character, loc: Location ): number {
    return getArmorByLocation(pj, loc);
  }

  public getArmorTypeByLocation(pj: Character, loc: Location ): string {
    return getArmorTypeByLocation(pj, loc);
  }

  public getSpellStatus(spell: Spell): string {
    const texts = this.translate.instant('PJ.SPELL_STATUS');
    return spell.memorized ? texts.LEARNED : texts.FORGOTTEN;
  }

  public getWeaponList(pj: Character): string[] {
    return getWeaponList(pj);
  }

  public getDMGMod(pj: Character): string {
    return DiceRoll.toString(getDMGMod(pj));
  }

  public getAttSkill(pj: Character, skillName: string): Skill | undefined {
    const skill = pj.skills.ATTACK.find(s => s.weaponType === skillName);
    return skill;
  }

  public getDefSkill(pj: Character, skillName: string): Skill | undefined {
    const skill = pj.skills.DEFENSE.find(s => s.weaponType === skillName);
    return skill;
  }

  public getWeaoponRollString(weapon: Weapon): string {
    return DiceRoll.toString(weapon.damage);
  }

  public getTotalCAR(pj: Character): number {
    return getCAR(pj, false);
  }

  public getDodgeLine(pj: Character): string {
    const dodge = this.translate.instant('PJ.SKILL_NAME.AGILITY.DODGE');
    const dodgeSkill = pj.skills.AGILITY.find(s => s.name === dodge);
    const value = dodgeSkill?.value ? dodgeSkill.value : NUMBERS.N_0;

    return `${dodge}: ${value}% + ${this.getAgilityMod(pj)}%(mod) - ${getCAR(pj)}%(CAR) = ${value + getAgiMod(pj) - getCAR(pj)}%`;
  }

  public getGenderIcon(pj: Character): string {
    if (pj.sex === SexTypeEnum.M) { return ICONS.MALE; }
    if (pj.sex === SexTypeEnum.F) { return ICONS.FEMALE; }
    return ICONS.MALE_FEMALE;
  }

  getLitsLineClass(index:  number): string {
    return index % 2 === 0 ? 'listLine-odd' : 'listLine-even';
  }

  handleCreate() {
    const pj = setInitialHumanCharacter( new Character('Pijus magníficus'), this.translate);
    pj.race = 'Humano';
    pj.spells.SPIRITUAL.push(new Spell('Curación', 4, true));
    pj.spells.SPIRITUAL.push(new Spell('Cuchilla Afilada', 3, true));
    pj.spells.DIVINE.push(new Spell('Separación del Alma', 3, false, true));
    pj.spells.SORCERY.push(new Spell('Succionar PER', 1, true, true, 35));

    pj.profesion ='Guerrero';
    pj.age = 20;
    pj.culture = cultureTypeEnum.CIVILIZED;
    pj.bornIn = 'Glamour';
    pj.skills.MANIPULATION.push(new Skill('Ataque Espada', 75));
    pj.stats.STR = new Characteristic( 16 );
    pj.stats.DEX = new Characteristic( 15 );
    pj.stats.CON = new Characteristic( 14 );
    pj.stats.INT = new Characteristic( 16 );
    pj.stats.SIZ = new Characteristic( 15 );
    pj.stats.POW = new Characteristic( 15 );
    pj.stats.CHA = new Characteristic( 17 );
    pj.religions.push(new CultMember('Yanafal Tarnils', cultMemberTypeEnum.INITIATE));
    const  locations =  this.translate.instant('PJ.LOCATION');

    const coraza = new Armor('Coraza', NUMBERS.N_8, [locations.CHEST, locations.ABDOMEN, locations.LEFT_ARM, locations.RIGHT_ARM], false);
    coraza.weight = NUMBERS.N_12;
    coraza.inCombat = true;
    coraza.description = 'Peto de coraza de bronce';
    pj.armor.push(coraza);

    const lamelar = new Armor('Lamelar', NUMBERS.N_6, [locations.HEAD], false);
    lamelar.weight = NUMBERS.N_2;
    lamelar.inCombat = true;
    lamelar.description = 'Casco lamelar de bronce';

    pj.armor.push(lamelar);

    const hide = new Armor('Piel Dura', NUMBERS.N_2, [locations.RIGHT_LEG, locations.LEFT_LEG, locations.ABDOMEN], false);
    hide.weight = NUMBERS.N_1;
    hide.inCombat = true;
    hide.description = 'Pantalones de piel dura';
    pj.armor.push(hide);

    const weapSkill =  this.translate.instant('PJ.SKILL_NAME.WEAPONS.MELEE.SWORD1H');
    pj.skills.ATTACK.push(new CombatSkill(weapSkill, NUMBERS.N_75, WeaponTypeEnum.SWORD1H));
    pj.skills.DEFENSE.push(new CombatSkill(weapSkill, NUMBERS.N_75, WeaponTypeEnum.SWORD1H));

    const broadsword = createWeapon(WeaponTypeEnum.SWORD1H, WeaponNameEnum.BROAD_SWORD, this.translate);

    pj.weapons.push(broadsword);
    this.characters.push(pj);
    this.characterService.setCharacters(this.characters);
  }

  handleDelete($event: Event, pj: Character): void {
    this.preventAcordionExpansion($event);
    const text = this.translate.instant('ACTIONS.DELETE_CONFIRM', {name: pj.name});
    this.dialogService.openEasyDialog(text , () => {this.deleteCharacter(pj);});
  }

  private deleteCharacter(pj: Character) {
    this.characters = this.characters.filter((character) => character.id !== pj.id);
    this.characterService.deleteCharacter(pj);
    this.characterService.setCharacters(this.characters);
  }

  private fetch() {
    this.loadCharacters();
  }

  public preventAcordionExpansion(event: Event) {//TODO private
    event.stopPropagation();
    event.preventDefault();
  }

  getCultText(pj: Character): string {
    if (!pj.religions || pj.religions.length === 0) { return ''; }
    const translateText = `PJ.CULT_MEMBER_TYPE.${pj.religions[0].memberType}`;
    const memberType = this.translate.instant(translateText);
    return `${memberType}-${pj.religions[0].deity}`;
  }

  private loadCharacters() {
    // TODO start loading
    this.characterService.characters
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((characters)=> {
        this.characters = characters;
        this.filteredCharacters = characters;
        // TODO end loading
      });
  }
}
