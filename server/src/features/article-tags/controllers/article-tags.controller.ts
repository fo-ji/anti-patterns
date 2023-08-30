import { Controller, Get, Param } from '@nestjs/common';
import { ArticleTagsService } from '../services';
import { ArticleTag } from '@prisma/client';

@Controller('article-tags')
export class ArticleTagsController {
  constructor(private readonly articleTagsService: ArticleTagsService) {}

  @Get(':tagId')
  getArticleTags(@Param('tagId') tagId: string): Promise<ArticleTag[] | null> {
    return this.articleTagsService.getArticleTags(tagId);
  }
}
