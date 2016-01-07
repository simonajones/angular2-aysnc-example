import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

import {StockItemService} from './stocks/stock-item.service';
import {StockItemComponent} from './stocks/stock-item.component';
import {StockItem} from './model/stock-model';
import {PricingComponent} from './pricing/pricing-component';
import {PricingService} from './pricing/price-publisher-service'

@Component({
  selector: 'async-demo',
  template: `
    <h1>Simple Async Demo</h1>
    <p>This demo has 2 parts: A list of stocks (Google, IBM and Microsoft) and a Stock Price Updater.
    <p>When you submit a stock price update a message is published with the stock code and the updated price.
    <p>The StockItemService subscribes to price changes and applies the updates to the target stock item with a 2 second delay.
    <stock-pricer></stock-pricer>
    <stock-item [stock]="stock" *ngFor="#stock of stocks"></stock-item>
    `,
  styles:[`
  `],
  directives: [StockItemComponent, PricingComponent],
  providers: [StockItemService, PricingService]
})
export class AppComponent implements OnInit {
  public stocks: StockItem[];

  constructor(private _stockitemService: StockItemService) { }

  getStockItems() {
    this._stockitemService.getStocks().then( stocks => this.stocks = <StockItem[]>stocks);
  }

  ngOnInit() {
    this.getStockItems();
  }

}
