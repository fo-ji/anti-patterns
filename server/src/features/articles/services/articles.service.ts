import { PrismaService } from '@/lib/prisma';
import { Injectable } from '@nestjs/common';
import type { Article } from '@prisma/client';

@Injectable()
export class ArticlesService {
  constructor(private readonly prismaService: PrismaService) {}

  async getArticles(categoryId?: string): Promise<Article[]> {
    return await this.prismaService.article.findMany({
      where: {
        categoryId,
      },
      orderBy: [{ updatedAt: 'desc' }],
    });
  }

  async getArticle(articleId: string): Promise<Article | null> {
    return await this.prismaService.article.findUnique({
      where: {
        id: articleId,
      },
      include: {
        user: true,
        category: true,
        comments: true,
        favorites: true,
        articleTags: true,
      },
    });
  }
}
