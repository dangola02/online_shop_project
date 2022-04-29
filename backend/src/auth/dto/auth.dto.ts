import { IsString } from 'class-validator';

export class AuthDto { //дто для логина
    @IsString()
    email: string

    @IsString()
    password: string
}