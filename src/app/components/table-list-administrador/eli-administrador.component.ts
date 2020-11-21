import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './table-list-administrador.component';
import { AdminService } from '../../services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eli-administrador',
  templateUrl: './eli-administrador.component.html',
  styleUrls: ['./eli-administrador.component.css']
})
export class EliAdministradorComponent implements OnInit {

  constructor(public adminService: AdminService, public dialogRef: MatDialogRef<EliAdministradorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

  eliminar(idAdmin: string) {
    this.adminService.delete(idAdmin).subscribe((res: any) =>
      Swal.fire({
        icon: 'success',
        title: res.mensaje,
        showConfirmButton: true,
        timer: 30000
      })
    );
    window.location.reload();
  }

  cancelar() {
    this.dialogRef.close();
  }
}
