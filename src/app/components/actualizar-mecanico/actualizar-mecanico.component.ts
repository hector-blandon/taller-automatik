import { Component, OnInit } from '@angular/core';
import { MecanicoModel } from 'src/app/models/MecanicoModel';
import { MecanicoService } from '../../services/MecanicoService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-mecanico',
  templateUrl: './actualizar-mecanico.component.html',
  styleUrls: ['./actualizar-mecanico.component.css'],
})
export class ActualizarMecanicoComponent implements OnInit {
  mecanico: MecanicoModel = {
    nombre: null,
    apellido: null,
    correo: null,
    direccion: null,
    nit: null,
    telefono: null,
  };

  constructor(private mecanicoService: MecanicoService) {}

  ngOnInit(): void {
    let id = 1;
    this.mecanicoService.getId(id).subscribe((res: any) => {
      this.mecanico = res;
    });
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
      this.mecanico.correo = correo;
      this.mecanico.direccion = direccion;
      this.mecanico.telefono = telefono;
      this.mecanicoService.update(this.mecanico, '3').subscribe((res: any) => {
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
