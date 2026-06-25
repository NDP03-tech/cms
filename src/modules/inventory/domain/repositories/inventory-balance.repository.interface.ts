import { InventoryBalance } from '../entities/inventory-balance.entity';

export interface IInventoryBalanceRepository {
  findByProductIdWithLock(productId: string): Promise<InventoryBalance | null>;
  save(balance: InventoryBalance): Promise<InventoryBalance>;
}

export const INVENTORY_BALANCE_REPOSITORY = Symbol('IInventoryBalanceRepository');
