import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/clienteService';
import { RegClienteComponent } from './reg-cliente.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table-list-cliente',
  templateUrl: './table-list-cliente.component.html',
  styleUrls: ['./table-list-cliente.component.css']
})
export class TableListClienteComponent implements OnInit {
public idTaller = 1;
  clientes = [];
  constructor(private clienteService: ClienteService,
              public dialog: MatDialog, private router:Router) { }

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
  eliminarCliente(idCliente: number){
    Swal.fire({
      title: "Eliminar Cliente",
      text: "¿Estás seguro que deseas eliminar el cliente?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
  })
  .then(resultado => {
      if (resultado.value) {
        this.clienteService.delete(idCliente).subscribe((res :any)=>{
          Swal.fire({
            icon: 'success',
            title: res.mensaje,
            showConfirmButton: true,
            timer: 30000
          });
          window.location.reload();
        })
      } else {
        window.location.reload();
      }
  });
}

  openDashboardCliente(idCliente: number){
    this.router.navigate(['/dashboardClientes/'+ `${idCliente}`]);

  }
}
