import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo.model';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-agregar-vehiculo',
  templateUrl: './agregar-vehiculo.component.html',
  styleUrls: ['./agregar-vehiculo.component.css'],
})
export class AgregarVehiculoComponent implements OnInit {
  public matricula: string;
  public marca: string;
  public color: string;
  public modelo: string;
  public idcliente: string;
  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {}

  save(
    matricula: string,
    marca: string,
    color: string,
    modelo: string,
    idCliente: number
  ) {
    if (
      matricula === '' ||
      marca === '' ||
      color === '' ||
      modelo === '' ||
      idCliente == null
    ) {
      Swal.fire({
        icon: 'warning',
        title: 'debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 5000,
      });
    } else {
      let vehiculo: Vehiculo = { matricula, marca, color, modelo, idCliente };
      this.vehiculoService.save(vehiculo).subscribe((res: any) => {
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
