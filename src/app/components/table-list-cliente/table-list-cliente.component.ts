import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/clienteService';
import { RegClienteComponent } from './reg-cliente.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-table-list-cliente',
  templateUrl: './table-list-cliente.component.html',
  styleUrls: ['./table-list-cliente.component.css']
})
export class TableListClienteComponent implements OnInit {
public idTaller = 1;
  clientes = [];
  constructor(private clienteService: ClienteService,
              public dialog: MatDialog) { }

  ngOnInit() {

    this.clienteService.getAll(this.idTaller)
      .subscribe( resp => {
        console.log(resp),
        this.clientes = resp;
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegClienteComponent, {
      width: '500px',
      data: {}
    });

  }
}
