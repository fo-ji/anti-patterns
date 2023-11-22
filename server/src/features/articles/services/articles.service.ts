import { PrismaService } from '@/lib/prisma';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import type { Article } from '@prisma/client';
import { CreateArticleDto } from '../dtos';

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

  async createArticle(dto: CreateArticleDto): Promise<Article> {
    if (!dto.userId) throw new UnauthorizedException('User not found');
    return await this.prismaService.article.create({
      data: dto,
    });
  }
}
