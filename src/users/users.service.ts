import { HttpStatus, Injectable } from '@nestjs/common';
import { RequestUserDto } from './dto/request-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusinessException } from '../exceptions/business.exception';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate'; // ✅ importe a função paginate

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(requestUserDto: RequestUserDto): Promise<User> {
    const newUser = this.userRepository.create(requestUserDto);
    return await this.userRepository.save(newUser);
  }

  async paginate(options: IPaginationOptions): Promise<Pagination<User>> {
    const queryBuilder = this.userRepository.createQueryBuilder('user'); // ✅ nome corrigido
    queryBuilder.orderBy('user.firstName', 'DESC');

    return await paginate<User>(queryBuilder, options);
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new BusinessException('User Not Found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async update(id: number, updateUserDto: Partial<RequestUserDto>) {
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
