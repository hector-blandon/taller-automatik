import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../../models/cliente.model';
import { ClienteService } from 'src/app/services/clienteService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public nombre: string;
  public apellido: string;
  public correo: string;
  public direccion: string;
  public nit: string;
  public telefono: string;

  constructor(private clienteService: ClienteService) { }

  save(nombre: string, apellido: string, correo: string, direccion: string, nit: string, telefono: string) {

    if (nombre == '' || apellido == '' || correo == '' || direccion == '' || nit == '' || telefono == '') {
      Swal.fire({
        icon: 'warning',
        title: 'debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 5000
      });

    } else {

      let cliente: ClienteModel = { nombre, apellido, correo, direccion, nit, telefono };
      this.clienteService.save(cliente).subscribe((res: any) => {
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
