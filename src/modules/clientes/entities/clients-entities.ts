import { Users } from 'src/modules/auth/entities/users_entities';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'clients' })
export class Clients {
  @PrimaryGeneratedColumn({ type: 'int4', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'nombre', length: 50 })
  nombre: string;

  @Column({ type: 'varchar', name: 'direccion', length: 100 })
  direccion: string;

  @Column({ type: 'float', name: 'telefono' })
  telefono: number;

  @Column({ type: 'varchar', name: 'email' })
  email: string;

  @ManyToOne(() => Users, (user: Users) => user.clients)
  @JoinTable()
  users: Users[];
}
