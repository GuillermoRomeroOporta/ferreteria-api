import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Users } from '../entities/users_entities';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPartialTypeDto, UsersDto } from '../dtos/users_dto';
import * as bcrypt from 'bcrypt';
import { UsersImage } from '../entities/user_image.entities';

@Injectable()
export class UsersService {
  users: any[] = [];

  constructor(
    @InjectRepository(UsersImage)
    private readonly usersImageRepository: Repository<UsersImage>,
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,

    @Inject(DataSource) private readonly dataSources: DataSource,
  ) {}

  countItems() {
    return this.users.length;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      where: { email },
      select: {
        id: true,
        email: true,
        name: true,
        password: true,
      },
    });

    if (!user) {
      throw new NotFoundException('No se encontro el usuario');
    }

    return user;
  }
  async created(payload: UsersDto) {
    console.log(typeof payload.password);
    const { image = [], ...rest } = payload;
    const user = await this.usersRepository.create({
      ...rest,
      image: image.map((image) =>
        this.usersImageRepository.create({ url: image }),
      ),
      password: await bcrypt.hash(payload.password, 10),
    });
    console.log(user);

    const userSaved = await this.usersRepository.save(user);
    return userSaved;
  }

  // async created(payload: UsersDto) {
  //   const existingUser = await this.usersRepository.findOne({
  //     where: { email: payload.email },
  //   });

  //   if (existingUser) {
  //     throw new ConflictException('El correo electrónico ya está en uso');
  //   }

  //   const hashedPassword = await bcrypt.hash(payload.password, 10);

  //   const newUser = this.usersRepository.create({
  //     ...payload,
  //     password: hashedPassword,
  //   });
  //   return this.usersRepository.save(newUser);
  // }

  async findAll() {
    const users = await this.usersRepository.find();
    return users;
  }

  async findById(id: number) {
    const user = await this.usersRepository.findOne({ where: { id: id } });
    return user;
  }

  deleted(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1);
    return 'Usuario eliminado con éxito';
  }

  async updated(id: number, payload: UserPartialTypeDto) {
    const { image, ...rest } = payload;
    const user = await this.usersRepository.preload({
      id: id,
      ...rest,
      image: [],
    });
    const queryRunner = this.dataSources.createQueryRunner();
    await queryRunner.startTransaction();
    await queryRunner.connect();
    if (image) {
      await queryRunner.manager.delete(UsersImage, { user: { id } });
      user.image = image.map((valorimage) =>
        this.usersImageRepository.create({ url: valorimage }),
      );
    } else {
      user.image = await this.usersImageRepository.findBy({
        user: { id: id },
      });
    }
    await queryRunner.manager.save(user);
    await queryRunner.commitTransaction();
    await queryRunner.release();
    return user;
  }
}
