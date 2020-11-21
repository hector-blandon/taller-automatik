import { Component, OnInit, Inject } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './table-list-administrador.component';
import { Admin } from '../../models/adminModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-act-administrador',
  templateUrl: './act-administrador.component.html',
  styleUrls: ['./act-administrador.component.css']
})
export class ActAdministradorComponent implements OnInit {

  constructor(private adminService: AdminService, public dialogRef: MatDialogRef<ActAdministradorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  update(idAdmin: number, nombre: string, apellido: string, nit: string, telefono: string, correo: string,  contrasenia: string) {
    const administrador = {
      nombre: nombre,
      apellido: apellido,
      nit: nit,
      telefono: telefono,
      correo: correo,
      contrasenia: contrasenia,
    };

    if (nombre === '' || apellido === '' || nit === '' || telefono === '' || correo === '' ) {
      Swal.fire({
        icon: 'warning',
        title: 'Debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 5000,
      });
    } else {
      this.adminService.update(administrador, idAdmin).subscribe((res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.mensaje,
          showConfirmButton: true,
          timer: 30000,
        });
        window.location.reload();
      });
    }
  }

}
