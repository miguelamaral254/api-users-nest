import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Res,
  HttpStatus,
  Query,
  ParseIntPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from './users.service';
import { RequestUserDto } from './dto/request-user.dto';
import { ResponseUserDTO } from './dto/response-user.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: RequestUserDto, @Res() res: Response) {
    const createdUser = await this.usersService.create(createUserDto);
    const location = `/users/${createdUser.id}`;
    res.status(HttpStatus.CREATED).location(location).send();
  }

  @Get()
  async findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  ): Promise<Pagination<ResponseUserDTO>> {
    limit = limit > 100 ? 100 : limit;

    const pagination: Pagination<User> = await this.usersService.paginate({
      page,
      limit,
    });

    return new Pagination<ResponseUserDTO>(
      pagination.items.map((user) => new ResponseUserDTO(user)),
      pagination.meta,
      pagination.links,
    );
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: Partial<RequestUserDto>,
  ) {
    return await this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
