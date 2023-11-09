import { Users } from 'src/modules/auth/entities/users_entities';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'sales' })
export class Sales {
  @PrimaryGeneratedColumn({ type: 'int4', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'fecha', length: 60 })
  fecha: string;

  @Column({ type: 'float', name: 'total' })
  total: number;

  @Column({ type: 'varchar', name: 'productos', length: 100 })
  productos: string;

  @ManyToOne(() => Users, (user: Users) => user.sales)
  user: Users[];
}
