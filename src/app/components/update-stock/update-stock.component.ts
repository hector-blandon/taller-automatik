import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css'],
})
export class UpdateStockComponent implements OnInit {
  id: string;
  quantity: number;
  show = false;

  constructor() {}

  ngOnInit(): void {}

  updateStock(id: string, quantity: number) {
    this.id = id;
    this.quantity = quantity;

    this.show = true;
  }
}
