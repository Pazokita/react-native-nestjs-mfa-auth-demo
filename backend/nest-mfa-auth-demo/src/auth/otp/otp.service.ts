import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';
import * as crypto from 'crypto';

@Injectable()
export class OtpService {
  private otpStore = new Map<string, { code: string; expires: number; userId: string }>();

  generateOtp(userId: string): string {
    const code = crypto.randomInt(100000, 999999).toString();
    const sessionToken = crypto.randomUUID();

    this.otpStore.set(sessionToken, {
      code,
      expires: Date.now() + 5 * 60 * 1000, 
      userId,
    });

    console.log(`[OTP DEBUG] Code pour ${userId}: ${code}`);
    return sessionToken;
  }

  verifyOtp(sessionToken: string, otp: string): string | null {
    const record = this.otpStore.get(sessionToken);
    if (!record || record.expires < Date.now()) return null;

    const isValid = record.code === otp;
    if (isValid) {
      this.otpStore.delete(sessionToken);
      return record.userId;
    }

    return null;
  }
}
