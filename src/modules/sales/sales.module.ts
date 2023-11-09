import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sales } from './entities/sales.entities';
import { SalesController } from './controller/sales.controller';
import { SalesService } from './services/sales.services';

@Module({
  imports: [TypeOrmModule.forFeature([Sales])],
  controllers: [SalesController],
  providers: [SalesService],
})
export class SalesModule {}
