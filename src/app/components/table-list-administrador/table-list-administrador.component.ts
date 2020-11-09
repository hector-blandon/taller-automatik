import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-table-list-administrador',
  templateUrl: './table-list-administrador.component.html',
  styleUrls: ['./table-list-administrador.component.css']
})
export class TableListAdministradorComponent implements OnInit {

  administradores = [];
  constructor(private adminService: AdminService, private modalService: NgbModal) { }

  @ViewChild("modalAgregarAdministrador", {static: false}) modalAgregarAdministrador: TemplateRef<any>;

  ngOnInit() {

    this.adminService.getAdministradores()
      .subscribe( resp => {
        console.log(resp),
        this.administradores = resp;
      });
 
  }

}
