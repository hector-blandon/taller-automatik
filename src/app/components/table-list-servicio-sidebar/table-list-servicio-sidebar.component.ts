import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import Swal from 'sweetalert2';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

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
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.servicioService.getAllT(this.idTaller).subscribe((resp) => {
      console.log(resp), (this.servicios = resp);
    });
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

  openDashboardServicio(id: number, idCliente: number, idVehiculo: number) {
    this.router.navigate([
      '/dashboardServicio/' +
        `${id}` +
        '/' +
        `${idCliente}` +
        '/' +
        `${idVehiculo}`,
    ]);
  }
}
