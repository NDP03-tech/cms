import { Module } from '@nestjs/common';
import { InventoryController } from '../presentation/inventory.controller';
import { CreateStockInUseCase } from '../application/use-cases/create-stock-in.use-case';
import { CreateStockOutUseCase } from '../application/use-cases/create-stock-out.use-case';
import { InventoryDomainService } from '../domain/services/inventory-domain.service';
import { STOCK_IN_REPOSITORY } from '../domain/repositories/stock-in.repository.interface';
import { INVENTORY_BALANCE_REPOSITORY } from '../domain/repositories/inventory-balance.repository.interface';

@Module({
  controllers: [InventoryController],
  providers: [
    CreateStockInUseCase,
    CreateStockOutUseCase,
    InventoryDomainService,
    { provide: STOCK_IN_REPOSITORY, useClass: class {} as any },
    { provide: INVENTORY_BALANCE_REPOSITORY, useClass: class {} as any },
  ],
})
export class InventoryModule {}
