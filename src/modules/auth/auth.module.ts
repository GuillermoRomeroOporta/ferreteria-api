import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/users_entities';
import { UsersImage } from './entities/user_image.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Users, UsersImage])],
  controllers: [AuthController, UsersController],
  providers: [AuthService, UsersService],
})
export class AuthModule {}
