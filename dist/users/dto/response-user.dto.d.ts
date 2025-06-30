import { User } from '../entities/user.entity';
export declare class ResponseUserDTO {
    id: number;
    firstName: string;
    lastName: string;
    isActive: boolean;
    constructor(user: Partial<User>);
}
