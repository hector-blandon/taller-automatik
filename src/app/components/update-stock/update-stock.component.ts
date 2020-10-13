import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { Stock } from '../../models/stockModel';

@Component({
  selector: 'app-update-stock',
  templateUrl: './update-stock.component.html',
  styleUrls: ['./update-stock.component.css'],
})
export class UpdateStockComponent implements OnInit {
  show = false;

  constructor(private stockService: StockService) {}

  saveStock(id: string, quantity: number) {
    let stock: Stock = { id, quantity };
    this.stockService.saveStock(stock).subscribe((result: any) => {
      console.log(result);
      this.show = result;
    });
  }

  ngOnInit(): void {}
}
