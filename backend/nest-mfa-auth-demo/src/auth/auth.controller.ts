import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const user = await this.authService.validateUser(dto.email, dto.password);
    if (!user) throw new UnauthorizedException('Identifiants invalides');

    const sessionToken = await this.authService.generateOtp(user.id);
    return {
      otp_required: true,
      sessionToken,
    };
  }

  @Post('verify-otp')
  async verifyOtp(@Body() dto: VerifyOtpDto) {
    const userId = this.authService.verifyOtp(dto.sessionToken, dto.otp);
    if (!userId) throw new UnauthorizedException('Code OTP invalide ou expiré');

    const tokens = this.authService.generateTokens(userId);
    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: {
        id: userId,
        email: 'test@example.com',
      },
    };
  }

  @Post('refresh')
refreshAccessToken(@Body() dto: RefreshTokenDto) {
  const newToken = this.authService.refreshAccessToken(dto.refreshToken);
  if (!newToken) throw new UnauthorizedException('Refresh token invalide ou expiré');

  return {
    accessToken: newToken,
  };
} 

}