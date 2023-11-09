import { Users } from 'src/modules/auth/entities/users_entities';
import { ProductsCategories } from 'src/modules/poductsCategories/entities/productsCategoriesentity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class Products {
  @PrimaryGeneratedColumn({ type: 'int4', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'nombre', length: 50, nullable: false })
  nombre: string;

  @Column({ type: 'varchar', name: 'descripcion', length: 100 })
  descripcion: string;

  @Column({ type: 'float', name: 'precio' })
  precio: number;

  @Column({ type: 'float', name: 'stock' })
  stock: number;

  @Column({ type: 'varchar', name: 'descuento', length: 50 })
  descuento: string;

  @ManyToOne(() => Users, (user: Users) => user.products)
  @JoinTable()
  users: Users[];

  @OneToMany(
    () => ProductsCategories,
    (productsCategories: ProductsCategories) => productsCategories.products,
    {
      cascade: true,
      eager: true,
    },
  )
  @JoinTable()
  productsCategories: ProductsCategories[];
}
