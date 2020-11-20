import { Component, OnInit,Inject } from '@angular/core';
import { from } from 'rxjs';
import {VehiculoService} from 'src/app/services/vehiculo.service';
import {Vehiculo} from 'src/app/models/vehiculo.model';
import Swal from 'sweetalert2';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-reg-vehiculo',
  templateUrl: './reg-vehiculo.component.html',
  styleUrls: ['./reg-vehiculo.component.css']
})
export class RegVehiculoComponent implements OnInit {

  public matricula: string;
  public marca: string;
  public color: string;
  public modelo: string;


  constructor( public vehiculoService :VehiculoService, public dialogRef: MatDialogRef<RegVehiculoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  crearVehiculo(matricula: string, marca: string, color: string, modelo: string){
    let idCliente: number = this.data.idCliente;
    if (matricula == '' || marca == '' || color == '' || modelo == '') {
      Swal.fire({
        icon: 'warning',
        title: 'debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 5000
      });

    } else {

      let vehiculo: Vehiculo = { matricula, marca, color, modelo, idCliente};
      this.vehiculoService.save(vehiculo).subscribe((res: any) => {
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

  cancelar(){
    window.location.reload();
  }

}
