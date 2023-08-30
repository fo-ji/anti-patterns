import { PrismaService } from '@/lib/prisma';
import { Injectable } from '@nestjs/common';
import type { Category } from '@prisma/client';

@Injectable()
export class CategoriesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getCategories(): Promise<Category[]> {
    return await this.prismaService.category.findMany();
  }

  async getCategory(categoryId: string): Promise<Category | null> {
    return await this.prismaService.category.findUnique({
      where: {
        id: categoryId,
      },
    });
  }
}
