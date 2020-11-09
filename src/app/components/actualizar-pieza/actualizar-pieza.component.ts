import { Component, OnInit } from '@angular/core';
import { PiezaService } from 'src/app/services/pieza.service';
import { PiezaModel } from '../../models/piezaModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-pieza',
  templateUrl: './actualizar-pieza.component.html',
  styleUrls: ['./actualizar-pieza.component.css'],
})
export class ActualizarPiezaComponent implements OnInit {
  pieza: PiezaModel = {
    nombre: null,
    cantidad: null,
    valor: null,
    codigo: null,
  };

  constructor(private piezaService: PiezaService) {}

  ngOnInit(): void {
    let id = 3;
    this.piezaService.getId(id).subscribe((res: any) => {
      this.pieza = res;
    });
  }

  update(valor: number, cantidad: number) {
    if (valor == null || cantidad == null) {
      Swal.fire({
        icon: 'warning',
        title: 'Debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 5000,
      });
    } else {
      this.pieza.valor = valor;
      this.pieza.cantidad = cantidad;
      this.piezaService.update(this.pieza, '6').subscribe((res: any) => {
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
