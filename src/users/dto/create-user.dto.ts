import { IsEmail, isEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    phone:string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email:String;

    @IsString()
    @IsNotEmpty()
    password:String;

}
