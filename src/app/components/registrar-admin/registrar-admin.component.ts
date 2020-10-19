import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Admin } from '../../models/adminModel';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-registro-admin',
  templateUrl: './registrar-admin.component.html',
  styleUrls: ['./registrar-admin.component.css'],
})
export class RegistroAdminComponent implements OnInit {


  public nombre: string;
  public apellido: string;
  public telefono: string;
  public correo: string;
  public contrasenia: string;
  public nit: string;

  constructor(private adminService: AdminService) { }

  saveA(nombre: string, apellido: string, telefono: string, nit: string, correo: string, contrasenia: string) {

    if (nombre == '' || apellido == '' || telefono == '' || nit == '' || correo == '' || contrasenia == '') {
      Swal.fire({
        icon: 'warning',
        title: 'debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 5000

      });
    } else {

      let admin: Admin = { nombre, apellido, nit, correo, contrasenia, telefono };
      this.adminService.saveA(admin).subscribe((res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.mensaje,
          showConfirmButton: true,
          timer: 30000
        });
        window.location.reload();
      });
    }
  }


  ngOnInit(): void { }

}