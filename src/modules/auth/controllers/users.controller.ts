import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserPartialTypeDto, UsersDto } from '../dtos/users_dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  async createUser(@Body() payload: UsersDto) {
    const User = await this.usersService.created(payload);
    const data = {
      message: 'User created successfully',
      data: User,
    };

    return data;
  }

  @Get('/')
  async getAllUsers() {
    const users = await this.usersService.findAll();
    const data = {
      message: 'Users retrieved successfully',
      data: users,
    };

    return data;
  }

  @Get('/:id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.findById(id);
    const data = {
      message: 'User retrieved successfully',
      data: user,
    };

    return data;
  }

  @Delete('/:id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    return await this.usersService.deleted(id);
  }

  @Put('/:id')
  async updatedUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UserPartialTypeDto,
  ) {
    return await this.usersService.updated(id, payload);
  }
}
