import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Character, CombatSkill, Weapon, WeaponType, WeaponTypeEnum } from '../../models/character.model';
import { FormControl, FormGroup } from '@angular/forms';
import { WeaponNameType, createWeapon, getWweaponNameListByType } from '../../utils/equip.factory';
import { addWeapon, editSkill, removeWeapon, replaceWeapon } from '../../utils/character-creation.utils';
import { TranslateService } from '@ngx-translate/core';
import { NUMBERS } from '../../constants/number.constants';

interface WeaponDialogData {
  weaponKey: string;
  name: string;
}

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
    atack: new FormControl({value: NUMBERS.N_5, disabled: false}),
    defence: new FormControl({value: NUMBERS.N_5, disabled: false}),
  });

  public weapontypes: WeaponDialogData[] = [];

  public weaponNames: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<WeaponDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      character: Character,
      weapon: Weapon,
      swEditing: boolean,
    },
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {
    this.fetch();
  }

  handleConfirm() {
    const type: WeaponType = this.form.controls['type'].value;
    const name: WeaponNameType = this.form.controls['name'].value;
    const attack: number = this.form.controls['atack'].value;
    const defence: number = this.form.controls['defence'].value;
    if(this.data.swEditing) {
      const newWeapon = createWeapon(type, name, this.translate);
      replaceWeapon(this.data.character, this.data.weapon, newWeapon, this.translate);
      const attackSkill = new CombatSkill(this.translate.instant('PJ.WEAPON_TYPES')['type'], attack, type);
      editSkill(attackSkill, this.data.character.skills.ATTACK);
      const defenceSkill = new CombatSkill(this.translate.instant('PJ.WEAPON_TYPES')['type'], defence, type);
      editSkill(defenceSkill, this.data.character.skills.DEFENSE);
    } else {
      addWeapon(this.data.character, type, name, this.translate, attack, defence);
    }
    this.dialogRef.close();
  }

  handleCancel() {
    this.dialogRef.close();
  }

  private fetch(): void {
    this.weapontypes = Object.values(WeaponTypeEnum).map((type) => ({
      weaponKey: type,
      name: this.translate.instant(`PJ.WEAPON_TYPES.${type}`)
    }));
    this.weapontypes.sort((a, b) => a.name.localeCompare(b.name));
    if (this.data.swEditing) {
      this.patchForm();
    }

    this.form.controls['type'].valueChanges.subscribe((value) => {
      this.typeSelected = true;
      this.nameSelected = false;
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

  private patchForm() {
    this.form.controls['type'].setValue(this.data.weapon.weaponType);
    this.typeSelected = true;
    this.weaponNames = getWweaponNameListByType(this.data.weapon.weaponType);

    const weaponName = this.weaponNames.find((weaponName) => this.translate.instant(`PJ.WEAPON_NAME.${weaponName}`) === this.data.weapon.name);
    this.form.controls['name'].setValue(weaponName);
    this.nameSelected = true;

    const attackSkill = this.data.character.skills.ATTACK.find((skill) => skill.weaponType === this.data.weapon.weaponType);
    this.form.controls['atack'].setValue(attackSkill?.value);
    const defenceSkill = this.data.character.skills.DEFENSE.find((skill) => skill.weaponType === this.data.weapon.weaponType);
    this.form.controls['defence'].setValue(defenceSkill?.value);
  }
}
