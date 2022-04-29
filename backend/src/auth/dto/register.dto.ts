import { IsEmail, IsString } from 'class-validator';

export class RegisterDto {
  @IsString()
  firstName: string; // дто для регистрации

  @IsString()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
