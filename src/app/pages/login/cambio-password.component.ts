import { Component, OnInit,Inject } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService } from '../../services/admin.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import {DashboardComponent} from 'src/app/pages/dashboard/dashboard.component';
import { Router } from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-cambio-password',
  templateUrl: './cambio-password.component.html',
  styleUrls: ['./cambio-password.component.css']
})
export class CambioPasswordComponent implements OnInit {
  //  idAdmin : number
  constructor(private adminService: AdminService,private router: Router,public dialogRef: MatDialogRef<CambioPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {  
      console.log('data',data);
   }

  ngOnInit(): void {
  }


  cambiarPassword(nuevoPassword : string , confirmacion : string){
    let idAdmin = this.data.idAdmin;

    if ( nuevoPassword == '' || confirmacion == '') {
      Swal.fire({
        icon: 'warning',
        title: 'debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 5000
  
      });
    } else {
    
  
      let credenciales: any = { idAdmin,nuevoPassword};
      this.adminService.cambiarPassword(credenciales).subscribe((res: any) => {
        console.log(res);
        
        if(res.correcto){
          Swal.fire({
            icon: 'success',
            title: res.mensaje,
            showConfirmButton: true,
            timer: 30000
          });
          this.delay(5000);
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
        
        
      });
    }
  }
  cancelar(){
    window.location.reload();
  }
  async delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
