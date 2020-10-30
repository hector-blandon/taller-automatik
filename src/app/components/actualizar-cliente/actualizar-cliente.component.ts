import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/clienteService';
import { ClienteModel } from '../../models/cliente.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css'],
})
export class ActualizarClienteComponent implements OnInit {
  cliente: ClienteModel = {
    nombre: null,
    apellido: null,
    correo: null,
    direccion: null,
    nit: null,
    telefono: null,
  };

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.cliente.nombre = 'Hola';
    this.cliente.apellido = 'Mundo';
    this.cliente.nit = '1234567';

    this.cliente.correo = 'hola@mundo.com';
    this.cliente.direccion = 'calle falsa #123';
    this.cliente.telefono = '7777777';
  }

  update(correo: string, direccion: string, telefono: string) {
    if (correo === '' || direccion === '' || telefono === '') {
      Swal.fire({
        icon: 'warning',
        title: 'Debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 5000,
      });
    } else {
      this.cliente.correo = correo;
      this.cliente.direccion = direccion;
      this.cliente.telefono = telefono;
      this.clienteService.update(this.cliente, '8').subscribe((res: any) => {
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
