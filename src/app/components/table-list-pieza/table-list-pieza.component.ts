import { Component, OnInit } from '@angular/core';
import { PiezaService } from '../../services/pieza.service';

@Component({
  selector: 'app-table-list-pieza',
  templateUrl: './table-list-pieza.component.html',
  styleUrls: ['./table-list-pieza.component.css']
})
export class TableListPiezaComponent implements OnInit {

  piezas = [];
  constructor(private piezaService: PiezaService) { }

  ngOnInit() {
    this.piezaService.getPiezas()
      .subscribe( resp => {
        console.log(resp),
        this.piezas = resp;
      });
  }

}
