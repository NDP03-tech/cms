import { Injectable, Inject } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { INVENTORY_BALANCE_REPOSITORY } from '../../domain/repositories/inventory-balance.repository.interface';
import { InventoryDomainService } from '../../domain/services/inventory-domain.service';
import { CreateStockOutDto } from '../dtos/create-stock-out.dto';
import type { IInventoryBalanceRepository } from '../../domain/repositories/inventory-balance.repository.interface';
@Injectable()
export class CreateStockOutUseCase {
  constructor(
    @Inject(INVENTORY_BALANCE_REPOSITORY)
    private readonly balanceRepository: IInventoryBalanceRepository,
    private readonly inventoryDomainService: InventoryDomainService,
    private readonly dataSource: DataSource,
  ) {}

  async execute(dto: CreateStockOutDto): Promise<void> {
    await this.dataSource.transaction(async (manager) => {
      for (const item of dto.items) {
        // 1. SELECT FOR UPDATE → lock tồn kho
        const balance = await this.balanceRepository.findByProductIdWithLock(
          item.productId,
        );

        // 2. Domain service kiểm tra tồn âm

        // 3. Tạo stock_out, stock_out_items
        // 4. Cập nhật inventory_balance
        // 5. Tạo cash_transaction (doanh thu)
      }
      throw new Error('Not implemented');
    });
  }
}
