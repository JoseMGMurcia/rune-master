import {Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Character } from '../../models/character.model';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stats-dialog',
  templateUrl: './stats-dialog.component.html',
})
export class StatsDialogComponent{

  public form : FormGroup = new FormGroup({
    str: new FormControl({value: this.data.character.stats.STR.value, disabled: true}),
    con: new FormControl({value: this.data.character.stats.CON.value, disabled: true}),
    siz: new FormControl({value: this.data.character.stats.SIZ.value, disabled: true}),
    int: new FormControl({value: this.data.character.stats.INT.value, disabled: true}),
    pow: new FormControl({value: this.data.character.stats.POW.value, disabled: true}),
    dex: new FormControl({value: this.data.character.stats.DEX.value, disabled: true}),
    cha: new FormControl({value: this.data.character.stats.CHA.value, disabled: true}),
  });

  constructor(
    public dialogRef: MatDialogRef<StatsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      character: Character
    },
    private translate: TranslateService,
  ) { }

  public addStat(stat: string, value: number) {
    this.form.controls[stat].setValue(this.form.controls[stat].value + value);
  }



  handleConfirm() {
    const values = this.form.getRawValue();
    this.data.character.stats.STR.value = values.str;
    this.data.character.stats.CON.value = values.con;
    this.data.character.stats.SIZ.value = values.siz;
    this.data.character.stats.INT.value = values.int;
    this.data.character.stats.POW.value = values.pow;
    this.data.character.stats.DEX.value = values.dex;
    this.data.character.stats.CHA.value = values.cha;
    this.dialogRef.close();
  }

  handleCancel() {
    this.dialogRef.close();
  }

}
