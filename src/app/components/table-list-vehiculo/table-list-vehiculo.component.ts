import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../services/vehiculo.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { RegVehiculoComponent } from './reg-vehiculo.component';

@Component({
  selector: 'app-table-list-vehiculo',
  templateUrl: './table-list-vehiculo.component.html',
  styleUrls: ['./table-list-vehiculo.component.css']
})
export class TableListVehiculoComponent implements OnInit {
public idTaller = 0;
  vehiculos = [];
  constructor(private vehiculoService: VehiculoService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.vehiculoService.getAll(this.idTaller)
      .subscribe( resp => {
        console.log(resp),
        this.vehiculos = resp;
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegVehiculoComponent, {
      width: '500px',
      data: {}
    });

  }
}
