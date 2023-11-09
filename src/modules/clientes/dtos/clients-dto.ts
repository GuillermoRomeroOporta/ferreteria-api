import { IsNumber, IsOptional, IsString } from 'class-validator';

export class ClientsDto {
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