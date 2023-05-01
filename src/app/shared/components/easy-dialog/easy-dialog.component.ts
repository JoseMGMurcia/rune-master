import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-easy-dialog',
  templateUrl: './easy-dialog.component.html',
})
export class EasyDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EasyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string,
      text: string,
      confirm: () => void
    }
  ) { }

  handleConfirm() {
    this.data.confirm();
    this.dialogRef.close();
  }

  handleCancel() {
    this.dialogRef.close();
  }

}
