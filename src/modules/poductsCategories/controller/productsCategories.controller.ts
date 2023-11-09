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
import { ProductsCategoriesService } from '../services/productsCategories.services';
import { ProudctsCategoriesDto } from '../dtos/productsCategories.dto';
  
  @Controller('productsCategories')
  export class ProductsCategoriesController {
    constructor(private readonly productsCategoriesService: ProductsCategoriesService) {}
  
    @Post('/')
    async createdProductsCategories(@Body() payload: ProudctsCategoriesDto) {
      const newProductsCategories = await this.productsCategoriesService.created(payload);
      const data = {
        data: newProductsCategories,
        message: 'created',
      };
      return data;
    }
  
    @Get('/')
    async getProductsCategories() {
      const productsCategories = await this.productsCategoriesService.getProductsCategories();
      const data = {
        data: productsCategories,
        message: 'ok',
      };
      return data;
    }
  
    @Get('/:id')
    async getProductsCategoriesId(@Param('id', ParseIntPipe) id: number) {
      const productsCategories = await this.productsCategoriesService.getProductsCategoriesId(id);
      const data = {
        data: productsCategories,
        message: 'ok',
      };
      return data;
    }
  
    @Put('/:id')
    async updatedProductsCategories(
      @Param('id', ParseIntPipe) id: number,
      @Body() payload: ProudctsCategoriesDto,
    ) {
      const productsCategories = await this.productsCategoriesService.updated(id, payload);
      const data = {
        data: productsCategories,
      };
      return data;
    }
  
    @Delete('/:id')
    async deletedProductsCategories(@Param('id', ParseIntPipe) id: number) {
      const productsCategories = await this.productsCategoriesService.delete(id);
      const data = {
        data: productsCategories,
      };
      return data;
    }
  }
  