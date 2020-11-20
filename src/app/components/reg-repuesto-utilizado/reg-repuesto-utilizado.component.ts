import { Component, OnInit, Inject } from '@angular/core';
import { ServicioService } from 'src/app/services/servicio.service';
import { RepuestoUtilizado } from 'src/app/models/repuesto.model';
import Swal from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reg-repuesto-utilizado',
  templateUrl: './reg-repuesto-utilizado.component.html',
  styleUrls: ['./reg-repuesto-utilizado.component.css'],
})
export class RegRepuestoUtilizadoComponent implements OnInit {
  piezas = [];
  idPieza: number;

  constructor(
    public servicioService: ServicioService,
    public dialogRef: MatDialogRef<RegRepuestoUtilizadoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    const idTaller = 1;
    this.servicioService.getAllPiezas(idTaller).subscribe((resp) => {
      console.log(resp), (this.piezas = resp);
    });
  }

  agregarRep(cantidad: number) {
    if (cantidad == null) {
      Swal.fire({
        icon: 'warning',
        title: 'debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 5000,
      });
    } else {
      const idServicio = this.data;
      const idPieza = this.idPieza;

      const repuesto: RepuestoUtilizado = { cantidad, idPieza, idServicio };
      this.servicioService.saveRep(repuesto).subscribe((res: any) => {
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

  guardarPiezaSeleccionada(event) {
    const i = event.target.value;
    const pieza = this.piezas[i - 1];
    this.idPieza = pieza.idPieza;
  }
}
