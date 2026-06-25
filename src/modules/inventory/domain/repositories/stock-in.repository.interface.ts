import { StockIn } from '../entities/stock-in.entity';

export interface IStockInRepository {
  findById(id: string): Promise<StockIn | null>;
  save(stockIn: StockIn): Promise<StockIn>;
}

export const STOCK_IN_REPOSITORY = Symbol('IStockInRepository');
