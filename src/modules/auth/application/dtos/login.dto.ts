export class LoginDto {
  email: string;
  password: string;
}

export class TokenResponseDto {
  accessToken: string;
  refreshToken: string;
}
