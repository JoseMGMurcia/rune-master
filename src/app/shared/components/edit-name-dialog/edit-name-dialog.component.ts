import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Character } from '../../models/character.model';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-race-dialog',
  templateUrl: './edit-name-dialog.component.html',
})
export class EditNameDialogComponent {

  public form : FormGroup = new FormGroup({
    name: new FormControl({value: this.data.character.name, disabled: false}, Validators.required),
  });
  public characters: Character[] = [];
  public filteredCharacters: Character[] = [];


  constructor(
    public dialogRef: MatDialogRef<EditNameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      character: Character,
    },
    private translate: TranslateService,
  ) { }


  handleConfirm() {
    this.data.character.name = this.form.controls['name'].value;
    this.dialogRef.close();
  }

  handleCancel() {
    this.dialogRef.close();
  }
}
