import { Inject, Injectable } from '@nestjs/common';
import { Product } from 'modules/products/domain/entities/product.entity';
import { PRODUCT_REPOSITORY } from 'modules/products/domain/repositories/product.repository.interface';
import type { IProductRepository } from 'modules/products/domain/repositories/product.repository.interface';
import { ProductFiltersInput } from '../dtos/product-filters.input';
@Injectable()
export class ListProductsUseCase {
  private constructor(
    @Inject(PRODUCT_REPOSITORY) private readonly repo: IProductRepository,
  ) {}

  async execute(filters?: ProductFiltersInput): Promise<Product[]> {
    return this.repo.findAll(filters);
  }
}
