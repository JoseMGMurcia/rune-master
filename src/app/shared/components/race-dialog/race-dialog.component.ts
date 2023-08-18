import {Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Character } from '../../models/character.model';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RACES, RaceTypeEnum } from '../../models/races.model';
import { setInitialHumanCharacter, transformToMorocath, transformToDuck, transformToNewLing, transformAgimori, transformTuskRider, transformToBroo } from '../../utils/races.utils';

@Component({
  selector: 'app-race-dialog',
  templateUrl: './race-dialog.component.html',
})
export class RaceDialogComponent {

  public form : FormGroup = new FormGroup({
    race: new FormControl({value: '', disabled: false}),
  });

  public races = RACES;

  constructor(
    public dialogRef: MatDialogRef<RaceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      character: Character
    },
    private translate: TranslateService,
  ) { }

  handleConfirm() {
    this.asignRace();
    this.dialogRef.close();
  }

  handleCancel() {
    this.dialogRef.close();
  }

  private asignRace() {
    setInitialHumanCharacter(this.data.character, this.translate);

    if(this.form.controls['race'].value === RaceTypeEnum.MOROCATH ) {
      transformToMorocath(this.data.character, this.translate);

    } else if (this.form.controls['race'].value === RaceTypeEnum.DUCK) {
      transformToDuck(this.data.character, this.translate);

    } else if (this.form.controls['race'].value === RaceTypeEnum.NEWLING) {
      transformToNewLing(this.data.character, this.translate);

    } else if (this.form.controls['race'].value === RaceTypeEnum.AGIMORI) {
      transformAgimori(this.data.character, this.translate);
      
    } else if (this.form.controls['race'].value === RaceTypeEnum.TUSK_RIDER) {
      transformTuskRider(this.data.character, this.translate);

    } else if (this.form.controls['race'].value === RaceTypeEnum.BROO) {
      transformToBroo(this.data.character, this.translate);
    }
  }
}
