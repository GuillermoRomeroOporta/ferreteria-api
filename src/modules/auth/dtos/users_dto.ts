import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Clients } from 'src/modules/clientes/entities/clients-entities';
import { Column, JoinTable, OneToOne } from 'typeorm';

export class UsersDto {
  @IsNumber()
  @IsOptional()
  readonly id?: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @MinLength(8)
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsOptional()
  @MaxLength(20)
  readonly telefono: string;

  @IsString()
  @IsOptional()
  @MaxLength(200)
  readonly token: string;

  @IsBoolean()
  @IsOptional()
  readonly isActive: boolean;

  @IsString()
  @IsOptional()
  fileName: string;

  @IsArray({ each: true })
  @IsString()
  @IsOptional()
  image?: string[];
}

export class UserPartialTypeDto extends PartialType(UsersDto) {}
