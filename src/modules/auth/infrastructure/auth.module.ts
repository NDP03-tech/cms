import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from '../presentation/auth.controller';
import { LoginUseCase } from '../application/use-cases/login.use-case';
import { RefreshTokenUseCase } from '../application/use-cases/refresh-token.use-case';
import { UserRepository } from './persistence/user.repository';
import { UserOrmEntity } from './orm/user.orm-entity';
import { USER_REPOSITORY } from '../domain/repositories/user.repository.interface';

@Module({
  imports: [TypeOrmModule.forFeature([UserOrmEntity])],
  controllers: [AuthController],
  providers: [
    LoginUseCase,
    RefreshTokenUseCase,
    { provide: USER_REPOSITORY, useClass: UserRepository },
  ],
})
export class AuthModule {}
