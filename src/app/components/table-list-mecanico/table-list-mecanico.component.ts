import { Component, OnInit } from '@angular/core';
import { MecanicoService } from '../../services/MecanicoService';

@Component({
  selector: 'app-table-list-mecanico',
  templateUrl: './table-list-mecanico.component.html',
  styleUrls: ['./table-list-mecanico.component.css']
})
export class TableListMecanicoComponent implements OnInit {

  mecanicos = [];
  constructor(private mecanicoService: MecanicoService) { }

  ngOnInit() {

    this.mecanicoService.getMecanicos()
      .subscribe( resp => {
        console.log(resp),
        this.mecanicos = resp;
      });
  }

}
