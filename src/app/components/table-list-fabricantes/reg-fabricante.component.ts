import { Component, OnInit } from '@angular/core';
import { FabricanteService } from '../../services/fabricante.service';
import { Fabricante } from '../../models/fabricanteModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reg-fabricante',
  templateUrl: './reg-fabricante.component.html',
  styleUrls: ['./reg-fabricante.component.css']
})
export class RegFabricanteComponent implements OnInit {

  public nit: string;
  public nombre: string;
  public direccion: string;
  public telefono: string;
  public email: string;

  constructor(private fabricanteService: FabricanteService) { }

  save(nit: string, nombre: string, direccion: string, telefono: string, email: string) {

    if (nit == '' || nombre == '' || direccion == '' || telefono == '' || email == '' ) {
      Swal.fire({
        icon: 'warning',
        title: 'debe diligenciar todos los campos!',
        showConfirmButton: true,
        timer: 5000

      });
    } else {

      let fabricante: Fabricante = { nit, nombre, direccion, telefono, email};
      this.fabricanteService.save(fabricante).subscribe((res: any) => {
        Swal.fire({
          icon: 'success',
          title: res.mensaje,
          showConfirmButton: true,
          timer: 30000
        });
        window.location.reload();
      });
    }
  }
  ngOnInit(): void {
  }

}
