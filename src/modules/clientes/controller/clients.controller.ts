import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Post,
    Put,
  } from '@nestjs/common';
import { ClientsService } from '../services/clients.services';
import { ClientsDto } from '../dtos/clients-dto';
  
  @Controller('clientes')
  export class ClientsController {
    constructor(private readonly clientsService: ClientsService) {}
  
    @Post('/')
    async createdClients(@Body() payload: ClientsDto) {
      const newClients = await this.clientsService.created(payload);
      const data = {
        data: newClients,
        message: 'created',
      };
      return data;
    }
  
    @Get('/')
    async getClients() {
      const clients = await this.clientsService.getClients();
      const data = {
        data: clients,
        message: 'ok',
      };
      return data;
    }
  
    @Get('/:id')
    async getClientsId(@Param('id', ParseIntPipe) id: number) {
      const clients = await this.clientsService.getClientsId(id);
      const data = {
        data: clients,
        message: 'ok',
      };
      return data;
    }
  
    @Put('/:id')
    async updatedClients(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: ClientsDto,
    ) {
      const clients = await this.clientsService.updated(id, payload);
      const data = {
        data: clients,
      };
      return data;
    }
  
    @Delete('/:id')
    async deletedClients(@Param('id', ParseIntPipe) id: number) {
      const clients = await this.clientsService.delete(id);
      const data = {
        data: clients,
      };
      return data;
    }
  }
  