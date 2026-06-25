export class CreateStockOutItemDto {
  productId: string;
  quantity: number;
  unitPrice: number;
}

export class CreateStockOutDto {
  customerId: string;
  items: CreateStockOutItemDto[];
}
