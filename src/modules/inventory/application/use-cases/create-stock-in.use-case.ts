import { Injectable, Inject } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { IStockInRepository, STOCK_IN_REPOSITORY } from '../../domain/repositories/stock-in.repository.interface';
import { CreateStockInDto } from '../dtos/create-stock-in.dto';

@Injectable()
export class CreateStockInUseCase {
  constructor(
    @Inject(STOCK_IN_REPOSITORY)
    private readonly stockInRepository: IStockInRepository,
    private readonly dataSource: DataSource,
  ) {}

  async execute(dto: CreateStockInDto): Promise<void> {
    await this.dataSource.transaction(async (manager) => {
      // 1. Tạo phiếu nhập
      // 2. Tạo inventory_transaction
      // 3. Cập nhật inventory_balance
      // 4. Tạo cash_transaction (chi phí)
      throw new Error('Not implemented');
    });
  }
}
