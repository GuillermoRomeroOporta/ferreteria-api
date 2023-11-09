import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsCategories } from './entities/productsCategoriesentity';
import { ProductsCategoriesController } from './controller/productsCategories.controller';
import { ProductsCategoriesService } from './services/productsCategories.services';


@Module({
  imports: [TypeOrmModule.forFeature([ProductsCategories])],
  controllers: [ProductsCategoriesController],
  providers: [ProductsCategoriesService],
})
export class ProductsCategoriesModule {}
