import { IsBoolean, isBoolean, IsDate, IsDateString, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateRentDto {
    
    @IsNotEmpty()
    @IsString()
    responsible: string;

    @IsNotEmpty()
    @IsString()
    phone: string;
    
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    price: number;
    
    @IsNotEmpty()
    @IsBoolean()
    paid: boolean;

    @IsDateString()
    date: Date;

    @IsString()
    @IsOptional()
    type_event: string;

    @IsNotEmpty()
    @IsMongoId()
    user_id: string;
}
