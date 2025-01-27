import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PesquisaComponent } from '../pesquisa/pesquisa.component';
import {MatPaginator} from '@angular/material/paginator';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { DialogoComponent} from '../dialogo/dialogo.component';
import { NomeDialogoComponent } from '../dialogo-nome/dialogo-nome.component';
import { PrecoDialogoComponent } from '../dialogo-preco/dialogo-preco.component';
import { TipoDialogoComponent } from '../dialogo-tipo/dialogo-tipo.component';
import { MarcaDialogoComponent } from '../dialogo-marca/dialogo-marca.component';



interface Pc {
  name: string;
  gpu: string;
  price: number;
  tipo: string[];
  marca: string;
  edited: boolean;
}

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    MatCheckboxModule,
    PesquisaComponent,
    MatPaginator,
    MatDialogModule,
  ],
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})

export class ListaComponent {

  Pc = [
    { name: 'Dell Inspiron 15', price: 3500, tipo: ['notebook'], marca: 'Dell', gpu: 'Intel UHD Graphics', edited: false },
    { name: 'MacBook Air', price: 7500, tipo: ['notebook'], marca: 'Apple', gpu: 'Apple M1 GPU', edited: false },
    { name: 'Acer Aspire 5', price: 3000, tipo: ['notebook'], marca: 'Acer', gpu: 'NVIDIA GeForce MX350', edited: false },
    { name: 'HP Pavilion Desktop', price: 4000, tipo: ['desktop'], marca: 'HP', gpu: 'AMD Radeon RX 550', edited: false },
    { name: 'Lenovo ThinkCentre', price: 3800, tipo: ['desktop'], marca: 'Lenovo', gpu: 'Intel HD Graphics', edited: false },
    { name: 'iMac 24"', price: 9500, tipo: ['desktop'], marca: 'Apple', gpu: 'Apple M1 GPU', edited: false },
    { name: 'Asus ROG Strix', price: 8500, tipo: ['gaming'], marca: 'Asus', gpu: 'NVIDIA GeForce RTX 3070', edited: false },
    { name: 'Alienware Aurora', price: 12000, tipo: ['gaming'], marca: 'Dell', gpu: 'NVIDIA GeForce RTX 3080', edited: false },
    { name: 'MSI GE76 Raider', price: 11000, tipo: ['gaming'], marca: 'MSI', gpu: 'NVIDIA GeForce RTX 3080', edited: false },
    { name: 'Chromebook Flex 5', price: 2500, tipo: ['notebook'], marca: 'Lenovo', gpu: 'Intel UHD Graphics', edited: false }
  ];

  paginatedpc: Pc[] = [];
  itemsPerPage = 5;
  pageIndex=0;

  formData: any = { name: '', gpu: '', price: null, tipo: [], marca: '' };
  Tipopc: string[] = ['gaming', 'desktop', 'notebook'];
  showForm: boolean = false;
  filteredpc = [...this.Pc];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.updatePaginatedpc();
  }

  ngOnChanges() {
    this.updatePaginatedpc();
  }


  updatePaginatedpc() {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    const endIndex = startIndex + this.paginator.pageSize;
  
    this.paginatedpc = this.filteredpc.slice(startIndex, endIndex);
  }

  filterpc(selectedCategories: any) {
    this.filteredpc = this.Pc.filter(Pc =>
      Pc.tipo.some(tipo => selectedCategories[tipo])
    );
    this.pageIndex = 0; 
    this.updatePaginatedpc(); 
  }

  
  pageChanged(event: any) {
    this.pageIndex = event.pageIndex;
    this.updatePaginatedpc();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  constructor(private dialog: MatDialog) {}


  addpc() {
    if (this.formData.gpu < 12) {
      this.openDialoggpu();
      return;
    }
    if (this.formData.name.length == 0) {
      this.openDialogNome();
      return;
    }
    if (this.formData.price == 0 || this.formData.price == null) {
      this.openDialogPreco();
      return;
    }
    if (this.formData.marca.split('.').length < 1 ) {
      this.openDialogmarca();
      return;
    }

    this.Pc.push({ ...this.formData });
    this.formData = { name: '', gpu: '', price: null, tipo: [], marca: '' };
    this.filteredpc = [...this.Pc];
    this.toggleForm();
    this.showForm = false;
  }

  openDialoggpu() {
    this.dialog.open(DialogoComponent);
  }
  openDialogNome() {
    this.dialog.open(NomeDialogoComponent);
  }
  openDialogPreco() {
    this.dialog.open(PrecoDialogoComponent);
  }
  openDialogTipo() {
    this.dialog.open(TipoDialogoComponent);
  }
  openDialogmarca() {
    this.dialog.open(MarcaDialogoComponent);
  }

  ontipoChange(tipo: string, isChecked: boolean) {
    if (isChecked) {
      this.formData.tipo.push(tipo);
    } else {
      this.formData.tipo = this.formData.tipo.filter((t: string) => t !== tipo);
      this.openDialogTipo();
    }
  }

  deletepc(index: number) {
    this.Pc.splice(index, 1);
    this.updatePaginatedpc();
  }
  

  editpc(index: number) {
    this.formData = { ...this.Pc[index] };
    this.showForm = true;
  
    this.Pc.splice(index, 1);
  }
}