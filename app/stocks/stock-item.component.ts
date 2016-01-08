import {Component} from 'angular2/core';

import {StockItem, PriceUpdate, PriceUpdatedObserver} from '../model/stock-model';
import {PricingService} from '../pricing/price-publisher-service';

@Component({
  selector: 'stock-item',
  inputs: ['stock'],
  templateUrl: 'app/stocks/stock-item.component.html'
})
export class StockItemComponent implements PriceUpdatedObserver {
  public stock: StockItem;

  constructor(private _pricingService: PricingService) {
    this._pricingService.addPriceUpdatedObserver(this);
  }

  priceUpdate(newPrice: PriceUpdate) {
    if (newPrice.code === this.stock.code) {
      this.stock.price = newPrice.price;
    }
  }

}
