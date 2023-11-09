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
import { ProvidersService } from '../services/providers.services';
import { ProvidersDto } from '../dtos/providers.dto';

@Controller('providers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Post('/')
  async createdProducts(@Body() payload: ProvidersDto) {
    const newProviders = await this.providersService.created(payload);
    const data = {
      data: newProviders,
      message: 'created',
    };
    return data;
  }

  @Get('/')
  async getProviders() {
    const providers = await this.providersService.getProviders();
    const data = {
      data: providers,
      message: 'ok',
    };
    return data;
  }

  @Get('/:id')
  async getProvidersId(@Param('id', ParseIntPipe) id: number) {
    const providers = await this.providersService.getProvidersId(id);
    const data = {
      data: providers,
      message: 'ok',
    };
    return data;
  }

  @Put('/:id')
  async updatedPrviders(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: ProvidersDto,
  ) {
    const providers = await this.providersService.updated(id, payload);
    const data = {
      data: providers,
    };
    return data;
  }

  @Delete('/:id')
  async deletedProviders(@Param('id', ParseIntPipe) id: number) {
    const providers = await this.providersService.delete(id);
    const data = {
      data: providers,
    };
    return data;
  }
}
