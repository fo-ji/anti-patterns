// import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { Controller, Get, Param, Query } from '@nestjs/common';
import { ArticlesService } from '../services';
import type { Article } from '@prisma/client';
// import { AuthGuard } from '@/features/auth';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  // @UseGuards(AuthGuard)
  @Get()
  getArticles(@Query('categoryId') categoryId?: string): Promise<Article[]> {
    return this.articlesService.getArticles(categoryId);
  }

  @Get(':id')
  getArticle(@Param('id') articleId: string): Promise<Article | null> {
    return this.articlesService.getArticle(articleId);
  }
}
