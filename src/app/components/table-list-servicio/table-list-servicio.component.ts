import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../../services/servicio.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { RegServicioComponent } from './reg-servicio.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table-list-servicio',
  templateUrl: './table-list-servicio.component.html',
  styleUrls: ['./table-list-servicio.component.css'],
})
export class TableListServicioComponent implements OnInit {
  idVehiculo: number;
  idCliente: number;
  servicios = [];

  constructor(
    private servicioService: ServicioService,
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.idVehiculo = params['idVehiculo'];
      this.idCliente = params['idCliente'];
    });

    this.servicioService.getAllV(this.idVehiculo).subscribe((resp) => {
      console.log(resp), (this.servicios = resp);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegServicioComponent, {
      width: '500px',
      data: { idVehiculo: this.idVehiculo, idCliente: this.idCliente },
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

  openDashboardServicio(id: number) {
    this.router.navigate(['/dashboardServicio/' + `${id}`]);
  }
}
