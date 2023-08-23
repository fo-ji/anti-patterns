import { PrismaService } from '@/lib/prisma';
import { Injectable } from '@nestjs/common';
import type { Tag } from '@prisma/client';

@Injectable()
export class TagsService {
  constructor(private readonly prismaService: PrismaService) {}

  async getTags(take?: number): Promise<Tag[]> {
    return await this.prismaService.tag.findMany({
      take,
      orderBy: [{ updatedAt: 'desc' }],
    });
  }
}
