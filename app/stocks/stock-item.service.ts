import {Injectable} from 'angular2/core';

import {StockItem, PriceUpdate} from '../model/stock-model';
import {STOCKS} from './mock-stocks';
import {PricingService} from '../pricing/price-publisher-service';

@Injectable()
export class StockItemService {

  private count: number = 0;

  constructor(private _subcriber: PricingService) {
    this._subcriber.subscribe(this.priceUpdatedEvent.bind(this));
  }

  getPriceUpdateCount() {
    return this.count;
  }

  getStocks() {
    return Promise.resolve(STOCKS);
  }

  priceUpdatedEvent(newPrice: PriceUpdate) {
    this.count++;
  }

}
