import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RequestUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsBoolean()
  isActive: boolean;
}
