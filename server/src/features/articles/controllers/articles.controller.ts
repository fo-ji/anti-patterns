import { Controller, Get, Param } from '@nestjs/common';
import { ArticlesService } from '../services';
import type { Article } from '@prisma/client';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getArticles(): Promise<Article[]> {
    return this.articlesService.getArticles();
  }

  @Get(':id')
  getArticle(@Param('id') articleId: string): Promise<Article | null> {
    return this.articlesService.getArticle(articleId);
  }
}
