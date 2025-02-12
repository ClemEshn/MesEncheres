import { IsUUID, IsString, IsNumber, IsOptional, IsDate, Min, Max } from 'class-validator';

export class CreateAnnonceDto {
    
    @IsString()
    name: string;

    @IsNumber()
    basePrice: number;

    @Min(0)
    @Max(5)
    state: string;

    @IsOptional()
    @IsString()
    imageOne?: string;

    @IsOptional()
    @IsString()
    imageTwo?: string;

    @IsOptional()
    @IsString()
    imageThree?: string;

    @IsOptional()
    @IsString()
    imageFour?: string;

    // @IsUUID()
    userId: string;

    // @IsDate()
    // date: Date;

    @IsString()
    localisation: string;
}
