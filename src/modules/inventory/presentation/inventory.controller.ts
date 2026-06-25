import { Controller, Post, Get, Body } from '@nestjs/common';
import { CreateStockInUseCase } from '../application/use-cases/create-stock-in.use-case';
import { CreateStockOutUseCase } from '../application/use-cases/create-stock-out.use-case';
import { CreateStockInDto } from '../application/dtos/create-stock-in.dto';
import { CreateStockOutDto } from '../application/dtos/create-stock-out.dto';

@Controller()
export class InventoryController {
  constructor(
    private readonly createStockIn: CreateStockInUseCase,
    private readonly createStockOut: CreateStockOutUseCase,
  ) {}

  @Post('stock-in')
  stockIn(@Body() dto: CreateStockInDto) {
    return this.createStockIn.execute(dto);
  }

  @Post('stock-out')
  stockOut(@Body() dto: CreateStockOutDto) {
    return this.createStockOut.execute(dto);
  }

  @Get('inventory')
  getInventory() {
    // TODO: gọi use-case
  }
}
