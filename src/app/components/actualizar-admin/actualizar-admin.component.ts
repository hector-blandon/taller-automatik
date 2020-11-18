import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Admin } from '../../models/adminModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-admin',
  templateUrl: './actualizar-admin.component.html',
  styleUrls: ['./actualizar-admin.component.css'],
})
export class ActualizarAdminComponent implements OnInit {
  admin: Admin = {
    nombre: null,
    apellido: null,
    nit: null,
    correo: null,
    contrasenia: null,
    telefono: null,
  };

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    let id = 2;
    this.adminService.getId(id).subscribe((res: any) => {
      this.admin = res;
    });
  }

  update(correo: string, telefono: string) {
    if (correo === '' || telefono === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 5000,
      });
    } else {
      this.admin.correo = correo;
      this.admin.telefono = telefono;
      this.adminService.update(this.admin, 4).subscribe((res: any) => {
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
