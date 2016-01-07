import {Component} from 'angular2/core';

import {StockItem} from '../model/stock-model';
import {PricingService} from '../pricing/price-publisher-service';

@Component({
  selector: 'stock-item',
  inputs: ['stock'],
  templateUrl: 'app/stocks/stock-item.component.html'
})
export class StockItemComponent {
  public stock: StockItem;

  constructor(private _pricingService: PricingService) {
    this._pricingService.subscribe(this.priceUpdatedEvent);
  }

  priceUpdatedEvent(newPrice) {
    /*
     * This doesn't work because 'this' is a Subscription
     * rather than the Component. Help!
     */
    //if (newPrice.code === this.stock.code) {
    //  this.stock.price = newPrice.price;
    //}
  }

}
