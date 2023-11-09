import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Providers } from '../entities/providers.entity';
import { ProvidersDto } from '../dtos/providers.dto';

@Injectable()
export class ProvidersService {
  constructor(
    @InjectRepository(Providers)
    private readonly providersRepository: Repository<Providers>,
  ) { }

  async created(payload: ProvidersDto) {
    const providers = await this.providersRepository.create(payload);
    return await this.providersRepository.save(providers);
  }

  async getProviders(): Promise<Providers[]> {
    return await this.providersRepository.find({ order: { id: 'ASC' } });
  }

  async getProvidersId(id: number): Promise<Providers> {
    const providers = await this.providersRepository.findOne({
      where: { id },
    });
    return providers;
  }

  async updated(id: number, payload: ProvidersDto): Promise<Providers> {
    const providers = await this.providersRepository.findOne({
      where: { id: id },
    });
    this.providersRepository.merge(providers, payload);
    return await this.providersRepository.save(providers);
  }

  async delete(id: number): Promise<Providers> {
    const providers = await this.providersRepository.findOne({
      where: { id: id },
    });
    return await this.providersRepository.remove(providers);
  }
}
