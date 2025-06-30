import { RequestUserDto } from './dto/request-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    create(requestUserDto: RequestUserDto): Promise<User>;
    paginate(options: IPaginationOptions): Promise<Pagination<User>>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: Partial<RequestUserDto>): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
