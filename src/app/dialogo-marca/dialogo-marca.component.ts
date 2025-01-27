import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-dialogo-marca',
  templateUrl: './dialogo-marca.component.html',
  styleUrls: ['./dialogo-marca.component.css'],
  imports:[
    MatDialogModule,
  ],
})
export class MarcaDialogoComponent {
  constructor(public dialogRef: MatDialogRef<MarcaDialogoComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
