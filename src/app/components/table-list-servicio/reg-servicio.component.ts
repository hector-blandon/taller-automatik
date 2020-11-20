import { Component, OnInit, Inject } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import Swal from 'sweetalert2';
import { ServicioModel } from '../../models/servicio.model';
import { ActivatedRoute } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reg-servicio',
  templateUrl: './reg-servicio.component.html',
  styleUrls: ['./reg-servicio.component.css'],
})
export class RegServicioComponent implements OnInit {
  mecanicos = [];
  idMecanico: number;
  idVehiculo: number;
  idCliente: number;
  constructor(
    private servicioService: ServicioService,
    private activatedRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<RegServicioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.idVehiculo = this.data.idVehiculo;
    this.idCliente = this.data.idCliente;
    console.log(this.idVehiculo, this.idCliente);
    const idTaller = 1;
    this.servicioService.getAllM(idTaller).subscribe((resp) => {
      console.log(resp), (this.mecanicos = resp);
    });
  }

  guardarMecanicoSeleccionado(event) {
    const i = event.target.value;
    const mecanico = this.mecanicos[i - 1];
    this.idMecanico = mecanico.idMecanico;
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
      const idMecanico = this.idMecanico;
      const idVehiculo = this.idVehiculo;
      const idCliente = this.idCliente;
      const servicio: ServicioModel = {
        kilometraje,
        falla,
        status,
        idVehiculo,
        idMecanico,
        idCliente,
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
