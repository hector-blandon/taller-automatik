import { Component, OnInit } from '@angular/core';
import { MecanicoService } from '../../services/MecanicoService';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RegMecanicoComponent } from './reg-mecanico.component';

@Component({
  selector: 'app-table-list-mecanico',
  templateUrl: './table-list-mecanico.component.html',
  styleUrls: ['./table-list-mecanico.component.css']
})
export class TableListMecanicoComponent implements OnInit {
  public idTaller = 1;
  mecanicos = [];
  constructor(private mecanicoService: MecanicoService,
    public dialog: MatDialog) { }

  ngOnInit() {

    this.mecanicoService.getAll(this.idTaller)
      .subscribe(resp => {
        console.log(resp),
          this.mecanicos = resp;
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(RegMecanicoComponent, {
      width: '500px',
      data: {}
    });

  }

}
