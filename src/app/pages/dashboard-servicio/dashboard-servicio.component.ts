import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo.model';
import { ClienteModel } from '../../models/cliente.model';
import { ServicioService } from '../../services/servicio.service';
import { RegRepuestoUtilizadoComponent } from 'src/app/components/reg-repuesto-utilizado/reg-repuesto-utilizado.component';
import { RegAccionRealizadaComponent } from 'src/app/components/reg-accion-realizada/reg-accion-realizada.component';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard-servicio',
  templateUrl: './dashboard-servicio.component.html',
  styleUrls: ['./dashboard-servicio.component.css'],
})
export class DashboardServicioComponent implements OnInit {
  idServicio: number;
  kilometraje = 0;
  falla = '';
  cliente: ClienteModel;
  vehiculo: Vehiculo;
  repuestos = [];
  acciones = [];
  RepVacios = false;
  AccVacias = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicioService: ServicioService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recibirId();
  }

  recibirId() {
    this.activatedRoute.params.subscribe((params) => {
      this.idServicio = params['idServicio'];
      this.servicioService.getId(this.idServicio).subscribe((result: any) => {
        this.kilometraje = result.kilometraje;
        this.falla = result.falla;
      });

      const idCliente = params['idCliente'];
      this.servicioService.getCliente(idCliente).subscribe((result: any) => {
        this.cliente = result;
      });

      const idVehiculo = params['idVehiculo'];
      this.servicioService.getVehiculo(idVehiculo).subscribe((result: any) => {
        this.vehiculo = result;
      });
    });

    this.servicioService.getAllRep(this.idServicio).subscribe((res: any) => {
      res.forEach((element) => {
        this.repuestos.push(element);
      });
      if (this.repuestos.length === 0) {
        this.RepVacios = true;
      }
    });

    this.servicioService.getAllAcc(this.idServicio).subscribe((res: any) => {
      res.forEach((element) => {
        this.acciones.push(element);
      });
      if (this.acciones.length === 0) {
        this.AccVacias = true;
      }
    });
  }

  agregarRepuesto() {
    const dialogRef = this.dialog.open(RegRepuestoUtilizadoComponent, {
      width: '500px',
      data: { idServicio: this.idServicio },
    });
  }

  agregarAccion() {
    const dialogRef = this.dialog.open(RegAccionRealizadaComponent, {
      width: '500px',
      data: { idServicio: this.idServicio },
    });
  }
}
