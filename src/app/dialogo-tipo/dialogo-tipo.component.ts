import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-dialogo-tipo',
  templateUrl: './dialogo-tipo.component.html',
  styleUrls: ['./dialogo-tipo.component.css'],
  imports:[
    MatDialogModule,
  ],
})
export class TipoDialogoComponent {
  constructor(public dialogRef: MatDialogRef<TipoDialogoComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
