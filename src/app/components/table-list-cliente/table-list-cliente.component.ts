import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/clienteService';

@Component({
  selector: 'app-table-list-cliente',
  templateUrl: './table-list-cliente.component.html',
  styleUrls: ['./table-list-cliente.component.css']
})
export class TableListClienteComponent implements OnInit {

  clientes = [];
  constructor(private clienteService: ClienteService) { }

  ngOnInit() {

    this.clienteService.getClientes()
      .subscribe( resp => {
        console.log(resp),
        this.clientes = resp;
      });
  }

}
