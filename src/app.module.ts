import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/infrastructure/auth.module';
import { InventoryModule } from './modules/inventory/infrastructure/inventory.module';

@Module({
  imports: [
    AuthModule,
    InventoryModule,
    // TODO: ProductsModule, SuppliersModule, CustomersModule
    // TODO: FinanceModule, ReportsModule, AuditLogModule
  ],
})
export class AppModule {}
