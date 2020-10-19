import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { MecanicoModel } from '../../models/MecanicoModel';
import { MecanicoService } from '../../services/MecanicoService';

@Component({
  selector: 'app-registrar-mecanico',
  templateUrl: './registrar-mecanico.component.html',
  styleUrls: ['./registrar-mecanico.component.css']
})
export class RegistrarMecanicoComponent implements OnInit {

  public nombre: string;
  public apellido: string;
  public correo: string;
  public direccion: string;
  public nit: string;
  public telefono: string;

  constructor(private mecanicoService: MecanicoService) { }

  save(nombre: string, apellido: string, correo: string, direccion: string, nit: string, telefono: string) {

    if (nombre == '' || apellido == '' || correo == '' || direccion == '' || nit == '' || telefono == '') {
      Swal.fire({
        icon: 'warning',
        title: 'debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 5000

      });
    } else {

      let mecanico: MecanicoModel = { nombre, apellido, correo, direccion, nit, telefono };
      this.mecanicoService.save(mecanico).subscribe((res: any) => {
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
