import { IsString } from 'class-validator';

export class CreateProductDto {
    
    @IsString()
    Name: string

    @IsString()
    Description: string

    @IsString()
    price: string

    

}
