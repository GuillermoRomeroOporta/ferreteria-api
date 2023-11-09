import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsCategories } from '../entities/productsCategoriesentity';
import { ProudctsCategoriesDto } from '../dtos/productsCategories.dto';

@Injectable()
export class ProductsCategoriesService {
  constructor(
    @InjectRepository(ProductsCategories)
    private readonly productsCategoriesRepository: Repository<ProductsCategories>,
  ) { }

  async created(payload: ProudctsCategoriesDto) {
    const products = await this.productsCategoriesRepository.create(payload);
    return await this.productsCategoriesRepository.save(products);
  }

  async getProductsCategories(): Promise<ProductsCategories[]> {
    return await this.productsCategoriesRepository.find({ order: { id: 'ASC' } });
  }

  async getProductsCategoriesId(id: number): Promise<ProductsCategories> {
    const products = await this.productsCategoriesRepository.findOne({
      where: { id },
    });
    return products;
  }

  async updated(id: number, payload: ProudctsCategoriesDto): Promise<ProductsCategories> {
    const products = await this.productsCategoriesRepository.findOne({
      where: { id: id },
    });
    this.productsCategoriesRepository.merge(products, payload);
    return await this.productsCategoriesRepository.save(products);
  }

  async delete(id: number): Promise<ProductsCategories> {
    const products = await this.productsCategoriesRepository.findOne({
      where: { id: id },
    });
    return await this.productsCategoriesRepository.remove(products);
  }
}
