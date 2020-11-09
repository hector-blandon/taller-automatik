import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../services/vehiculo.service';

@Component({
  selector: 'app-table-list-vehiculo',
  templateUrl: './table-list-vehiculo.component.html',
  styleUrls: ['./table-list-vehiculo.component.css']
})
export class TableListVehiculoComponent implements OnInit {
public idTaller = 0;
  vehiculos = [];
  constructor(private vehiculoService: VehiculoService) { }

  ngOnInit() {
    this.vehiculoService.getAll(this.idTaller)
      .subscribe( resp => {
        console.log(resp),
        this.vehiculos = resp;
      });
  }

}
