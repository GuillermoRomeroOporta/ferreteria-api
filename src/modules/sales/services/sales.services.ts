import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Sales } from '../entities/sales.entities';
import { SalesDto } from '../dtos/sales.dto';

@Injectable()
export class SalesService {
  constructor(
    @InjectRepository(Sales)
    private readonly salesRepository: Repository<Sales>,
  ) { }

  async created(payload: SalesDto) {
    const sales = await this.salesRepository.create(payload);
    return await this.salesRepository.save(sales);
  }

  async getSales(): Promise<Sales[]> {
    return await this.salesRepository.find({ order: { id: 'ASC' } });
  }

  async getSalesId(id: number): Promise<Sales> {
    const sales = await this.salesRepository.findOne({
      where: { id },
    });
    return sales;
  }

  async updated(id: number, payload: SalesDto): Promise<Sales> {
    const sales = await this.salesRepository.findOne({
      where: { id: id },
    });
    this.salesRepository.merge(sales, payload);
    return await this.salesRepository.save(sales);
  }

  async delete(id: number): Promise<Sales> {
    const sales = await this.salesRepository.findOne({
      where: { id: id },
    });
    return await this.salesRepository.remove(sales);
  }
}
