import { IsNumber, IsOptional, IsString } from 'class-validator';

export class SalesDto {
  @IsNumber()
  id?: number;

  @IsString()
  fecha: string;

  @IsNumber()
  total: number;

  @IsString()
  productos: string;
}
