import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ProudctsDto {
  @IsNumber()
  id?: number;

  @IsString()
  nombre: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  precio: number;

  @IsNumber()
  stock: number;

  @IsString()
  @IsOptional()
  descuento: string;
}
