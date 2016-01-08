import {Component} from 'angular2/core';
import {PriceUpdate} from '../model/stock-model';
import {PricingService} from '../pricing/price-publisher-service';
import {StockItemService} from '../stocks/stock-item.service';

@Component({
  selector: 'stock-pricer',
  templateUrl: 'app/pricing/pricing-component.html'
})
export class PricingComponent {

  public tick: PriceUpdate = {"code": 'ABC', "price": 123};
  public message: string = '...';

  constructor(
    private _publisher: PricingService,
    private _stockitemService: StockItemService) { }

  onSubmit() {
      this.message = "published message " + this.tick.code + " with a price of " + this.tick.price;
      this._publisher.publishPriceChange(this.tick);
      // Increment the price so I can submit price changes repeatedly
      this.tick.price++;
  }

  updateCount() : number {
    return this._stockitemService.getPriceUpdateCount();
  }
}
