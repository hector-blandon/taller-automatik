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
  constructor(private servicioService: ServicioService) {}

  ngOnInit(): void {}

  save(fechaIngreso: string, kilometraje: number, falla: string) {
    if (fechaIngreso === '' || kilometraje == null || falla === '') {
      Swal.fire({
        icon: 'warning',
        title: 'debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 30000,
      });
    } else {
      const status = true;
      const servicio: ServicioModel = {
        fechaIngreso,
        kilometraje,
        falla,
        status,
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
