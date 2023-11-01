import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Character } from '../../models/character.model';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { CharactersService } from '../../services/character.service';
import { StatusService } from '../../services/status.service';


@Component({
  selector: 'app-race-dialog',
  templateUrl: './copy-spells-dialog.component.html',
})
export class CopySpellsDialogComponent implements OnInit, OnDestroy {

  public form : FormGroup = new FormGroup({
    filter: new FormControl({value: '', disabled: false}),
    character: new FormControl({value: '', disabled: false}, Validators.required),
  });
  public characters: Character[] = [];
  public filteredCharacters: Character[] = [];

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    public dialogRef: MatDialogRef<CopySpellsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      character: Character
    },
    private translate: TranslateService,
    private characterService: CharactersService,
    private statusService: StatusService,
  ) { }

  ngOnInit(): void {
    this.fetch();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  handleConfirm() {
    const copyTargetId = this.form.controls['character'].value;
    const copyTarget = this.characters.find((character) => character.id === copyTargetId);
    this.data.character.spells = copyTarget ? JSON.parse(JSON.stringify(copyTarget.spells)) : this.data.character.spells;
    this.statusService.setTargetOfSpellsCopy(copyTargetId);
    this.dialogRef.close();
  }

  handleCancel() {
    this.dialogRef.close();
  }

  private fetch(): void {
    this.addListeners();
    this.loadCharacters();


  }

  private addListeners(): void {
    this.form.controls['filter'].valueChanges
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((pjId: string) => {
        this.filteredCharacters = this.characters.filter((character) =>
          character.id.toLowerCase().includes(pjId.toLowerCase()));
      });
  }

  private loadCharacters() {
    // TODO start loading
    this.characterService.characters
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((characters)=> {
        this.characters = characters;
        this.filteredCharacters = characters;
        this.getLastTarget();
        // TODO end loading
      });
  }

  private getLastTarget(): void {
    // TODO start loading
    this.statusService.targetOfSpellsCopy
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((targetId) => {
        const copyTarget = this.characters.find((character) => character.id === targetId);
        this.form.controls['character'].setValue(targetId);
        this.form.controls['filter'].setValue(copyTarget ? copyTarget.name : '');
        // TODO end loading
      });
  }

}
