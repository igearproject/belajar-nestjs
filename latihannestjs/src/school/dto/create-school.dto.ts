import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateSchoolDto {
  @IsString()
  @IsNotEmpty()
  school_code: string;

  @IsString()
  @IsNotEmpty()
  school_name: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsNumberString()
  @IsOptional()
  @MinLength(7)
  @MaxLength(20)
  phone?: string;
}
