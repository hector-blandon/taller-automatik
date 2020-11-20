import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Vehiculo } from 'src/app/models/vehiculo.model';
import { ClienteService } from 'src/app/services/clienteService';
import { VehiculoService } from 'src/app/services/vehiculo.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { RegVehiculoComponent } from 'src/app/components/table-list-vehiculo/reg-vehiculo.component';
import { ActualizarClienteComponent } from 'src/app/components/actualizar-cliente/actualizar-cliente.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard-cliente',
  templateUrl: './dashboard-cliente.component.html',
  styleUrls: ['./dashboard-cliente.component.css'],
})
export class DashboardClienteComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';
  correo: string = '';
  telefono: string = '';
  id: number;
  vehiculos: any = [];
  vacio: boolean = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private vehiculoService: VehiculoService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recibirId();
  }

  recibirId() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['idCliente'];
      this.clienteService.getId(this.id).subscribe((result: any) => {
        (this.nombre = result.nombre),
          (this.apellido = result.apellido),
          (this.telefono = result.telefono),
          (this.correo = result.correo);
      });
    });
    this.vehiculoService.getAll(this.id).subscribe((res: any) => {
      res.forEach((element) => {
        this.vehiculos.push(element);
      });
      if (this.vehiculos.length === 0) {
        this.vacio = true;
      }
    });
    console.log('vehiculos', this.vehiculos);
  }

  openDialogDatos(): void {
    const dialogRef = this.dialog.open(ActualizarClienteComponent, {
      width: '500px',
      data: { idCliente: this.id },
    });
  }
  crearVehiculo(): void {
    const dialogRef = this.dialog.open(RegVehiculoComponent, {
      width: '500px',
      data: { idCliente: this.id },
    });
  }
  eliminarVehiculo(idVehiculo: number) {
    this.vehiculoService.delete(idVehiculo).subscribe((res: any) => {
      Swal.fire({
        icon: 'success',
        title: res.mensaje,
        showConfirmButton: true,
        timer: 30000,
      });
      window.location.reload();
    });
  }

  verServicios(idVehiculo: number, idCliente: number) {
    this.router.navigate([
      '/serviciosVehiculo/' + `${idVehiculo}` + '/' + `${idCliente}`,
    ]);
  }
}
