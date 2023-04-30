import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Character } from '../../models/character.model';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ARMOR_TYPES, ArmorType } from '../../constants/equip/armor.const';
import { addArmor } from '../../utils/character-creation.utils';


@Component({
  selector: 'app-armor-dialog',
  templateUrl: './armor-dialog.component.html',
})
export class ArmorDialogComponent implements OnInit{
  public typeSelected = false;
  public locsSelected = false;


  public form : FormGroup = new FormGroup({
    type: new FormControl({value: '', disabled: false}),
    name: new FormControl({value: '', disabled: false}),
    locs: new FormGroup({}, [Validators.required]),
  });

  public armorTypes: ArmorType[] = ARMOR_TYPES;


  constructor(
    public dialogRef: MatDialogRef<ArmorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      character: Character
    },
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {
    this.form.controls['type'].valueChanges.subscribe(() => {
      this.typeSelected = true;
    });

    const locs: FormGroup = this.form.controls['locs'] as FormGroup;
    this.data.character.locations.forEach(loc => {
      locs.addControl(loc.name, new FormControl({value: false, disabled: false}));
    });


  }

  getArmorName(armor: ArmorType): string {
    return this.translate.instant(`PJ.ARMOR_TYPES.${armor.name}`);
  }

  getSelectedLocs(): string[] {
    const locs: string[] = [];
    const formLocs: FormGroup = this.form.controls['locs'] as FormGroup;
    Object.keys(formLocs.controls).forEach(key => {
      if (formLocs.controls[key].value) {
        locs.push(key);
      }
    });
    return locs;
  }

  handleConfirm() {
    const locs = this.getSelectedLocs();
    const typeText = this.form.controls['type'].value;
    const type: ArmorType | undefined = this.armorTypes.find(armor => armor.name === typeText);

    if (type) {
      addArmor(this.data.character, type, locs, this.translate);
    }
    this.dialogRef.close();
  }

  getLitsLineClass(index:  number): string {
    return index % 2 === 0 ? 'listLine-odd' : 'listLine-even';
  }

  handleCancel() {
    this.dialogRef.close();
  }

}
