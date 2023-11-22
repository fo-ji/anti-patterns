import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  // UseGuards,
} from '@nestjs/common';
import { ArticlesService } from '../services';
import type { Article } from '@prisma/client';
// import { AuthGuard } from '@/features/auth';
import { CreateArticleDto } from '../dtos';

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

  // @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post()
  async createPost(@Body() dto: CreateArticleDto): Promise<Article | null> {
    return await this.articlesService.createArticle(dto);
  }
}
