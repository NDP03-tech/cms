import { BaseEntity } from '../../../../shared/domain/base.entity';
import { BusinessRuleException } from '../../../../shared/exceptions/domain.exception';

export class InventoryBalance extends BaseEntity {
  readonly productId: string;
  readonly quantity: number;

  decreaseQuantity(amount: number): InventoryBalance {
    if (this.quantity < amount) {
      throw new BusinessRuleException(
        `Tồn kho không đủ. Hiện có: ${this.quantity}, cần xuất: ${amount}`,
      );
    }
    return Object.assign(Object.create(Object.getPrototypeOf(this)), {
      ...this,
      quantity: this.quantity - amount,
    });
  }
}
