/*
 * A StockItem represents stock details with an optional price
 */
export interface StockItem {
  id: number;
  name: string;
  code: string;
  price?: number;
}

/*
 * A PriceUpdate represents a stock code and a new price
 */
export interface PriceUpdate {
  price: number;
  code: string;
}
