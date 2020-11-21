import { Component, OnInit, Inject } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { AccionRealizada } from 'src/app/models/accionR.model';
import Swal from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reg-accion-realizada',
  templateUrl: './reg-accion-realizada.component.html',
  styleUrls: ['./reg-accion-realizada.component.css'],
})
export class RegAccionRealizadaComponent implements OnInit {
  constructor(
    public servicioService: ServicioService,
    public dialogRef: MatDialogRef<RegAccionRealizadaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  agregarAcc(descripcion: string, valor: number) {
    if (descripcion === '' || valor == null) {
      Swal.fire({
        icon: 'warning',
        title: 'debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 5000,
      });
    } else {
      const idServicio = this.data.idServicio;

      const accion: AccionRealizada = { descripcion, valor, idServicio };
      this.servicioService.saveAcc(accion).subscribe((res: any) => {
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

  cancelar() {
    window.location.reload();
  }
}
