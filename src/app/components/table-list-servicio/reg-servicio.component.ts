import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import Swal from 'sweetalert2';
import { ServicioModel } from '../../models/servicio.model';

@Component({
  selector: 'app-reg-servicio',
  templateUrl: './reg-servicio.component.html',
  styleUrls: ['./reg-servicio.component.css'],
})
export class RegServicioComponent implements OnInit {
  mecanicos = [];
  mSeleccionado: any;
  constructor(private servicioService: ServicioService) {}

  ngOnInit(): void {
    const idTaller = 1;
    this.servicioService.getAllM(idTaller).subscribe((resp) => {
      console.log(resp), (this.mecanicos = resp);
    });
  }

  guardarMecanicoSeleccionado() {
    console.log(this.mSeleccionado);
    const mecanico = this.mSeleccionado;
    console.log(mecanico);
  }

  save(kilometraje: number, falla: string) {
    if (kilometraje == null || falla === '') {
      Swal.fire({
        icon: 'warning',
        title: 'debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 30000,
      });
    } else {
      const status = true;
      const idMecanico = 2;
      const idVehiculo = 11;
      const servicio: ServicioModel = {
        kilometraje,
        falla,
        status,
        idVehiculo,
        idMecanico,
      };
      this.servicioService.save(servicio).subscribe((res: any) => {
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
