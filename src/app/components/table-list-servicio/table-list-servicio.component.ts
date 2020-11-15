import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegServicioComponent } from './reg-servicio.component';

@Component({
  selector: 'app-table-list-servicio',
  templateUrl: './table-list-servicio.component.html',
  styleUrls: ['./table-list-servicio.component.css'],
})
export class TableListServicioComponent implements OnInit {
  public idTaller = 1;
  servicios = [];
  constructor(
    private servicioService: ServicioService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.servicioService.getAll(this.idTaller).subscribe((resp) => {
      console.log(resp), (this.servicios = resp);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegServicioComponent, {
      width: '500px',
      data: {},
    });
  }
}
