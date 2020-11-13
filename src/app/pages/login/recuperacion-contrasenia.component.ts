import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-recuperacion-contrasenia',
  templateUrl: './recuperacion-contrasenia.component.html',
  styleUrls: ['./recuperacion-contrasenia.component.css']
})
export class RecuperacionContraseniaComponent implements OnInit {

  constructor(private adminService: AdminService,private router: Router) { }

  

  resetPassword(correo : string, nit:string){
    console.log('reset');
    
    if ( correo == '' || nit == '') {
      Swal.fire({
        icon: 'warning',
        title: 'debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 5000
  
      });
    } else {
  
      let credenciales: any = { correo, nit};
      this.adminService.resetPassword(credenciales).subscribe((res: any) => {
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
  ngOnInit(): void {
  }
}
