import { User } from '../entities/user.entity';

export class ResponseUserDTO {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;

  constructor(user: Partial<User>) {
    this.id = user.id as number;
    this.firstName = user.firstName as string;
    this.lastName = user.lastName as string;
    this.isActive = user.isActive as boolean;
  }
}
