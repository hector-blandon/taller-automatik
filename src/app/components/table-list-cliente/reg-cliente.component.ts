import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../../models/cliente.model';
import { ClienteService } from '../../services/clienteService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reg-cliente',
  templateUrl: './reg-cliente.component.html',
  styleUrls: ['./reg-cliente.component.css']
})
export class RegClienteComponent implements OnInit {

  public nombre: string;
  public apellido: string;
  public nit: string;
  public correo: string;
  public telefono: string;
  public direccion: string;
  public contrasenia: string;

  constructor(private clienteService: ClienteService) { }

  saveA(nombre: string, apellido: string, nit: string, correo: string, telefono: string, direccion: string, contrasenia: string) {

    if (nombre == '' || apellido == '' || nit == '' || correo == '' || telefono == '' || direccion == ''|| contrasenia == '') {
      Swal.fire({
        icon: 'warning',
        title: 'debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 5000

      });
    } else {

      let cliente: ClienteModel = { nombre, apellido, nit, correo, telefono, direccion, contrasenia };
      this.clienteService.saveA(client).subscribe((res: any) => {
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
  ngOnInit(): void {
  }

}
