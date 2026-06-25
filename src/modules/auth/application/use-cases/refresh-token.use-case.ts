import { Injectable } from '@nestjs/common';

@Injectable()
export class RefreshTokenUseCase {
  async execute(refreshToken: string): Promise<{ accessToken: string }> {
    // TODO: validate refresh token từ Redis, cấp access token mới
    throw new Error('Not implemented');
  }
}
