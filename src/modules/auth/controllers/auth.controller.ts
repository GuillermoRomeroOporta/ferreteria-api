import {
  Controller,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthDto } from '../dtos/auth-dto';
import { UsersService } from '../services/users.service';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userServise: UsersService,
    private readonly authService: AuthService,
  ) {}

  async login(payload: AuthDto) {
    try {
      const { password, ...user } = await this.userServise.findByEmail(
        payload.email,
      );

      const isMatch: boolean = await bcrypt.compare(payload.password, password);
      if (!isMatch) {
        throw new UnauthorizedException('Credenciales inválidas');
      }
      return {
        user,
        isMatch,
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
