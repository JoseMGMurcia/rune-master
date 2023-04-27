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
  public turn = NUMBERS.N_0;
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

  public addSavedCharacter() {
    const savedId = this.dicesForm.controls['savedPJ'].value;
    const pJ = this.savedCharacters.find((pj) => pj.id === savedId);
    if (pJ) {
      this.characters.push(pJ);
    }
  }

  public addTurn() {
    this.turn++;
  }

  public substractTurn() {
    if (this.turn > 0) {
      this.turn--;
    }
  }

  public rollDices() {
    const roll = this.dicesForm.controls['dices'].value;
    if (isRollMsg(roll)) {
      const total: number = manageRolls(roll);
      this.swShowResult = true;
      this.dicesResult = total.toString();
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
