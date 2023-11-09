import { Products } from 'src/modules/products/entities/products.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'productsCategories' })
export class ProductsCategories {
  @PrimaryGeneratedColumn({ type: 'int4', name: 'id' })
  id: number;

  @Column({ type: 'varchar', name: 'nombre', length: 50 })
  nombre: string;

  @Column({ type: 'varchar', name: 'descuento', length: 50 })
  descuento: string;

  @ManyToOne(
    () => Products,
    (products: Products) => products.productsCategories,
  )
  @JoinTable()
  products: Products[];
}
