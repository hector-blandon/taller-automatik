import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Admin } from '../../models/adminModel';



@Component({
  selector: 'app-registro-admin',
  templateUrl: './registrar-admin.component.html',
  styleUrls: ['./registrar-admin.component.css'],
})
export class RegistroAdminComponent implements OnInit {


  public primerN: string;
  public apellido: string;
  public email: string;
  public password: string;
  public nit: string;
  public mostrar = false;
  public empty = false;
  
  constructor(private adminService: AdminService)
   {}

   saveA( primerN: string, apellido: string, nit: string, email: string, password: string)
   {
    if (primerN == null || apellido == null || nit == null || email == null || password == null)
  {
    this.empty = true;

  }
    else
    {
    let admin: Admin = {primerN , apellido, nit, email, password};
    this.adminService.saveA(admin).subscribe((res: any) => {
      console.log(res);
      this.mostrar = res;

    });
  }
   }
  ngOnInit(): void {}

}