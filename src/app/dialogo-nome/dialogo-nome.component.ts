import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-dialogo-nome',
  templateUrl: './dialogo-nome.component.html',
  styleUrls: ['./dialogo-nome.component.css'],
  imports:[
    MatDialogModule,
  ],
})
export class NomeDialogoComponent {
  constructor(public dialogRef: MatDialogRef<NomeDialogoComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
