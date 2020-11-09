import { Component, OnInit } from '@angular/core';
import { PiezaService } from '../../services/pieza.service';

@Component({
  selector: 'app-table-list-pieza',
  templateUrl: './table-list-pieza.component.html',
  styleUrls: ['./table-list-pieza.component.css']
})
export class TableListPiezaComponent implements OnInit {
public idTaller = 1;
  piezas = [];
  constructor(private piezaService: PiezaService) { }

  ngOnInit() {
    this.piezaService.getAll(this.idTaller)
      .subscribe( resp => {
        console.log(resp),
        this.piezas = resp;
      });
  }

}
