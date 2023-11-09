import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from './users_entities';

@Entity({ name: 'usersImage' })
export class UsersImage {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
  id?: number;

  @Column()
  url: string;

  @ManyToOne(() => Users, (user) => user.image, { onDelete: 'CASCADE' })
  user: Users;
}
