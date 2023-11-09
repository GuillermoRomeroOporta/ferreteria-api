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
import { SalesDto } from '../dtos/sales.dto';
import { SalesService } from '../services/sales.services';
  
  @Controller('sales')
  export class SalesController {
    constructor(private readonly salesService: SalesService) {}
  
    @Post('/')
    async createSales(@Body() payload: SalesDto) {
      const newSales = await this.salesService.created(payload);
      const data = {
        data: newSales,
        message: 'created',
      };
      return data;
    }
  
    @Get('/')
    async getSales() {
      const sales = await this.salesService.getSales();
      const data = {
        data: sales,
        message: 'ok',
      };
      return data;
    }
  
    @Get('/:id')
    async getSalesId(@Param('id', ParseIntPipe) id: number) {
      const sales = await this.salesService.getSalesId(id);
      const data = {
        data: sales,
        message: 'ok',
      };
      return data;
    }
  
    @Put('/:id')
    async updatedSales(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: SalesDto,
    ) {
      const sales = await this.salesService.updated(id, payload);
      const data = {
        data: sales,
      };
      return data;
    }
  
    @Delete('/:id')
    async deletedSales(@Param('id', ParseIntPipe) id: number) {
      const sales = await this.salesService.delete(id);
      const data = {
        data: sales,
      };
      return data;
    }
  }
  