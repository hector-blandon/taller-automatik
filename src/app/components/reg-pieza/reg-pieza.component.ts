import { Component, OnInit } from '@angular/core';
import { PiezaService } from '../../services/pieza.service';
import Swal from 'sweetalert2';
import { PiezaModel } from '../../models/piezaModel';

@Component({
  selector: 'app-reg-pieza',
  templateUrl: './reg-pieza.component.html',
  styleUrls: ['./reg-pieza.component.css'],
})
export class RegPiezaComponent implements OnInit {
  public nombre: string;
  public cantidad: number;
  public valor: number;
  public codigo: string;

  constructor(private piezaService: PiezaService) {}

  ngOnInit(): void {}

  save(nombre: string, cantidad: number, valor: number, codigo: string) {
    if (nombre == '' || cantidad == null || valor == null || codigo == '') {
      Swal.fire({
        icon: 'warning',
        title: 'debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 30000,
      });
    } else {
      let pieza: PiezaModel = { nombre, cantidad, valor, codigo };
      this.piezaService.save(pieza).subscribe((res: any) => {
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
