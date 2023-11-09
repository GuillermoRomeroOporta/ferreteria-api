import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UsersImage } from './user_image.entities';
import { Clients } from 'src/modules/clientes/entities/clients-entities';
import { Products } from 'src/modules/products/entities/products.entity';
import { Providers } from 'src/modules/providers/entities/providers.entity';
import { Sales } from 'src/modules/sales/entities/sales.entities';

@Entity({ name: 'users' })
export class Users {
  @PrimaryGeneratedColumn({ name: 'id', type: 'int4' })
  id?: number;
  @Column({ name: 'name', type: 'varchar', length: 100, nullable: false })
  name: string;

  @Column({
    name: 'email',
    type: 'varchar',
    length: 100,
    nullable: false,
    unique: true,
  })
  email: string;
  @Column({
    name: 'password',
    type: 'varchar',
    length: 100,
    nullable: false,
    select: false,
  })
  password: string;
  @Column({ name: 'telefono', type: 'varchar', length: 20, nullable: true })
  telefono: string;
  @Column({ name: 'token', type: 'varchar', length: 200, nullable: true })
  token: string;
  @Column({
    name: 'is_active',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  isActive: boolean;

  @Column({ name: 'file_name', type: 'varchar', nullable: true })
  fileName: string;

  @OneToOne(() => UsersImage, (userImage) => userImage.user, {
    onDelete: 'CASCADE',
    eager: true,
  })
  image: UsersImage[];

  @OneToMany(() => Clients, (client: Clients) => client.users, {
    cascade: true,
    eager: true,
  })
  @JoinTable({ name: 'clients' })
  clients: Clients[];

  @OneToMany(() => Products, (product: Products) => product.users, {
    cascade: true,
    eager: true,
  })
  @JoinTable({ name: 'products' })
  products: Products[];

  @OneToMany(() => Providers, (provedores: Providers) => provedores.users, {
    cascade: true,
    eager: true,
  })
  @JoinTable({ name: 'providers_id' })
  provedores: Providers[];

  @ManyToMany(() => Sales, (sales: Sales) => sales.user, {
    cascade: true,
    eager: true,
  })
  @JoinTable({ name: 'sales_id' })
  sales: Sales[];
}
