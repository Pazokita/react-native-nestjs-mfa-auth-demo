import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { OtpService } from './otp/otp.service';

@Injectable()
export class AuthService {
  constructor(private readonly otpService: OtpService) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<{ id: string; email: string } | null> {
    if (email === 'test@example.com' && password === 'password123') {
      return { id: '1', email };
    }
    return null;
  }

  generateOtp(userId: string): string {
    return this.otpService.generateOtp(userId);
  }

  verifyOtp(sessionToken: string, code: string): string | null {
    return this.otpService.verifyOtp(sessionToken, code);
  }

  generateTokens(userId: string): {
    accessToken: string;
    refreshToken: string;
  } {
    const JWT_SECRET = process.env.JWT_SECRET ?? 'demo_mfa_fallback_secret';
    const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET ?? 'demo_mfa_fallback_refresh';

    const accessToken = jwt.sign({ sub: userId }, JWT_SECRET, {
      expiresIn: '15m',
    });

    const refreshToken = jwt.sign(
      { sub: userId },
      JWT_REFRESH_SECRET,
      { expiresIn: '7d' },
    );

    return { accessToken, refreshToken };
  }
  refreshAccessToken(refreshToken: string): string | null {
    const JWT_SECRET = process.env.JWT_SECRET ?? 'demo_mfa_fallback_secret';
    const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET ?? 'demo_mfa_fallback_refresh';
  
    try {
      const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET) as { sub: string };
      const accessToken = jwt.sign({ sub: decoded.sub }, JWT_SECRET, { expiresIn: '15m' });
      return accessToken;
    } catch (err) {
      return null;
    }
  }
}

