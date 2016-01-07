# Angular2 async pub/sub example
Sample to show how pub/sub can work in angular2 with rxjs.

This demo has 2 parts: A simple Component to represent stocks (Google, IBM and Microsoft) and a Stock Price Updater. When you update a stock price with the submit button a message is published with the stock code and the updated price. The StockItemService subscribes to stock price changes and applies the updates to the target stock item, with a 2 second delay. You can submit several updates in quick succession and see the target stock price catch up.

Designed to allow me to learn:
 * Angular2 (beta 0) with TypeScript
 * RxJS
 * A Pub/Sub interface (The pub/sub interface is intended to show how publishers can be independent from subscribers and vice-versa.)

Issues
------
 - I'm not the delay correctly demonstrates the async behaviour of the message bus. It might just be showing how setTimeout works.
 - There are 4 subscriptions established. One for the StockItemService and 1 for each of the StockItemComponents. The StockItemService updates the prices. I might want the StockItemComponent to update the price, but I haven't worked out how to fix the 'this' problem in the subscription callback. (See comments in stock-item.component.ts)
 
