import { Money } from '../value-objects/money.vo';
import { SKU } from '../value-objects/sku.vo';

export interface productPros {}

export class Product {
  private constructor(
    private readonly id: string,
    private readonly sku: SKU,
    private readonly name: string,
    private readonly unit: string,
    private readonly cost_price: Money,
    private readonly is_active: boolean,
  ) {}

  static create();
}
