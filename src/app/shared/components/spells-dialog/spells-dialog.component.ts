import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Character, Spell, SpellType, SpellTypeEnum, Spells } from '../../models/character.model';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SpellsService } from '../../services/spells.service';
import { Subject, takeUntil } from 'rxjs';
import { getSpiritualSpell } from '../../utils/spell.utils';
import { NUMBERS } from '../../constants/number.constants';

@Component({
  selector: 'app-race-dialog',
  templateUrl: './spells-dialog.component.html',
})
export class SpellsDialogComponent implements OnInit, OnDestroy {

  public form : FormGroup = new FormGroup({
    spell: new FormControl({value: '', disabled: true}, Validators.required),
    types: new FormControl({value: '', disabled: false}, Validators.required),
    intensity: new FormControl({value: '', disabled: true}),
  });
  public spells: Spells = new Spells();
  public types: { value: string, text: string }[] = this.getSpellTypes();
  public selectedList: Spell[] = [];
  public selectedType: SpellType = SpellTypeEnum.SPIRITUAL;
  public swStackShow = false;

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    public dialogRef: MatDialogRef<SpellsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      character: Character
    },
    private translate: TranslateService,
    private spellsService: SpellsService,
  ) { }

  ngOnInit(): void {
    this.fetch();    
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  handleConfirm() {
    this.addSpell();
    this.dialogRef.close();
  }

  handleCancel() {
    this.dialogRef.close();
  }

  private addSpell() {
    const spell = this.selectedList.find((spell) => spell.id === this.form.controls['spell'].value);
    if (!spell) {
      return;
    }
    const intensity = this.form.controls['intensity'].value;
    const type: SpellType = this.form.controls['types'].value;

    const mapper = {
      [SpellTypeEnum.SPIRITUAL]: ()=> this.addSpiritualSpell(spell, intensity),
      [SpellTypeEnum.DIVINE]: ()=> this.addDivineSpell(spell, intensity),
      [SpellTypeEnum.SORCERY]: ()=> this.addSorcerySpell(spell, intensity),
      [SpellTypeEnum.OTHER]: ()=> this.addOtherSpell(spell, intensity),
    };
    mapper[type]();
  }

  private addSpiritualSpell(spell: Spell, intensity: number): void {
    const index = this.data.character.spells.SPIRITUAL.findIndex((s) => s.id === spell.id);
    const spiritualSpell = getSpiritualSpell(this.spells, spell.name, intensity);
    if (index > - NUMBERS.N_1) {
      this.data.character.spells.SPIRITUAL[index] = spiritualSpell;
    } else {
      this.data.character.spells.SPIRITUAL.push(spiritualSpell);
    }
    
  }

  private addDivineSpell(spell: Spell, intensity: number): void {
    //
  }

  private addSorcerySpell(spell: Spell, intensity: number): void {
    //
  }

  private addOtherSpell(spell: Spell, intensity: number): void {
    //
  }

  private fetch(): void {
    this.loadSpells();
    this.addListeners();
  }

  private addListeners(): void {
    this.form.controls['types'].valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((type: SpellType) => {
        this.selectedList = this.spells[type];
        this.selectedType = type;
        this.form.controls['spell'].setValue('');
        this.form.controls['spell'].enable();
        if (type === SpellTypeEnum.SPIRITUAL || type === SpellTypeEnum.DIVINE) {
          this.form.controls['intensity'].setValue('');
          this.form.controls['intensity'].enable();
          this.form.controls['intensity'].addValidators(Validators.required);
          this.swStackShow = true;
        } else {
          this.form.controls['intensity'].disable();
          this.form.controls['intensity'].clearValidators();
          this.swStackShow = false;
        }
        this.form.controls['intensity'].updateValueAndValidity();
      });

    this.form.controls['spell'].valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((spellId: number) => {
        const type = this.form.controls['types'].value;
        if (type !== SpellTypeEnum.SPIRITUAL) {
          return;
        }
        const spell = this.selectedList.find((s) => s.id === spellId);

        if (!spell?.stackable) {
          this.form.controls['intensity'].disable();
          this.form.controls['intensity'].clearValidators();
          this.swStackShow = false;
        } else {
          this.form.controls['intensity'].setValue('');
          this.form.controls['intensity'].enable();
          this.form.controls['intensity'].addValidators(Validators.required);
          this.swStackShow = true;
        }
        this.form.controls['intensity'].updateValueAndValidity();
      });
  }

  private loadSpells(): void {
    this.spellsService.spiritualSpells$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((spells) => {
        this.spells.SPIRITUAL = spells;
      });
  }

  private getSpellTypes(): { value: string, text: string }[] {
    return [
      { value: SpellTypeEnum.SPIRITUAL, text: this.translate.instant('PJ.SPELL_TYPE.SPIRITUAL')},
      { value: SpellTypeEnum.SORCERY, text: this.translate.instant('PJ.SPELL_TYPE.DIVINE')},
      { value: SpellTypeEnum.DIVINE, text: this.translate.instant('PJ.SPELL_TYPE.SORCERY')},
      { value: SpellTypeEnum.OTHER, text: this.translate.instant('PJ.SPELL_TYPE.OTHER')},
    ];
  }
}
