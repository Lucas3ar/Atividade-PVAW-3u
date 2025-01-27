import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.css'],
  imports:[
    MatDialogModule,
  ],
})
export class DialogoComponent {
  constructor(public dialogRef: MatDialogRef<DialogoComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}