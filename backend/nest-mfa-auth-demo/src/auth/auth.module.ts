import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { OtpService } from './otp/otp.service';

@Module({
  providers: [AuthService, OtpService],
  controllers: [AuthController],
})
export class AuthModule {}