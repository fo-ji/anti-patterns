import { PrismaService } from '@/lib/prisma';
import { Injectable } from '@nestjs/common';
import type { Article } from '@prisma/client';

@Injectable()
export class ArticlesService {
  constructor(private readonly prismaService: PrismaService) {}

  getArticles(): Promise<Article[]> {
    return this.prismaService.article.findMany();
  }
}
