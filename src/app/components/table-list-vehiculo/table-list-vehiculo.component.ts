import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../services/vehiculo.service';

@Component({
  selector: 'app-table-list-vehiculo',
  templateUrl: './table-list-vehiculo.component.html',
  styleUrls: ['./table-list-vehiculo.component.css']
})
export class TableListVehiculoComponent implements OnInit {

  vehiculos = [];
  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.vehiculoService.getVehiculos()
      .subscribe( resp => {
        console.log(resp),
        this.vehiculos = resp;
      });
  }

}
