import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro-admin',
  templateUrl: './registro-admin.component.html',
  styleUrls: ['./registro-admin.component.css'],
})
export class RegistroAdminComponent implements OnInit {


  public primerN: string;
  public apellido: string;
  public email: string;
  public password: string;
  public nit: string;
  public mostrar = false;
 
  constructor() {}

  ngOnInit(): void {}

  
  public guardar(primerN: string, apellido: string, email: string, password: string , nit: string) {
    this.primerN = primerN;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
    this.mostrar = true;
    this.nit = nit;
}
}