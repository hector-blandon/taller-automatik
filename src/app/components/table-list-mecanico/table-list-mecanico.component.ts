import { Component, OnInit } from '@angular/core';
import { MecanicoService } from '../../services/MecanicoService';

@Component({
  selector: 'app-table-list-mecanico',
  templateUrl: './table-list-mecanico.component.html',
  styleUrls: ['./table-list-mecanico.component.css']
})
export class TableListMecanicoComponent implements OnInit {
public idTaller =1;
  mecanicos = [];
  constructor(private mecanicoService: MecanicoService) { }

  ngOnInit() {

    this.mecanicoService.getAll(this.idTaller)
      .subscribe( resp => {
        console.log(resp),
        this.mecanicos = resp;
      });
  }

}
