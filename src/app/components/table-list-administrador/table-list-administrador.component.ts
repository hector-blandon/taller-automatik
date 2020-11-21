import { Component, OnInit, Inject } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegAdministradorComponent } from './reg-administrador.component';
import { EliAdministradorComponent } from './eli-administrador.component';
import { ActAdministradorComponent } from './act-administrador.component';

export interface DialogData {
  idAdmin: string;
  nombre: string;
  apellido: string;
  nit: string;
  telefono: string;
  correo: string;
  contrasenia: string;
}

@Component({
  selector: 'app-table-list-administrador',
  templateUrl: './table-list-administrador.component.html',
  styleUrls: ['./table-list-administrador.component.css']
})
export class TableListAdministradorComponent implements OnInit {

  public idTaller = 1;
  administradores = [];

  idAdmin: string;
  nombre: string;
  apellido: string;

  constructor(public dialog: MatDialog,
              private adminService: AdminService
              ) { }

  ngOnInit() {

    this.adminService.getAll(this.idTaller)
      .subscribe(resp => {
        console.log(resp),
          this.administradores = resp;
      });

  }

  agregar(): void {
    const dialogRef = this.dialog.open(RegAdministradorComponent, {
      width: '500px',
      data: {}
    });

  }

  eliminar(idAdmin: number, nombre: string, apellido: string) {
    const dialogRef = this.dialog.open(EliAdministradorComponent, {
      width: '500px',
      data: {idAdmin, nombre, apellido}
    });
  }

  actualizar(idAdmin: number, nombre: string, apellido: string, nit: string, telefono: string, correo: string, contrasenia: string): void {
    const dialogRef = this.dialog.open(ActAdministradorComponent, {
      width: '800px',
      data: {idAdmin, nombre, apellido, nit, telefono, correo, contrasenia}
    });
  }
}
