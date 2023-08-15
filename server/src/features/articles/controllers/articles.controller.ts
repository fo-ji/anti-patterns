import { Controller, Get } from '@nestjs/common';
import { ArticlesService } from '../services';
import type { Article } from '@prisma/client';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  getArticles(): Promise<Article[]> {
    return this.articlesService.getArticles();
  }
}
