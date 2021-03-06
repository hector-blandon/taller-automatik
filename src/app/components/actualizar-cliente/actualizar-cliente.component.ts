import { Component, OnInit,Inject } from '@angular/core';
import { ClienteService } from '../../services/clienteService';
import { ClienteModel } from '../../models/cliente.model';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css'],
})
export class ActualizarClienteComponent implements OnInit {

  nombre:string = '';
  apellido:string = '';
  telefono : string = '';
  correo : string ='';
  id : number;

  constructor(private clienteService: ClienteService, public dialogRef: MatDialogRef<ActualizarClienteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.traerDatos();
  }

  traerDatos(){

    this.id = this.data.idCliente;
    console.log('data',this.id);
    this.clienteService.getId(this.id).subscribe(
      (result : any)=>{
        console.log('entra al result',result),
        this.nombre = result.nombre,
        this.apellido = result.apellido,
        this.telefono = result. telefono,
        this.correo = result.correo
      }
    );
    console.log('nombre',this.nombre);
    

  }

  cambiarDatos(nombre: string, apellido:string, correo: string, telefono : string){
    let datos : any = {nombre,apellido,correo,telefono};

    this.clienteService.update(datos,this.id).subscribe((res:any)=>{
      if(res.correcto){
        Swal.fire({
          icon: 'success',
          title: res.mensaje,
          showConfirmButton: true,
          timer: 30000
        });
        this.delay(3000);  
        window.location.reload();

      }
      else{
        Swal.fire({
          icon: 'warning',
          title: res.mensaje,
          showConfirmButton: true,
          timer: 30000
        });
        this.delay(3000);
        window.location.reload();

      }
    })
    
  }
  cancelar(){
    window.location.reload();
  }
  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
