import { Component, OnInit } from '@angular/core';
import { PiezaService } from '../../services/pieza.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { RegPiezaComponent } from './reg-pieza.component';

@Component({
  selector: 'app-table-list-pieza',
  templateUrl: './table-list-pieza.component.html',
  styleUrls: ['./table-list-pieza.component.css']
})
export class TableListPiezaComponent implements OnInit {
public idTaller = 1;
  piezas = [];
  constructor(private piezaService: PiezaService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.piezaService.getAll(this.idTaller)
      .subscribe( resp => {
        console.log(resp),
        this.piezas = resp;
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegPiezaComponent, {
      width: '500px',
      data: {}
    });

  }

}
