import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { RegAdministradorComponent } from './reg-administrador.component';

@Component({
  selector: 'app-table-list-administrador',
  templateUrl: './table-list-administrador.component.html',
  styleUrls: ['./table-list-administrador.component.css']
})
export class TableListAdministradorComponent implements OnInit {
public idTaller = 1;
  administradores = [];
  constructor(private adminService: AdminService,
              public dialog: MatDialog) { }

  ngOnInit() {

    this.adminService.getAll(this.idTaller)
      .subscribe( resp => {
        console.log(resp),
        this.administradores = resp;
      });
 
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegAdministradorComponent, {
      width: '500px',
      data: {}
    });

  }

}
