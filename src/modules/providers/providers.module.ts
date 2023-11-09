import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Providers } from './entities/providers.entity';
import { ProvidersController } from './controller/providers.controller';
import { ProvidersService } from './services/providers.services';

@Module({
  imports: [TypeOrmModule.forFeature([Providers])],
  controllers: [ProvidersController],
  providers: [ProvidersService],
})
export class ProvidersModule {}
