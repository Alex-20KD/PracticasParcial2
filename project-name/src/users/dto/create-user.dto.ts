import { IsNotEmpty, IsOptional, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsOptional()
    @IsNumber()
    id: number;
      
    @IsString()
    @IsNotEmpty()// Primary key, should be a number
    name: string;

    @IsString()
    email: string;

    @IsString()
    password?: string;

    @IsNumber()// Optional field
    age: number;

    @IsOptional()
    status?: boolean; // Optional field, default is true
}
