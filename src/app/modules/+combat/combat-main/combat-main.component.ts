import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { NUMBERS } from 'src/app/shared/constants/number.constants';
import { Character } from 'src/app/shared/models/character.model';
import { CharactersService } from 'src/app/shared/services/character.service';
import { manageRolls } from 'src/app/shared/utils/dices.utils';
import { isRollMsg } from 'src/app/shared/utils/message.utils';

@Component({
  selector: 'app-combat-main',
  templateUrl: './combat-main.component.html',
})
export class CombatMainComponent implements OnInit, OnDestroy {

  public dicesResult = '';
  public dicesRoll = '';
  public turn = NUMBERS.N_1;
  public swShowResult = false;
  public characters: Character[] = [];
  public savedCharacters: Character[] = [];
  public character: Character = new Character('');
  public dicesForm : FormGroup = new FormGroup({
    dices: new FormControl({value: '', disabled: false}),
    combatant: new FormControl({value: '', disabled: false}),
    savedPJ: new FormControl({value: '', disabled: false}),
  });

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private characterService: CharactersService,
  ) { }

  ngOnInit(): void {
    this.fetch();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  public swichCharacterIndex(order: number) {
    let index = this.characters.findIndex((character) => character.id === this.character.id);
    index = index + order;
    index = index < NUMBERS.N_0 ? this.characters.length - NUMBERS.N_1 : index;
    index = index >= this.characters.length ? NUMBERS.N_0 : index;
    this.character = this.characters[index];
  }

  public addCombatant() {
    const combatant = this.dicesForm.controls['combatant'].value;
    if (combatant) {
      this.characters.push(new Character(combatant));
      this.dicesForm.controls['combatant'].setValue('');
    }
  }

  public setCharacter(character: Character) {
    this.character = character;
  }

  public removeCharacter(character: Character) {
    this.characters.splice(this.characters.findIndex((pj) => pj.id === character.id), NUMBERS.N_1);
  }

  public addCharacter(character: Character) {
    this.characters.push(character);
  }

  public addSavedCharacter() {
    const savedId = this.dicesForm.controls['savedPJ'].value;
    const pJ = this.savedCharacters.find((pj) => pj.id === savedId);
    if (pJ && !this.characters.some((pj) => pj.id === pJ.id) ) {
      this.characters.push(pJ);
    }
  }

  public moveTurn(mod: number) {
    this.turn = this.turn + mod > NUMBERS.N_0 ? this.turn + mod : this.turn;
  }

  public rollDices() {
    const roll = this.dicesForm.controls['dices'].value;
    this.doRoll(roll);
  }

  public doRoll(roll: string): void {
    if (isRollMsg(roll)) {
      const total: number = manageRolls(roll);
      this.swShowResult = true;
      this.dicesResult = total.toString();
      this.dicesRoll = roll;
    }
  }

  public clearDices() {
    this.dicesForm.controls['dices'].setValue('');
    this.dicesResult = '';
    this.swShowResult = false;
  }

  private fetch() {
    this.loadCharacters();
  }

  private loadCharacters() {
    // TODO start loading
    this.characterService.characters
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((characters)=> {
        this.savedCharacters = characters;
        // TODO end loading
      });
  }

}
