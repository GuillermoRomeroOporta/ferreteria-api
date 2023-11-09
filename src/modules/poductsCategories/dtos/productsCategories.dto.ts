import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ProudctsCategoriesDto {
  @IsNumber()
  id?: number;

  @IsString()
  nombre: string;

  @IsString()
  @IsOptional()
  descuento: string;
}
