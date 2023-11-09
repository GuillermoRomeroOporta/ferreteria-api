import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from '../entities/products.entity';
import { ProudctsDto } from '../dtos/products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private readonly productsRepository: Repository<Products>,
  ) { }

  async created(payload: ProudctsDto) {
    const products = await this.productsRepository.create(payload);
    return await this.productsRepository.save(products);
  }

  async getProducts(): Promise<Products[]> {
    return await this.productsRepository.find({ order: { id: 'ASC' } });
  }

  async getProductsId(id: number): Promise<Products> {
    const products = await this.productsRepository.findOne({
      where: { id },
    });
    return products;
  }

  async updated(id: number, payload: ProudctsDto): Promise<Products> {
    const products = await this.productsRepository.findOne({
      where: { id: id },
    });
    this.productsRepository.merge(products, payload);
    return await this.productsRepository.save(products);
  }

  async delete(id: number): Promise<Products> {
    const products = await this.productsRepository.findOne({
      where: { id: id },
    });
    return await this.productsRepository.remove(products);
  }
}
