import { IsString, Length } from 'class-validator';

export class VerifyOtpDto {
  @IsString()
  sessionToken: string;

  @IsString()
  @Length(6, 6)
  otp: string;
}