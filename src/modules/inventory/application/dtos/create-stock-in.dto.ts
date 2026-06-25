export class CreateStockInItemDto {
  productId: string;
  quantity: number;
  unitPrice: number;
}

export class CreateStockInDto {
  supplierId: string;
  items: CreateStockInItemDto[];
}
