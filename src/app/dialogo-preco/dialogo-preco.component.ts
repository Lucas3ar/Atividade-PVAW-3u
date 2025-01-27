import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-dialogo-preco',
  templateUrl: './dialogo-preco.component.html',
  styleUrls: ['./dialogo-preco.component.css'],
  imports:[
    MatDialogModule,
  ],
})
export class PrecoDialogoComponent {
  constructor(public dialogRef: MatDialogRef<PrecoDialogoComponent>) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
