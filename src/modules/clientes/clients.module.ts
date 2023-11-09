import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clients } from './entities/clients-entities';
import { ClientsController } from './controller/clients.controller';
import { ClientsService } from './services/clients.services';

@Module({
  imports: [TypeOrmModule.forFeature([Clients])],
  controllers: [ClientsController],
  providers: [ClientsService],
})
export class ClientsModule {}
