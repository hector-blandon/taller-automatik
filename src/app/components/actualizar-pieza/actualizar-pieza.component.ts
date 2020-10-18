import { Component, OnInit } from '@angular/core';
import { PiezaService } from 'src/app/services/pieza.service';
import { PiezaModel } from '../../models/piezaModel';

@Component({
  selector: 'app-actualizar-pieza',
  templateUrl: './actualizar-pieza.component.html',
  styleUrls: ['./actualizar-pieza.component.css'],
})
export class ActualizarPiezaComponent implements OnInit {
  show = false;
  empty = false;
  res = '';

  constructor(private piezaService: PiezaService) {}

  // actualizarPieza(id: string, quantity: number) {
  //   if (id == null || quantity == null) {
  //     this.empty = true;
  //   } else {
  //     let pieza: PiezaModel = { id, quantity };
  //     this.piezaService.actualizarPieza(pieza).subscribe((result: any) => {
  //       console.log(result);
  //       this.res = result;
  //       this.show = true;
  //     });
  //   }
  // }

  ngOnInit(): void {}
}
