import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-table-list-servicio-sidebar',
  templateUrl: './table-list-servicio-sidebar.component.html',
  styleUrls: ['./table-list-servicio-sidebar.component.css'],
})
export class TableListServicioSidebarComponent implements OnInit {
  public idTaller = 1;
  servicios = [];

  constructor(
    private servicioService: ServicioService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.servicioService.getAllT(this.idTaller).subscribe((resp) => {
      console.log(resp), (this.servicios = resp);
    });
  }

  update(id: number) {
    console.log(id);
  }

  archive(id: number) {
    this.servicioService.archive(id).subscribe((res: any) => {
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
