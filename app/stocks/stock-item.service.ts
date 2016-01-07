import {Injectable} from 'angular2/core';

import {StockItem, PriceUpdate} from '../model/stock-model';
import {STOCKS} from './mock-stocks';
import {PricingService} from '../pricing/price-publisher-service';

@Injectable()
export class StockItemService {

  constructor(private _subcriber: PricingService) {
    this._subcriber.subscribe(this.priceUpdatedEvent);
  }

  getStocks() {
    return Promise.resolve(STOCKS);
  }

  priceUpdatedEvent(newPrice: PriceUpdate) {
    setTimeout(() => {
      // Update the relavent StockItem after a delay.
      STOCKS.find( stock => stock.code === newPrice.code).price = newPrice.price;
    }, 2000);
  }

}
