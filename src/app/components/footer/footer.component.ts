import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{

anio: number;
empresa = 'Latam Software';

constructor(){
  this.anio = new Date().getFullYear();
}
}
