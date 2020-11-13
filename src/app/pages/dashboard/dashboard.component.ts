import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AdminService} from 'src/app/services/admin.service';
import {Admin} from 'src/app/models/adminModel';
import {CambioPasswordComponent} from 'src/app/pages/login/cambio-password.component';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';
import { from } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  id : any = '';
  nombre : string = '';
  apellido : string = ' ';
  telefono : string = '';
  correo : string = '';
  
  constructor(public dialog: MatDialog, private router: Router, private activatedRoute: ActivatedRoute, private adminService : AdminService) { }

  ngOnInit(): void {

    this.traerDatosAdministrador();
  }
  
  traerDatosAdministrador(){
    this.activatedRoute.params.subscribe(params => {

      let id = params['idAdmin'];
      
      this.adminService.getId(id).subscribe(
        (result : any)=>{
          this.nombre = result.nombre,
          this.apellido = result.apellido,
          this.telefono = result. telefono,
          this.correo = result.correo,
          this.id = id
        }
      )
    })
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(CambioPasswordComponent, {
      width: '500px',
      data: { idAdmin : this.id}
    });

  }

  // cambiarContraseña(nuevoPassword){
  //   console.log(nuevoPassword);
    

  // }
  


}
