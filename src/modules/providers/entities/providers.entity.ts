import { Users } from 'src/modules/auth/entities/users_entities';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'providers' })
export class Providers {
  @PrimaryGeneratedColumn({ type: 'int4', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'nombre', length: 50 })
  nombre: string;

  @Column({ type: 'varchar', name: 'direccion', length: 100 })
  direccion: string;

  @Column({ type: 'float', name: 'telefono' })
  telefono: number;

  @Column({ type: 'varchar', name: 'email', length: 100 })
  email: string;

  @ManyToOne(() => Users, (users: Users) => users.provedores)
  users: Users[];
}
