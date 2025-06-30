import { Response } from 'express';
import { UsersService } from './users.service';
import { RequestUserDto } from './dto/request-user.dto';
import { ResponseUserDTO } from './dto/response-user.dto';
import { Pagination } from 'nestjs-typeorm-paginate';
import { User } from './entities/user.entity';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(createUserDto: RequestUserDto, res: Response): Promise<void>;
    findAll(page: number, limit: number): Promise<Pagination<ResponseUserDTO>>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: Partial<RequestUserDto>): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
