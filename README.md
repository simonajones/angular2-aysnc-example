# angular2-aysnc-example
Sample to show how pub/sub can work in angular2 with rxjs

This demo has 2 parts: A list of stocks (Google, IBM and Microsoft) and a Stock Price Updater.

When you submit a stock price update a message is published with the stock code and the updated price.

The StockItemService subscribes to price changes and applies the updates to the target stock item with a 2 second delay.
