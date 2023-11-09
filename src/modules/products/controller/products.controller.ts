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
import { ProductsService } from '../services/products.service';
import { ProudctsDto } from '../dtos/products.dto';
  
  @Controller('products')
  export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}
  
    @Post('/')
    async createdProducts(@Body() payload: ProudctsDto) {
      const newProducts = await this.productsService.created(payload);
      const data = {
        data: newProducts,
        message: 'created',
      };
      return data;
    }
  
    @Get('/')
    async getProducts() {
      const products = await this.productsService.getProducts();
      const data = {
        data: products,
        message: 'ok',
      };
      return data;
    }
  
    @Get('/:id')
    async getProductsId(@Param('id', ParseIntPipe) id: number) {
      const products = await this.productsService.getProductsId(id);
      const data = {
        data: products,
        message: 'ok',
      };
      return data;
    }
  
    @Put('/:id')
    async updatedProducts(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: ProudctsDto,
    ) {
      const products = await this.productsService.updated(id, payload);
      const data = {
        data: products,
      };
      return data;
    }
  
    @Delete('/:id')
    async deletedProducts(@Param('id', ParseIntPipe) id: number) {
      const products = await this.productsService.delete(id);
      const data = {
        data: products,
      };
      return data;
    }
  }
  