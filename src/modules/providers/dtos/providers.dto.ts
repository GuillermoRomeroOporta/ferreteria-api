import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ProvidersDto {
  @IsNumber()
  id?: number;

  @IsString()
  nombre: string;

  @IsString()
  direccion: string;

  @IsNumber()
  telefono: number;

  @IsString()
  @IsOptional()
  email: string;
}
