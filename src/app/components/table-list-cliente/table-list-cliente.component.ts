import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/clienteService';

@Component({
  selector: 'app-table-list-cliente',
  templateUrl: './table-list-cliente.component.html',
  styleUrls: ['./table-list-cliente.component.css']
})
export class TableListClienteComponent implements OnInit {
public idTaller = 1;
  clientes = [];
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {

    this.clienteService.getAll(this.idTaller)
      .subscribe( resp => {
        console.log(resp),
        this.clientes = resp;
      });
  }

}
