import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import Swal from 'sweetalert2';
import { AdminService } from '../../services/admin.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {RecuperacionContraseniaComponent} from './recuperacion-contrasenia.component';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private adminService: AdminService,private router: Router, public dialog: MatDialog) { }
login(correo : string, contrasenia:string){
  if ( correo == '' || contrasenia == '') {
    Swal.fire({
      icon: 'warning',
      title: 'debe diligenciar todos los campos!',
      showConfirmButton: true,
      timer: 5000

    });
  } else {

    let credenciales: any = { correo, contrasenia};
    this.adminService.login(credenciales).subscribe((res: any) => {
      if(res.correcto){
        Swal.fire({
          icon: 'success',
          title: res.mensaje,
          showConfirmButton: true,
          timer: 30000
        });
        this.delay(3000);  
        console.log('idadmin');
        console.log(res.resp.idAdmin);
        
        
        this.router.navigate(['/dashboard/'+ `${res.resp.idAdmin}`]);

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
      
      
    });
  }
  
}
async delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}
  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(RecuperacionContraseniaComponent, {
      width: '500px',
      data: {}
    });

  }
  

}