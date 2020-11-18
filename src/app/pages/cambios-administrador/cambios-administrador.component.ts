import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AdminService} from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cambios-administrador',
  templateUrl: './cambios-administrador.component.html',
  styleUrls: ['./cambios-administrador.component.css']
})
export class CambiosAdministradorComponent implements OnInit {

  nombre:string = '';
  apellido:string = '';
  telefono : string = '';
  correo : string ='';
  id : number;

  constructor(private adminService : AdminService, public dialogRef: MatDialogRef<CambiosAdministradorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    
  }

  ngOnInit(): void {
    this.traerDatos();
  }

  traerDatos(){

    this.id = this.data.idAdmin;
    console.log('data',this.id);
    this.adminService.getId(this.id).subscribe(
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

    this.adminService.update(datos,this.id).subscribe((res:any)=>{
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
