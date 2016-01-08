# Angular2 async pub/sub example
Sample to show how pub/sub can work in angular2 with rxjs.

This demo has 2 parts: A simple Component to represent stocks (Google, IBM and Microsoft) and a Stock Price Updater. When you update a stock price with the submit button a message is published with the stock code and the updated price. The StockItemService subscribes to stock price changes and applies the updates to the target stock item, with a 2 second delay. You can submit several updates in quick succession and see the target stock price catch up.

Designed to allow me to learn:
 * Angular2 (beta 0) with TypeScript
 * RxJS
 * A Pub/Sub interface

There are 2 key methods, both on the PricingService: The first, **publishPriceChange** allows price change messages (of type **PriceUpdate**) to be published. The second is the **subscribe** method. This allows interested parties to be informed when new messages have been published. The PricingComponent does the publishing and the StockItemService is a subscriber. The pub/sub interface is intended to show how publishers can be independent from subscribers and vice-versa. In addition the *types* used by the publishers and subscribers are application types. The intention is to not allow the implementation types to leak out into the application.

Issues
------
 - I'm not sure the (setTimeout) delay correctly demonstrates the async behaviour of the message bus. It might just be showing how setTimeout works.
 - I'm not sure if/how to replace the reference to the bound callback **this.priceUpdatedEvent.bind(this)** with a 'fat arrow'.
