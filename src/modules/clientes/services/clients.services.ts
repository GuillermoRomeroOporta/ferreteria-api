import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Clients } from '../entities/clients-entities';
import { ClientsDto } from '../dtos/clients-dto';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Clients)
    private readonly clientsRepository: Repository<Clients>,
  ) { }

  async created(payload: ClientsDto) {
    const clients = await this.clientsRepository.create(payload);
    return await this.clientsRepository.save(clients);
  }

  async getClients(): Promise<Clients[]> {
    return await this.clientsRepository.find({ order: { id: 'ASC' } });
  }

  async getClientsId(id: number): Promise<Clients> {
    const clients = await this.clientsRepository.findOne({
      where: { id },
    });
    return clients;
  }

  async updated(id: number, payload: ClientsDto): Promise<Clients> {
    const clients = await this.clientsRepository.findOne({
      where: { id: id },
    });
    this.clientsRepository.merge(clients, payload);
    return await this.clientsRepository.save(clients);
  }

  async delete(id: number): Promise<Clients> {
    const clients = await this.clientsRepository.findOne({
      where: { id: id },
    });
    return await this.clientsRepository.remove(clients);
  }
}
