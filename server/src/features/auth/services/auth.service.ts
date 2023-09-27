import { PrismaService } from '@/lib/prisma';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto, SignupDto } from '../dtos';
import type { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}

  async login(dto: LoginDto): Promise<Omit<User, 'password'> | null> {
    try {
      return await this.prismaService.user.findUnique({
        where: dto,
        select: {
          id: true,
          email: true,
          name: true,
          avatar: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      throw new UnauthorizedException('Email or password is incorrect');
    }
  }

  async signup(dto: SignupDto): Promise<Omit<User, 'password'> | null> {
    const { email } = dto;
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });
    if (user) throw new UnauthorizedException('Email has already exists');
    return await this.prismaService.user.create({
      data: dto,
      select: {
        id: true,
        email: true,
        name: true,
        avatar: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }
}
