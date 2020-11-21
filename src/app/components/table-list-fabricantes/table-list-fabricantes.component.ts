import { Component, OnInit } from '@angular/core';
import { Fabricante } from '../../models/fabricanteModel';
import { FabricanteService } from '../../services/fabricante.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegFabricanteComponent } from './reg-fabricante.component';


@Component({
  selector: 'app-table-list-fabricantes',
  templateUrl: './table-list-fabricantes.component.html',
  styleUrls: ['./table-list-fabricantes.component.css']
})
export class TableListFabricantesComponent implements OnInit {

  fabricantes = [];

  constructor(private fabricanteService: FabricanteService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.fabricanteService.getAll()
      .subscribe(resp => {
        console.log(resp),
          this.fabricantes = resp;
      });
  }

  agregar(): void {
    const dialogRef = this.dialog.open(RegFabricanteComponent, {
      width: '500px',
      data: {}
    });

  }
}
