import { InventoryBalance } from '../entities/inventory-balance.entity';

export class InventoryDomainService {
  validateStockOut(balance: InventoryBalance, requestedQty: number): void {
    balance.decreaseQuantity(requestedQty); // throws nếu âm kho
  }
}
