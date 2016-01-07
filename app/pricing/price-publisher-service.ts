import {Injectable} from 'angular2/core';

import {Subject} from 'rxjs/Rx';
import {PriceUpdate} from '../model/stock-model';

@Injectable()
export class PricingService {

  private _newPrices: Subject<PriceUpdate> = new Subject<PriceUpdate>();

  publishPriceChange(newPrice: PriceUpdate): void {
    this._newPrices.next(newPrice);
  }

  subscribe(handler: ((newPrice: PriceUpdate) => void)) {
    this._newPrices.subscribe(handler);
  }

}
