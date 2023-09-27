import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../services';
import type { User } from '@prisma/client';
import { LoginDto, SignupDto } from '../dtos';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() dto: LoginDto): Promise<Omit<User, 'password'> | null> {
    return await this.authService.login(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('signup')
  async signup(@Body() dto: SignupDto): Promise<Omit<User, 'password'> | null> {
    return await this.authService.signup(dto);
  }
}
