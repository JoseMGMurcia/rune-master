import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Character, WeaponType, WeaponTypeEnum } from '../../models/character.model';
import { FormControl, FormGroup } from '@angular/forms';
import { WeaponNameType, getWweaponNameListByType } from '../../utils/equip.factory';
import { addWeapon } from '../../utils/character-creation.utils';
import { TranslateService } from '@ngx-translate/core';
import { NUMBERS } from '../../constants/number.constants';

@Component({
  selector: 'app-weapon-dialog',
  templateUrl: './weapon-dialog.component.html',
})
export class WeaponDialogComponent implements OnInit{

  public typeSelected = false;
  public nameSelected = false;
  public form : FormGroup = new FormGroup({
    type: new FormControl({value: '', disabled: false}),
    name: new FormControl({value: '', disabled: false}),
  });

  public weapontypes = WeaponTypeEnum;
  public weaponNames: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<WeaponDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      character: Character
    },
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {
    this.form.controls['type'].valueChanges.subscribe((value) => {
      this.typeSelected = true;
      this.weaponNames = getWweaponNameListByType(value);
      if (this.weaponNames.length === NUMBERS.N_1) {
        this.form.controls['name'].setValue(this.weaponNames[NUMBERS.N_0]);
        this.nameSelected = true;
      }
    });

    this.form.controls['name'].valueChanges.subscribe(() => {
      this.nameSelected = true;
    });
  }

  handleConfirm() {
    const type: WeaponType = this.form.controls['type'].value;
    const name: WeaponNameType = this.form.controls['name'].value;
    addWeapon(this.data.character, type, name, this.translate);
    this.dialogRef.close();
  }


  handleCancel() {
    this.dialogRef.close();
  }
}
